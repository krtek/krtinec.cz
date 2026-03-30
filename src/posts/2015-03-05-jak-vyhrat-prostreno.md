---
title: Jak vyhrát Prostřeno?
date: '2015-03-05'
lang: cs
tags:
  - npm
  - elasticsearch
  - nodejs
  - prostreno
---

Jak uspět v populární soutěži? Analýza dat s použitím Elasticsearch
ukazuje, že uspějete s českou klasikou: **domácí hovězí vývar s nudlemi,
kuře s bramborem a koláč**. Ale taky se hodí někoho **milovat**,
jmenovat se **Lucie** a hrát **hokej**.
Jak jsem na to přišel?

Moje drahá polovička je velká fanynka pořadu Prostřeno. Pro neznalé – [Prostřeno](http://www.iprima.cz/prostreno/o-poradu) je
pořad televize Prima, ve kterém pětice amatérských kuchařů předvede, jak si představuje perfektní večeři.

Při nedobrovolném sledování mě napadlo, jestli existuje něco jako
**ideální menu** – tedy zda _lze sestavit večeři s velkou
pravděpodobností výhry?_

### Příprava

Pro sběr dat jsem si připravil jednoduchý skript v NodeJS, který načte data ze stránek Primy a uloží je ve formátu JSON do databáze Elasticsearch:

```json
{
	"predkrm": "Kuřecí salát v broskvi",
	"hlavni": "Candát s mandlovou nádivkou a šťouchané brambory",
	"zakusek": "Líná hospodyňka",
	"id": "jiri-mueller",
	"winner": true,
	"gender": "M",
	"desc": "Je ženatý, má čtyři děti ..."
}
```

### Agregujeme data

Elasticsearch poskytuje mocné API pro [agregace
dat](http://www.elasticsearch.org/guide/en/elasticsearch/reference/current/search-aggregations.html).
Pojďme si pro začátek zjistit nejčastější vítězné polévky:

```json
{
	"query": { "match": { "winner": true } },
	"aggregations": {
		"polevka": {
			"terms": { "field": "polevka", "size": 10 }
		}
	}
}
```

Nejčastějším slovem mezi vítěznými polévkami je překvapivě **polévka**.
Ale hned na dalších místech je **vývar**, **nudle** a **hovězí**.

### Má vůbec smysl se hlásit?

Typická výherkyně se popisuje jako **ráda**, **vaření**,
**vztah** a **rodina**. A jmenuje se **Lucie** – 7 z 9 Lucií vyhrálo.
Oproti tomu typická nevýherkyně **žije**, **sama** a zmiňuje **peníze**. Pokud se navíc zmíní, že je **rozvedená**, tak už ani
nemusí zapínat sporák (36 z 38 nevyhrálo).

### Takže jaké menu?

Nejčastější vítězné menu vypadá nějak takhle:

- **Kuřecí salát**
- **Hovězí vývar**
- **Kuře s bramborem**
- **Koláč**

Navíc se hodí být **muž**, jmenovat se **Lucie** a mít v oblibě **hokej**.

A taky trochu umět vařit.
