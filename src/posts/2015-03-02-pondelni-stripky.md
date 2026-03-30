---
title: Pondělní střípky z 2.3.2015
date: '2015-03-02'
lang: cs
tags:
  - stripky
  - azure
  - python
  - mailgun
  - microsoft
  - epydoc
---

Každé pondělí máme ve Fragarii projektovou schůzku, kde si vyměňujeme
informace o stavu jednotlivých projektů. A proč vám to říkám?
Protože v rámci těchto pondělních schůzek si také
děláme **demo**. Demo je krátký čas na začátku schůzky, kdy každý může
ukázat zajímavou věc/službu kterou našel, použil nebo třeba i vyrobil.

### Mailgun

Tento týden začal Filip službou [Mailgun](http://www.mailgun.com/).
Standardem v posílání hromadných mailů je
[Mailchimp](http://mailchimp.com/), který používáme pro většinu
projektů. Mailgun má ale velmi hezké API, takže posílání hromadných
mailů je hračka:

```shell
curl -s --user 'api:key-3ax6xnjp29jd6fds4gc373sgvjxteol0' \
    https://api.mailgun.net/v2/samples.mailgun.org/messages \
    -F from='Čtenář blogu <excited@samples.mailgun.org>' \
    -F to='info@fragaria.cz' \
    -F subject='Ahoj' \
    -F text='Ahoj klucka z Fragarie!'
```

### Hosting90

Virtuální servery jsou něco, co řešíme pořád dokolečka. Naším favoritem
byl zatím [Digital Ocean](https://www.digitalocean.com/), ale Martin
dneska přinesl tuzemský [Hosting90](https://www.hosting90.cz/).
Virtuální server s dvoujádrovým CPU a 2GB paměti stojí 200Kč měsíčně.

### Microsoft Azure

[Microsoft Azure](http://azure.microsoft.com/en-us/) toho umí hodně. Od obyčejných
**linuxových** virtuálních serverů přes službu Notification Hub
pro posílání notifikací mobilním zařízením až po strojové
učení.

### Epydoc

[Epydoc](http://epydoc.sourceforge.net/) je nástroj pro dokumentaci
Pythoního kódu. Například Pycharm ho podporuje a
hlavně podle něj umí napovídat. Takže když svůj Pythoní kód budete
důsledně dokumentovat Epydocem, ušetříte si dost práce při psaní.

PS: Víte, jak se řekne slovensky krajta? No přece Pytón!
