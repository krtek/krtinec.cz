---
title: Jak sobě Liftago s jistotou přivolati?
date: '2016-02-17'
lang: cs
tags:
  - elasticsearch
  - liftago
  - elastic
  - kibana
---

_Jest třeba státi v čase půlnočním, za úplňku, na rynku Staroměstském,
ne dále než dva kroky od poledníku pražského. V levici jest třeba
černého kohouta držeti, v pravici pak aparát Bellův, anténou směrem k
smrtce na orloji natočený._

Když jsem se dozvěděl, že [Liftago uvolňuje
data](http://try.liftago.com/info-wants-to-be-free/) o uskutečněných i
neuskutečněných jízdách, zaradoval jsem se. Rád totiž láduji do
Elasticsearch cokoliv zajímavého s cílem zjistit něco zásadního.

## Jak to vidí jinde?

Samozřejmě, že data z Liftaga zkoušelo analyzovat více lidí. Hezky to
udělal [Marek
Lutonský](https://paper.dropbox.com/doc/Jak-se-jezd-s-Liftago-v-grafech-a-mapch-1cmweog4ARFMLmuZ3bSVG)
– určitě si jeho článek přečtěte, nemá smysl tu znovu kreslit stejné
grafy.
Zajímavé výsledky mají i [chlapci z
Infinaria](https://cloud.infinario.com/shared/dashboard/8dcebc55-0503-4345-bb47-051afa92140e/#/).

## Proč Elasticsearch?

Velkou výhodou Elasticsearch je, že umí analyzovat data v realtime.
Takže kdybych já pracoval v Liftagu, udělal bych si v Kibaně jednoduchý
dashboard, který by mi sledoval základní parametry (čas dojezdu,
průměrný počet nabídek atd.) a případně by mě mohl varovat, jakmile
některý z parametrů bude signalizovat problém.

No ale, protože v Liftagu nepracuji, musím se spokojit s analýzou dat
ex-post.

## Základy

Ochota taxikářů vás svézt, prudce a logicky roste se vzdáleností, na
kterou jedete. Hezky je to vidět z grafu, který srovnává průměrný počet
nabídek, se vzdáleností na kterou chcete jet.

Zub na začátku ukazuje, že pokud jedete na vzdálenost kratší než 3 km,
je výhodnější cíl vůbec nezadávat. Pokud jedete dále než 5 km, určitě
cílovou adresu zadejte – šoféři se o vás poperou!

Další graf ukazuje, jak daleko je taxikář ochotný pro vás dojet – a to
zvlášť v denních a zvlášť v nočních hodinách.

Potvrzuje se tedy že, čím dále se pojede, tím větší je ochota drožkáře
pro zakázku "dojet". Zvlášť ve dne.

## Co když nezadám cíl?

Elasticsearch disponuje celkem zajímavou funkcí, která [vyhledává
anomálie mezi
daty](https://www.elastic.co/guide/en/elasticsearch/reference/current/search-aggregations-bucket-significantterms-aggregation.html).
Zkusil jsem jí použít na zakázky, kde zákazník nezadá cíl.

Je vidět, že pokud nezadáte cíl ve všední den, máte celkem slušnou
šanci, že domů přeci jen pojedete – abnormálně často se vyskytuje stav
F. Naopak o víkendu se poveze jen ten, kdo cíl prozradí (NO znamená No
Offer).

Rozdělil jsem zakázky na ty bez zadaného cíle, s cílem do 3 km a s cílem
delším než 3 km. Výsledkem je graf s průměrným počtem nabídek v závislosti
na denní době.

Mezi 20:00 a 24:00 má člověk, který nezadá cíl, poloviční šanci,
že sežene taxíka.

## V kolik se vydat domů?

Domů se vyplatí vyrazit do 23.00 – pak průměrný počet nabídek prudce
klesá. Takže doporučuji respektovat zavíračku většiny pražských
restaurací.

Po půlnoci nastává největší špička, kterou taxikáři nezvládají.

Počet uskutečněných jízd je zhruba stejný před půlnocí i po půlnoci, ale
počet odmítnutých zákazníků je po půlnoci několikanásobný.

S tím koresponduje i vzdálenost, na kterou je taxík ochotný přijet –
přes den si pro vás šofér přijede průměrně z o kilometr větší vzdálenosti
než v noci.

## Kde se v Praze paří?

Znalci nočního života v Praze se nedozví nic nového, ale srovnal jsem
místa, odkud se volají taxíky ve dne a v noci. Ve dne hezky svítí
office centra – hlavně Anděl, Křižíkova v Karlíně, I.P. Pavlova a Hlavní
nádraží.

A v noci? Nejvýraznější bod na mapě je bermudský trojúhelník v Dlouhé –
zlatá mládež se vrací z Kozičky, Jamese Deana, případně z Bombaye.
Zajímavé je, že Václavské náměstí je oproti Dlouhé poloviční. Napadá mě
jedině, že turisti Liftago neznají a používají konkurenci.

## Napadá vás něco dalšího?

Liftago neuvolnilo všechna data – zejména ceny. Nedá se tedy například
porovnat cenu za kilometr ve dne a v noci, závislost pravděpodobnosti
odmítnutí nabídky na ceně apod.

Pokud by vás napadlo něco, co by bylo zajímavé srovnat, dejte prosím
vědět! Už nyní připravuji další díl.

PS: Liftagu moc díky za data a za odvahu.
