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

Každý rok na podzim se jezdíme s chlapci na dovolenou. Důležitou tradicí je [odletová stránka](https://cartagena.cz/),
která ukazuje počet dní a hodin do odletu.

Loni mě napadlo, že by
bylo fajn na pozadí stránky střídat fotky z minulých dovolených, které
máme vystavené na [Flickeru](https://www.flickr.com/photos/79052148@N04/albums).

### Jak na to?

Nejdřív je třeba vyřešit byrokracii. K volání Flickeru přes REST je
potřeba API klíč, takže je nutné o něj
[požádat](https://www.flickr.com/services/apps/create/).

Nejdřív je třeba připravit si styl:

```css
.container-fluid.main {
	background-color: silver;
	background-repeat: no-repeat;
	background-attachment: scroll;
	background-position: center;
	background-size: cover;
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
				if (!nextPhoto) {
					nextPhoto = _.sample(photos);
					$http.get(_createUrl(nextPhoto));
				}
				$($element).css('background-image', "url('" + _createUrl(nextPhoto) + "')");
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
```

A použití? Jednoduše se k elementu přidá direktiva `flickr-background`:

```html
<div class="container-fluid main" flickr-background>
	<div ng-view=""></div>
</div>
```

### Vychytávky

- Služba `Flickr` může dostat víc ID alb a stáhne metadata všech fotek ze všech alb.
- Metoda `next()` rovnou načte další fotku v pořadí do cache prohlížeče, takže výměna pozadí je okamžitá.
- Direktiva poslouchá na událost `next` - po vystřelení této události se fotka na pozadí okamžitě změní.
- Styl je napsaný tak, že všechno funguje i na mobilu.

A celé dohromady to vypadá [asi takhle](https://cartagena.cz/)!

### Co příště?

Tohle byl asi poslední návod na našem blogu pro AngularJS 1.x. Teď už totiž [frčí dvojka](https://angular.io/docs/ts/latest/quickstart.html)!
