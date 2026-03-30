---
title: Creating Modular Menus in AngularJS
date: '2014-08-11'
lang: en
tags:
  - menu
  - dynamic
  - modular
  - angularjs
---

Recently, I had to design an AngularJS application that would be highly
modular. The idea was to let each module create its own menu items
and its own routes.

The menu on the left should be generated _on-the-fly_, based on the
requirements of individual modules.

It turned out it's quite easy to do so using AngularJS `provider`.

For the sake of this article, provider is just a service, which _is
configured at application startup_. And application startup is perfect
time to build the menu.

### Core module

First of all let us create a module called `app.core` containing the
`Menu` service provider which holds application menu items.

The `add()` method can be called only at bootstrap (`config` method) by
other modules to add its own menu items.

And finally, `MenuCtrl` is a controller which uses the menu service to
get an instance of menu and render it.

### Add modules

Let's define another module and add a menu item. Note that `app.settings` module depends on `app.core` and during
application bootstrap (`config()` method) it adds menu item and
respective routes.

### Render menu

Menu rendering depends on the frontend framework you are using.

### Putting it all together

Finally, we need to link all the individual modules into one root
application and add a Home menu item.

The only issue in the example is that Home menu always appears on the
last position because of module loading order. Fix it as your homework :)

Get the code above [as a gist](https://gist.github.com/krtek/d74d9157b7bc9b4a21b3) or [see it in action](http://plnkr.co/edit/6RkqZs0mBcZa3EcGC2op?p=preview).
