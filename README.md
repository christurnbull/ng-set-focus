# ng-set-focus

Angular directive to set an element focus via the controller

DEMO: https://embed.plnkr.co/HBGq2Z3ERqukk7TGLlGt/

## Installation

Install via bower:

```bower install ng-set-focus```

Add script to your index.html (if not using Grunt/wiredep/etc)

```<script src='bower_components/ng-set-focus/ngSetFocus.js'></script>```

Add module to your application module dependencies

```angular.module('ngApp', ['ngSetFocus'])...```

## Usage

Scope variables are observed for changes. To set focus on an element toggle the assigned scope variable.

```
<input ng-set-focus="textInput" set-focus-default />
<button ng-click="$broadcast('textInput')"> Set Focus </button>
```

## Dependencies


## Support

Please [open an issue](https://github.com/christurnbull/ng-set-focus/issues/new) for support.

## Contributing

Please contribute using [Github Flow](https://guides.github.com/introduction/flow/). Create a branch, add commits, and [open a pull request](https://github.com/christurnbull/ng-set-focus/compare/).

## License

The code is available under the [MIT license](LICENSE.txt).
