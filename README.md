# Underscore Extensions Module

## Overview

The goal of this project is to develop a comprehensive, well documented and unit tested set of JavaScript helper functions that can be safely mixed in to [Underscore.js](http://underscorejs.org/) and packaged into an AMD module. Unit testing is powered by the [Jasmine BDD](http://pivotal.github.com/jasmine/) framework and uses the [RequireJS](http://requirejs.org/) AMD module format.

At the very least I hope this project serves as a solid template that can be forked, ripped apart and reconfigured to use in any way necessary.

### Dependencies

- RequireJS 1.0.8
- Underscore.js 1.3.3
- [Underscore.string](http://epeli.github.com/underscore.string/) 2.2.0rc (*not a strict dependency, right now just included for convenience*)

## Usage & Examples

Check out the _*.spec.js_ files under the _/test/specs/_ folder to see different use cases and examples. For more in-depth explanation of the module's methods [RTFM](http://en.wikipedia.org/wiki/RTFM) (see Documentation section below :P).

## Documentation

 Documentation is available [here](http://prototypef.github.com/underscore-extensions-module/docs/) or, alternatively you can generate the documentation HTML pages by running:

    NaturalDocs -i . -o HTML docs -p docs\.nd -xi docs -xi vendor -xi test -r

Code documentation is powered by [NaturalDocs](http://www.naturaldocs.org/)

## License

Copyright (c) 2012 Fernando Berrios

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.