# BaseDiff Website & UX Roadmap

Tento dokument obsahuje návrhy na vylepšení webu a uživatelské zkušenosti (UX) aplikace BaseDiff, které vyplynuly z diskuse dne 8. 4. 2026.

## 1. Obsah a důvěryhodnost (Trust Signals)
- [ ] **Video demo / GIF**: Krátká ukázka (30s) aplikace v akci přímo v hlavičce webu.
- [ ] **Reference a loga**: Sekce s logy firem nebo citacemi uživatelů, kteří software používají.
- [ ] **Srovnávací tabulka**: Přehledné porovnání BaseDiff vs. konkurence (Redgate, ApexSQL, atd.), zdůrazňující rychlost a cenu.

## 2. Podpora a dokumentace
- [ ] **Znalostní báze / Wiki**: Samostatná stránka s návody (např. připojení přes SSH/VPN, automatizace skriptů).
- [ ] **Interaktivní FAQ**: Sekce nejčastějších dotazů na hlavní stránce pro lepší SEO a úsporu času podpory.
- [ ] **Propracovanější DB stránky**: Specifické screenshoty a popisy funkcí pro SQL Server a PostgreSQL na jejich podstránkách.

## 3. Zapojení uživatelů (Engagement)
- [ ] **Notifikace o aktualizacích**: Jednoduché přihlášení k e-mailu „Upozorněte mě na novou verzi“.
- [ ] **Komunitní prvky**: Odkazy na GitHub Discussions nebo Discord pro zpětnou vazbu.
- [ ] **Vyhledávání v Changelogu**: Možnost filtrovat a vyhledávat v historii změn s rostoucím počtem verzí.

## 4. Design a technická vylepšení
- [x] **Glassmorphism**: Modernizace vzhledu navigace a karet pomocí efektu `backdrop-filter`.
- [ ] **Lazy Loading**: Kontrola a optimalizace načítání všech obrázků pro maximální rychlost.
- [ ] **Pravidelná kontrola sitemap**: Po každé aktualizaci verze zajistit validaci sitemaps v Google Search Console.

## 5. Bezpečnost (Dlouhodobě)
- [ ] **Izolace hostingu**: Zvážit oddělení BaseDiff od ostatních (WordPress) projektů na úrovni systémových uživatelů.
- [ ] **Hardenning API**: Pravidelný audit PHP skriptů v `/api` a aktualizace knihovny PHPMailer.

---
*Poslední aktualizace: 8. dubna 2026*
