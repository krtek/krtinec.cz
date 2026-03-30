---
title: Náš technologický stack - server
date: '2014-01-02'
lang: cs
tags:
  - appengine
  - pip
  - python
---

### Server

Bez diskuse [Google AppEngine](https://developers.google.com/appengine/)
v Python verzi. Ne, že by to byla zase taková pecka, ale většinou je to
požadavek zákazníka.
Ovšem pecka je náš [GAP](https://github.com/czervenka/gap) a
[GAPI](https://github.com/czervenka/gapi).

#### GAP

GAP je naše odpověď na to, že AppEngine neví, co to je
[virtualenv](https://pypi.python.org/pypi/virtualenv). Jak funguje? Takhle:

    workon <myvirtualenv>
    pip install gap
    gap start-project <applicationid>
    cd <applicationid>
    vi requirements.gip
    bin/gip install -r requirements.gip

Každý, kdo někdy dělal s virtualenv v Pythonu se zorientuje relativně
rychle - jen místo `pip install` napíše `bin/gip install` a GAP se
postará o stažení knihoven a jejich nalinkování do adresáře se
zdrojákama.

#### GAPI

Další náš příspěvek světu je GAPI – mimochodem na originálních názvech
GAP/GAPI je vidět, že jsme především programátoři. GAPI umí navíc:

- cachovat autorizační tokeny
- dávkové requesty
- opakovat requesty v případě chyby
- **stránkovat** odpovědi
- a běží v pohodě na AppEngine

Ke GAPu patří i další rozšíření jako
[GAP-Resources](https://github.com/fragaria/gap-resources),
[GAP-Angular](https://github.com/fragaria/gap-angular) a
[GAP-DatastoreAdmin](https://github.com/fragaria/gap-datastoreadmin).
