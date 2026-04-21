/**
 * BaseDiff Main JavaScript
 * Combined: Theme, Mobile Menu, Counters, Scroll Effects, ScrollSpy, Terminal Animation
 */
(function () {
    'use strict';

    // 1. THEME TOGGLE
    var themeKey = 'basediff-theme';
    var html = document.documentElement;
    var themeToggle = document.getElementById('theme-toggle');

    function applyTheme(theme) {
        html.setAttribute('data-theme', theme);
        localStorage.setItem(themeKey, theme);
    }

    function getInitialTheme() {
        var saved = localStorage.getItem(themeKey);
        if (saved) return saved;
        return (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) ? 'light' : 'dark';
    }

    applyTheme(getInitialTheme());

    if (themeToggle) {
        themeToggle.addEventListener('click', function () {
            applyTheme(html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
        });
    }

    // 2. MOBILE MENU
    var hamburger = document.getElementById('nav-hamburger');
    var menu = document.getElementById('mobile-menu');
    var icon = document.getElementById('hamburger-icon');

    if (hamburger && menu) {
        var menuOpen = false;

        function toggleMenu() {
            menuOpen = !menuOpen;
            menu.classList.toggle('open', menuOpen);
            hamburger.setAttribute('aria-expanded', String(menuOpen));
            if (icon) {
                icon.classList.toggle('fa-bars', !menuOpen);
                icon.classList.toggle('fa-xmark', menuOpen);
            }
        }

        function closeMenu() {
            if (!menuOpen) return;
            menuOpen = false;
            menu.classList.remove('open');
            hamburger.setAttribute('aria-expanded', 'false');
            if (icon) {
                icon.classList.add('fa-bars');
                icon.classList.remove('fa-xmark');
            }
        }

        hamburger.addEventListener('click', function (e) {
            e.stopPropagation();
            toggleMenu();
        });

        menu.querySelectorAll('a').forEach(function (a) {
            a.addEventListener('click', closeMenu);
        });

        document.addEventListener('click', function (e) {
            if (menuOpen && !menu.contains(e.target) && !hamburger.contains(e.target)) closeMenu();
        });

        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') closeMenu();
        });
    }

    // 3. STAT COUNTERS
    var counters = document.querySelectorAll('.counter');
    var countersAnimated = false;

    function animateCounters() {
        if (countersAnimated) return;
        counters.forEach(function (el) {
            var target = parseInt(el.getAttribute('data-target'), 10);
            var duration = 1500;
            var startTime = null;

            function step(timestamp) {
                if (!startTime) startTime = timestamp;
                var progress = Math.min((timestamp - startTime) / duration, 1);
                var eased = 1 - Math.pow(1 - progress, 3);
                el.textContent = Math.floor(eased * target);
                if (progress < 1) {
                    requestAnimationFrame(step);
                } else {
                    el.textContent = target;
                }
            }
            requestAnimationFrame(step);
        });
        countersAnimated = true;
    }

    // 4. SCROLL EFFECTS (Navbar, BackToTop, ScrollSpy)
    var navbar = document.getElementById('navbar');
    var backToTop = document.getElementById('back-to-top');
    var sections = document.querySelectorAll('section[id]');
    var navLinks = document.querySelectorAll('.nav-links a');

    function updateScroll() {
        var y = window.scrollY;

        // Navbar class
        if (navbar) {
            if (y > 50) navbar.classList.add('scrolled');
            else navbar.classList.remove('scrolled');
        }

        // Back to top
        if (backToTop) {
            if (y > 500) backToTop.classList.add('show');
            else backToTop.classList.remove('show');
        }

        // ScrollSpy
        var scrollPos = y + 100;
        sections.forEach(function (section) {
            var top = section.offsetTop;
            var height = section.offsetHeight;
            var id = section.getAttribute('id');

            if (scrollPos >= top && scrollPos < top + height) {
                navLinks.forEach(function (link) {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '/#' + id || link.getAttribute('href') === '#' + id) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', updateScroll);
    if (backToTop) {
        backToTop.addEventListener('click', function () {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // 5. TERMINAL ANIMATION
    var termBody = document.getElementById('terminal-body');
    if (termBody) {
        var terminalLines = termBody.innerHTML;
        termBody.innerHTML = ''; // Clear for animation

        var observerTerm = new IntersectionObserver(function (entries) {
            if (entries[0].isIntersecting) {
                typeTerminal();
                observerTerm.disconnect();
            }
        }, { threshold: 0.5 });

        observerTerm.observe(termBody);

        function typeTerminal() {
            // Simple fade-in lines animation for better UX than letter-by-letter
            var tempDiv = document.createElement('div');
            tempDiv.innerHTML = terminalLines;
            var lines = Array.from(tempDiv.querySelectorAll('.line'));

            lines.forEach(function (line, index) {
                line.style.opacity = '0';
                line.style.transform = 'translateY(5px)';
                line.style.transition = 'all 0.3s ease-out';
                termBody.appendChild(line);

                setTimeout(function () {
                    line.style.opacity = '1';
                    line.style.transform = 'translateY(0)';
                }, index * 250);
            });
        }
    }

    // 6. INITIALIZATION
    document.addEventListener('DOMContentLoaded', function () {
        // AOS init
        if (window.AOS) {
            AOS.init({
                duration: 700,
                easing: 'ease-out-cubic',
                once: true,
                offset: 80,
                disable: function () {
                    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
                }
            });
        }

        // Footer year (redundant check)
        var yearEl = document.getElementById('footer-year');
        if (yearEl) yearEl.textContent = new Date().getFullYear();

        // Intersection Observer for counters
        var statsSection = document.querySelector('.stats');
        if (statsSection && 'IntersectionObserver' in window) {
            var counterObserver = new IntersectionObserver(function (entries) {
                if (entries[0].isIntersecting) {
                    animateCounters();
                    counterObserver.disconnect();
                }
            }, { threshold: 0.3 });
            counterObserver.observe(statsSection);
        }

        updateScroll();
    });

    // 7. KEYBOARD SHORTCUTS
    document.addEventListener('keydown', function (e) {
        if (['INPUT', 'TEXTAREA'].includes(e.target.tagName)) return;

        // Toggle theme (D)
        if (e.key.toLowerCase() === 'd') {
            if (themeToggle) themeToggle.click();
        }
        // Scroll to top (T)
        if (e.key.toLowerCase() === 't') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        // Escape (ESC) - generic close
        if (e.key === 'Escape') {
            if (window.closeLightbox) window.closeLightbox();
        }
    });

    // 8. EASTER EGG
    console.log(
        "%cBasediff%c Developers Console \n" +
        "%cSELECT * FROM basediff WHERE quality = 'premium'; %c\n\n" +
        "Glad to see you here! If you like what you see, check out our GitHub or buy us a coffee. ☕",
        "background: #8b5cf6; color: #fff; padding: 5px 10px; border-radius: 5px; font-weight: bold; font-family: sans-serif;",
        "color: #8b5cf6; font-weight: bold; font-family: sans-serif;",
        "color: #4ade80; font-family: monospace; font-size: 14px;",
        "color: inherit; font-family: sans-serif;"
    );

})();
