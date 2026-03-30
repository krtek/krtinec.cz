---
title: Píšeme desktopové aplikace v HTML
date: '2014-02-07'
lang: cs
tags:
  - chrome desktop apps
  - bootstrap
  - angularjs
  - desktop
  - chrome
---

Nedávno jsem do mailu dostal článek o tom, že Chrome
Desktop Apps už [fungují i na
mobilu](http://blog.chromium.org/2014/01/run-chrome-apps-on-mobile-using-apache.html).
Na článku mě upřímně nejvíc zaujalo to, že vůbec nějaké Chrome Desktop
Apps existují. No a samozřejmě jsem to potřeboval vyzkoušet.

### Co jsou Chrome Web Apps?

Chrome Web Apps jsou webové aplikace, které se ale tváří jako "normální"
Windows/Mac/Linux aplikace. To znamená, že ve Windows je najdete přímo
ve Start menu, můžete si dát zástupce na plochu atd.

### Jak to šlo?

[Zdrojový kód](https://github.com/krtek/Tea-clock) původní aplikace je
relativně jednoduchý – v zásadě jde o jednu HTML stránku a kus
Javascript kódu v AngularJS.

V obou případech jsem použil [Twitter
Bootstrap](http://getbootstrap.com/), nemusel jsem tedy nic vymýšlet a
jen přepsal těch pár `div`ů.

Změnit se musely dvě věci: Ukládání nastavení, protože desktopová
aplikace nemůže použít `localStorage`, ale musí používat
`chrome.storage.*`. Zase ale se nastavení automaticky sdílí mezi všemi počítači konkrétního
uživatele.

### Hurá do světa

Paradoxně nejvíc času a bádání mi zabralo vydání aplikace do Chrome Web
Store. Pro příští generace (a pro mě za půl roku) tu raději sepíšu svůj
vlastní návod:

1. Aplikace se "zabalí" pomocí "Pack extension" přímo v prohlížeči Chrome.
2. Celý adresář s aplikací se zabalí do `zip` souboru. Soubor **manifest.json** musí být v kořeni `zip`u.
3. Tento zip soubor se nahraje na Chrome Web Store a vydá.
4. Zabalená aplikace z prvního kroku se nikam nenahrává!

Vydanou aplikaci [můžete samozřejmě
nainstalovat](https://chrome.google.com/webstore/detail/tea-clock-for-desktop/jhflnmgjaehakhchnneijfcnpkigcakn?authuser=1&hl=en)
z Chrome Web Store.
