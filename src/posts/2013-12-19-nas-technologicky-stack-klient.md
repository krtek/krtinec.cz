---
title: Náš technologický stack - klient
date: '2013-12-19'
lang: cs
tags:
  - bootstrap
  - coffeescript
  - angularjs
  - jasmine
  - grunt
  - bower
---

Množí se nám dotazy (teda... byly dva), jaké technologie používáme na
jednotlivých vrstvách aplikací, které tvoříme.
Ani se nedivím. Než jsme si jednotlivé technologie sladili dohromady,
tak to chvíli trvalo, ale výsledek stojí za to. Posuďte sami:

### Klient

V prohlížeči nedáme dopustit na
[Bootstrap](http://getbootstrap.com/). Konečně i my
prográmatoři dokážeme "nastřelit" rozhraní, které vypadá k světu a dá
se s ním pracovat.
Kde nestačí vzhled čistého Bootstrapu, koukáme primárně po šablonách z
[WrapBootstrap](https://wrapbootstrap.com/). Většinou jde o hodně
designu za málo peněz.
No a kde to trochu drhne, tam pomůže Tibor a doladí CSSka. Tedy – neladí
CSSka, ale [LESSka](http://lesscss.org/). To je snad jasné, ne?

#### Angular.js

Naší velkou láskou je [Angular.js](http://angularjs.org/). Nejdřív jsme
s ním udělali mobilní aplikaci pro Investiční web a teď v něm píšem i všechny desktopové aplikace.

V kostce jde o MVC framework napsaný kompletně v Javascriptu.
Takhle na první pohled to nevypadá jako pecka, ale je! Server je vlastně degradován jen na posílání dat ve formátu JSON a o jejich zobrazování se komplet stará frontend.

#### Coffeescript

Na Angularu nám vadila vlastně jen jediná věc: Javascript.
[Coffescript](http://coffeescript.org/) je něco jako Groovy pro Javu.
Konečně můžu napsat:

```coffeescript
for x in [1, 2, 3]:
    console.log("Number: #{x}")
```

a nemusím počítat indexy pole jak trotl.

#### Testování

Angular má docela hezky propracovanou podporu pro unit testy, integrační
testy a různé další testy.
My testy píšeme v [Jasmine](http://pivotal.github.io/jasmine/) a
spouštíme [Karmou](http://karma-runner.github.io/0.10/index.html).

#### Build aplikace

Ptáte se, jak tohle všechno skládáme dohromady? Lidi okolo Javascriptu
se v tomhle směru poučili ve světě Javy a vznikl
[Grunt](http://gruntjs.com/) a [Bower](http://bower.io/).
Bower slouží pro správu závislosti a Grunt
pro sestavení finální aplikace.

S Bowerem se neztratíte v použitých knihovnách:

```json
"dependencies": {
    "angular": "v1.2.0-rc.2",
    "bootstrap": "v3.0.0",
    "jquery": "~2.0.3",
    "jquery-ui": "~1.10.3"
}
```

No a Grunt pěkně zkompiluje Coffeescripty do Javascriptů, prožene je
testy, zmenší je, z LESS souborů udělá CSS soubory a vůbec připraví
aplikaci na nasazení.

Tak takhle my to děláme :)
