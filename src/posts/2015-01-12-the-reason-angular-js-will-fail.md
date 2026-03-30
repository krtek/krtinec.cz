---
title: The reason Angular JS will fail. Revisited!
date: '2015-01-12'
lang: en
tags:
  - jquery
  - angularjs
---

Recently, I found in my RSS reader George Butiri's article named [The
reason Angular JS will
fail](http://okmaya.com/2014/03/12/the-reason-angular-js-will-fail/). Go
ahead and read it – it's quite interesting. Naturally, I do not agree with George's
conclusions, but that is not the reason why I wrote this blogpost.

What really struck me was the quality of provided code samples. I do not
want anyone to read the article and think: _„So this is supposed to be
the Angular way of doing things? No wonder this shit is doomed."_

The provided code shows that George is really proficient with vanilla
Javascript and jQuery but lacks (no offense) deeper understanding of
AngularJS and its principles.

That's why I decided to go on and fix the code to be more Angularish.

### DOM Manipulation

George tries to do a simple example of two boxes which should move when
clicked. Let's have a look at the original code:

```javascript
var myApp = angular.module('myApp', []);

myApp.directive('myWidget', function () {
	var linkFn;
	linkFn = function (scope, element, attrs) {
		var animateDown, animateRight, pageOne, pageTwo;
		pageOne = angular.element(element.children()[0]);
		pageTwo = angular.element(element.children()[1]);

		animateDown = function () {
			$(this).animate({ top: '+=50' });
		};

		animateRight = function () {
			$(this).animate({ left: '+=50' });
		};

		$(pageOne).on('click', animateDown);
		$(pageTwo).on('click', animateRight);
	};
	return {
		restrict: 'E',
		link: linkFn
	};
});
```

Notice something awkward? This is not AngularJS, this is just bunch of jQuery code wrapped in a _directive_ for no obvious reason.

There has to be a better way:

```javascript
var myApp = angular.module('myApp', []);

myApp.directive('box', function () {
	var linkFn;
	linkFn = function (scope, element, attrs) {
		scope.click = function () {
			var opts = {};
			if (attrs.move.indexOf('right') != -1) {
				opts.left = '+=50px';
			}
			if (attrs.move.indexOf('down') != -1) {
				opts.top = '+=50px';
			}
			$(element.children()[0]).animate(opts, 'slow');
		};
	};
	return {
		restrict: 'EA',
		link: linkFn,
		template: '<div class="box" ng-click="click()"></div>',
		scope: {}
	};
});
```

See? Why not unleash AngularJS _directives_ to their full potential? What is the main difference? **Readability.** Let's compare source HTML:

```html
<!-- George's version -->
<my-widget>
	<div id="one" class="box"></div>
	<div id="two" class="box"></div>
</my-widget>

<!-- Angular way -->
<box move="down"></box>
<box move="right"></box>
<box move="down right"></box>
```

In AngularJS case, HTML speaks for itself.

### Ajax

For a simple requirement of two links loading data from server, George concluded it's impossible in AngularJS. Ok, pal, here you go:

```javascript
var myApp = angular.module('myApp', []);

var MainCtrl = function ($http) {
	main = this;
	this.load = function (what) {
		if (what == 'ip') {
			$http.get('http://ip.jsontest.com/').then(function (result) {
				main.ip = result.data.ip;
			});
		}
		if (what == 'date') {
			$http.get('http://date.jsontest.com/').then(function (result) {
				main.date = result.data.date;
			});
		}
	};
};

myApp.controller('MainCtrl', MainCtrl);
```

### That's it

AngularJS might not be perfect, but it's really helpful in creating readable, maintainable and extendable Javascript applications.
