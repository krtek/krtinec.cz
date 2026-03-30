---
title: Angular.js daterangepicker
date: '2014-03-13'
lang: cs
tags:
  - open source
  - javascript
  - bootstrap
  - angularjs
---

Filip a Tibor při posledním projektu narazili na to, že pro Angular
neexistuje žádný pořádný **daterange picker** – tedy komponenta, která
umožní vybrat rozsah dvou datumů. Protože jsou to kluci šikovní, tak se hned pustili do nápravy tohoto
smutného stavu :)

### Použití

Komponenta se používá dost jednoduše:

```html
<div ng-controller="TestCtrl">
	<input date-range-picker class="form-control date-picker" type="text" ng-model="date" />
</div>
```

Samozřejmě je možné nastavit minimum, maximum.

### Instalace

Pokud si chcete náš **daterange picker** vyzkoušet, tak mrkněte na
[dokumentaci](https://github.com/fragaria/angular-daterangepicker) nebo
si ho rovnou přidejte do projektu:

    bower install angular-daterangepicker --save
