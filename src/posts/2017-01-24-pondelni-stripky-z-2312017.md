---
title: Pondělní střípky z 23.1.2017
date: '2017-01-24'
lang: cs
tags:
  - stripky
  - etckeeper
  - kalhoty
  - report-uri
  - rest
---

Kalhoty jsou na cestě. Ve Fragarii byl opravdový architekt! Hrajeme si
s RxJS v Angularu 2.0. A další.

### Architekt ve Fragarii

Ve Fragarii jsme měli na návštěvě opravdového architekta. Pan Honza je architekt, který dostal za úkol zařídit, abysme se do našeho kanclíku vešli i se stále rostoucím počtem kolegů.

Pan architekt se s problémem popasoval dokonale a dokonce každému z
nás navrhl na stůl malou zahrádku.

### Observables, RxJS a AngularJS 2.0

Poté si vzal slovo Filip a začal nám vysvětlovat, jak na
[Prezident 21](https://www.prezident21.cz/candidates) používají
[RxJS](http://reactivex.io/rxjs/) a
[Observables](https://en.wikipedia.org/wiki/Observer_pattern).

Jestli to myslíte s vývojem frontendových aplikací vážně a
[Promises](https://docs.angularjs.org/api/ng/service/$q) z Angularu 1.x
už máte v malíku, koukejte si Observables nastudovat. Za rok se bez toho neobejdete.

Dobrý úvod do Observables [je tady](http://blog.angular-university.io/functional-reactive-programming-for-angular-2-developers-rxjs-and-observables/).

### etckeeper

[etckeeper](https://etckeeper.branchable.com/) je nástroj na automatické verzování adresáře `/etc` do Gitu. Instalační skripty totiž soubory v `/etc` často upravují. Hodí se mít přehled o tom, co se při instalaci změnilo.

### report-uri

[Content-Security-Policy](https://scotthelme.co.uk/content-security-policy-an-introduction/) (CSP) je ta věc, kvůli které vám prohlížeč odmítne zavolat REST API, protože máte blbě nastavené CSP hlavičky na serveru.

Co se ale tolik neví je, že prohlížeč můžete nastavit, aby v případě, že _zařízne_ HTTP request, [poslal zprávu](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/report-uri) na předem definovanou adresu.

Proto je tu projekt [report-uri.io](https://report-uri.io/) - stačí se zaregistrovat a můžete si prohlížet, které zdroje prohlížeč zakazuje ve vašem projektu. A to nejlepší? Je zadarmo!
