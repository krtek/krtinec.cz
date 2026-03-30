---
title: Na dovolenou s Angularem
date: '2017-01-26'
lang: cs
tags:
  - slivovice
  - angularjs
  - flickr
---

Jak udělat stránky s dynamickým pozadím, kde bude pokaždé nová fotka
stažená z Flickeru? V Angularu překvapivě jednoduše.

### Proč?

Každý rok na podzim se jezdíme s chlapci na dovolenou. Protože už
jezdíme víc než 10 let, logicky vzniklo několik tradic, které se
snažíme více či méně dodržovat.
Mezi tradice patří každoroční expediční trička, lahev slivovice v
batohu, deníček vždy po ruce, beta karoten, kdyby nás překvapilo slunce
a tak dále.
Důležitou tradicí je také [odletová stránka](https://cartagena.cz/),
která ukazuje počet dní a hodin do odletu.

Odletovou stránku mám na starosti já a každý rok se snažím, aby na ní
bylo kromě prostého odpočtu i něco zajímavého. Loni mě napadlo, že by
bylo fajn na pozadí stránky střídat fotky z minulých dovolených, které
máme vystavené na
[Flickeru](https://www.flickr.com/photos/79052148@N04/albums). Po chvíli
laborování s Flicker API a Angularem jsem zjistil, že to je docela
jednoduché.

### Jak na to?

Nejdřív je třeba vyřešit byrokracii. K volání Flickeru přes REST je
potřeba API klíč, takže je nutné o něj
[požádat](https://www.flickr.com/services/apps/create/).
Potom je potřeba zjistit ID alb, které se mají zobrazovat. To je snadné,
protože ID alba je to poslední číslo v [URL
alba](https://www.flickr.com/photos/79052148@N04/albums/72157674403312466).
Takže v mém případě, kdy album má adresu
`https://www.flickr.com/photos/79052148@N04/albums/72157674403312466` je
IDčko `72157674403312466`.

### Pozor na autorská práva

Já na _svojí_ stránce ukazuju _svoje_ fotky, takže jsem v pohodě. Pokud
ale budete chtít použít cizí fotky, zkontrolujte si licenci - ve vetšině
případů musíte alespoň označit autora fotky!

### Jde se kódovat

Nejdřív je třeba připravit si styl pro element, u kterého se bude měnit
pozadí pomocí `background-url`. Asi nějak takhle:

```css
.container-fluid.main {
	background-color: silver;
	background-repeat: no-repeat;
	background-attachment: scroll;
	background-position: center;
	background-size: cover;
	background-position: center center;
	height: 100vh;
	opacity: 0.9;
}
```

No a potom už jen do projektu přidat službu a direktivu, která se
postará o vlastní volání Flickeru:

```javascript
'use strict';

var API_KEY = '__API_KEY__';
var PHOTOSET_IDS = ['__ID1__', '__ID2__', '__ID3__'];

angular.module('cartagenaApp').directive('flickrBackground', function (Flickr, $http) {
	var _flickrBackground = function ($scope, $element) {
		var nextPhoto;

		var _createUrl = function (photo) {
			return (
				'https://farm' +
				photo.farm +
				'.staticflickr.com/' +
				photo.server +
				'/' +
				photo.id +
				'_' +
				photo.secret +
				'_b.jpg'
			);
		};

		var _next = function () {
			Flickr.getPhotos().then(function (photos) {
				//There is no nextPhoto preloaded (first call?)
				if (!nextPhoto) {
					nextPhoto = _.sample(photos);
					$http.get(_createUrl(nextPhoto));
				}
				$($element).css('background-image', "url('" + _createUrl(nextPhoto) + "')");

				//Preload next photo
				nextPhoto = _.sample(photos);
				$http.get(_createUrl(nextPhoto));
			});
		};

		_next();

		$scope.$on('next', _next);
	};
	return {
		restrict: 'A',
		link: _flickrBackground
	};
});

angular.module('cartagenaApp').service('Flickr', function ($q, $http) {
	var cache;

	var _getPhotos = function (photoset) {
		return $http.get(
			'https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&' +
				'api_key=' +
				API_KEY +
				'&photoset_id=' +
				photoset +
				'&format=json&nojsoncallback=1'
		);
	};

	this.getPhotos = function () {
		return $q(function (resolve) {
			if (cache) {
				resolve(cache);
			} else {
				var promises = [];
				//load photos for all photoset ids into one array
				PHOTOSET_IDS.forEach(function (id) {
					promises.push(_getPhotos(id));
				});
				$q.all(promises).then(function (results) {
					cache = [];
					results.forEach(function (result) {
						cache = cache.concat(result.data.photoset.photo);
					});
					resolve(cache);
				});
			}
		});
	};
});
```

A použití? Jednoduše se k elementu u kterého je třeba měnit pozadí dá
direktiva `flickr-background`:

```html
<div class="container-fluid main" flickr-background>
	<div ng-view=""></div>
</div>
```

### Vychytávky

Kód je dost jednoduchý, ale všimněte si pár vychytávek:

- Služba `Flickr` může dostat víc ID alb a stáhne metadata všech fotek
  ze všech alb a spojí je do jednoho pole.
- Metoda `next()` ve `flickrDirective` rovnou načte další fotku v
  pořadí pomocí http requestu. Tohle _zbytečné volání_ uloží další
  fotku do cache prohlížeče, takže výměna pozadí za další obrázek je
  okamžitá.
- Directiva poslouchá na událost `next` - po vystřelení této události
  se fotka na pozadí okamžitě změní.
- Styl je napsaný tak, že všechno funguje i na mobilu.

A celé dohromady to vypadá [asi takhle](https://cartagena.cz/)!

### Co příště?

Tohle byl asi poslední návod na našem blogu pro AngularJS 1.x. Teď už totiž [frčí dvojka](https://angular.io/docs/ts/latest/quickstart.html)!
