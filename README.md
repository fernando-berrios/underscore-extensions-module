Underscore Extensions Module
============================

Overview
--------

The goal of this project is to develop a comprehensive, well documented and unit tested set of JavaScript helper functions that can be safely mixed in to [Underscore.js](http://underscorejs.org/) and packaged into an AMD module. Unit testing is powered by the [Jasmine BDD](http://pivotal.github.com/jasmine/) framework and uses the [RequireJS](http://requirejs.org/) AMD module format.

At the very least I hope this project provides a solid template that can be forked, ripped apart and reconfigured to use in any way necessary.

### Dependencies

-   RequireJS 1.0.8
-   Underscore.js 1.3.3
-   [Underscore.string](http://epeli.github.com/underscore.string/) 2.0 (*not a strict dependency, right now just included for convenience*)

Documentation
-------------

Examples and documentation available [here](http://prototypef.github.com/underscore-extensions-module/docs/) or, alternatively you can generate the documentation HTML pages by running:

    NaturalDocs -i . -o HTML docs -p docs\.nd -xi docs -xi vendor -xi test -r

Code documentation is powered by [NaturalDocs](http://www.naturaldocs.org/)
