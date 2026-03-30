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

Všichni víme, jak k UML diagramům přistupuje standardní projektový
manažer – v lepším případě přizná, že tomu vůbec nerozumí, v horším vše
schválí a v dalších fázích projektu není o překvapení nouze.

Oproti tomu v případě prototypu zákazník ihned vidí, jak celá aplikace
funguje a velmi rychle je odhalena většina nedomyšleností v zadání,
resp. velmi rychle se zjistí, co je jak drahé na vývoj. Z toho důvodu se
v rámci prototypování ještě výrazně mění zadání, což má hodně pozitivní
dopad na použitelnost výsledného produktu.
Ve Fragarii se tedy snažíme nechat si entitní UML model "pro sebe" a
zákazníkovi představujeme rovnou uživatelské rozhraní aplikace – **UI
prototyp**.

### Bootstrap > Balsamiq

Standardem pro vytváření prototypů je nástroj [Balsamiq
Mockups](http://balsamiq.com/products/mockups/), s jehož pomocí dokáže
navrhnout uživatelské rozhraní téměř kdokoliv.
Důležitou ~~výhodou~~ ~~nevýhodou~~ **vlastností** Balsamiq je, že
obrázky, které z něho lezou jsou schválně jednoduché a ošklivé
(wireframes). To má odvést zákazníka od nepodstatností jako jsou barvy
tlačítek, fonty a umožnit mu soustředit se na podstatu věci.
Pokud zákazník s wireframes již pracoval, tak to může fungovat. Pokud je
vidí poprvé, míra jeho zmatení je značná.

My jsme od wire-frames v Balsamiqu přešli rovnou k prototypování
frontendu v HTML a CSS. Proč?

#### Rychlost

"Nastřelit" jednoduchou stránku v
[Bootstrapu](http://getbootstrap.com/components/) umím skoro stejně
rychle, jako jí nakreslit v Balsamiqu. A to jsem mezi kolegy spíš z
pomalejších – nepoužívám totiž _vim_ :-).

#### Reálnost

Výsledný prototyp vypadá jako reálná webová aplikace, což je z pohledu
zákazníka jistě plus.

#### Interaktivita

Většina moderních webových aplikací používá ve velké míře Javascript a
naše nejsou výjimkou. Problém je, že real time vyhledávání v seznamu
faktur prostě na obrázku neukážeme. A dlouze o tom mluvit je takové –
plytké.
Takže zapojíme Javascript (jasně, [Angular.js](https://angularjs.org/))
a můžeme zákazníkovi rychle ukázat, jak se budou jednotlivé prvky na
stránce chovat.

#### Reálná data

Lorem ipsum a jeho česká verze [Blábot](http://cs.blabot.net/) je určitě
užitečná věc, ale opět – není nad reálná data.
Pokud se nasypou do Google Spreadsheet, dají se jednoduše načíst jako
JSON a zobrazit v prototypu.

#### Budoucí využitelnost

Jsou dvě možnosti, buď se prototyp zahodí s tím, že dobře posloužil jako
zadání/analýza, nebo se "obarví" a frontend aplikace je na světě.

### Takže?

_Nikdy neříkej nikdy_, ale u nás teď děláme prototypy jen interaktivní a
pouze v HTML.
