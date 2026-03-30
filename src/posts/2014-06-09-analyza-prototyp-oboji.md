---
title: Analýza? Prototyp? Obojí!
date: '2014-06-09'
lang: cs
tags:
  - prototyp
  - mockup
  - angularjs
---

### Prototyp > analýza

Je známo, že prototyp/mock up uživatelského rozhraní, pokud je tvořen
správně, dokáže zcela nahradit značnou část úvodní analýzy. Zejména v
případech, kdy je zákazník technikou nepolíben, nemá podle mého valný
smysl předvádět znalosti UML modelování a zahrnovat ho desítkami
diagramů a mnoha stránkami popisu. Ukázaná platí!

### Bootstrap > Balsamiq

Standardem pro vytváření prototypů je nástroj [Balsamiq
Mockups](http://balsamiq.com/products/mockups/). My jsme od wire-frames v Balsamiqu přešli rovnou k prototypování
frontendu v HTML a CSS. Proč?

#### Rychlost

"Nastřelit" jednoduchou stránku v
[Bootstrapu](http://getbootstrap.com/components/) umím skoro stejně
rychle, jako jí nakreslit v Balsamiqu.

#### Reálnost

Výsledný prototyp vypadá jako reálná webová aplikace, což je z pohledu
zákazníka jistě plus.

#### Interaktivita

Většina moderních webových aplikací používá ve velké míře Javascript a
naše nejsou výjimkou. Real time vyhledávání v seznamu
faktur prostě na obrázku neukážeme.
Takže zapojíme Javascript ([Angular.js](https://angularjs.org/))
a můžeme zákazníkovi rychle ukázat, jak se budou jednotlivé prvky na
stránce chovat.

#### Reálná data

[Blábot](http://cs.blabot.net/) je určitě
užitečná věc, ale není nad reálná data.
Pokud se nasypou do Google Spreadsheet, dají se jednoduše načíst jako
JSON a zobrazit v prototypu.

#### Budoucí využitelnost

Jsou dvě možnosti, buď se prototyp zahodí s tím, že dobře posloužil jako
zadání/analýza, nebo se "obarví" a frontend aplikace je na světě.

### Takže?

_Nikdy neříkej nikdy_, ale u nás teď děláme prototypy jen interaktivní a
pouze v HTML.
