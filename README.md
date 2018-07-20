# Underscore Extensions Module

## Overview

The goal of this project is to develop a comprehensive, well documented and unit tested set of JavaScript helper functions that can be safely mixed in to [Underscore.js](http://underscorejs.org/) and packaged into an AMD module. Unit testing is powered by the [Jasmine BDD](https://jasmine.github.io/) framework and uses the [RequireJS](http://requirejs.org/) AMD module format.

At the very least I hope this project serves as a solid template that can be forked, ripped apart and reconfigured to use in any way necessary.

### Dependencies

- RequireJS 1.0.8
- Underscore.js 1.3.3
- [Underscore.string](http://epeli.github.com/underscore.string/) 2.2.0rc (*not a strict dependency, right now just included for convenience*)

## Usage & Examples

Check out the _*.spec.js_ files under the _/test/specs/_ folder to see different use cases and examples. For more in-depth explanation of the module's methods [RTFM](http://en.wikipedia.org/wiki/RTFM) (see Documentation section below :P).

## Documentation


### isNullOrUndefined
<p>Check if the value passed is null or undefined.</p>

<p>Examples</p>

<pre><code>var result = _.isNullOrUndefined(null) // result == true
var result = _.isNullOrUndefined(undefined) // result == true
var result = _.isNullOrUndefined(void 0) // result == true
var result = _.isNullOrUndefined("") // result == false
</code></pre>



### isWhitespace
<p>Checks if a string contains only whitespace character(s).</p>

<p>Examples</p>

<pre><code>var result = _.isWhitespace("") // result == false
var result = _.isWhitespace("Hello World!") // result == false
var result = _.isWhitespace("  ") // result == true
</code></pre>



### isEmptyOrWhitespace
<p>Checks if an object or array is empty, or, if a string is empty or only contains whitespace characters.<br />Depends on isWhitespace.</p>

<p>Example</p>

<pre><code>var result = _.isEmptyOrWhitespace({}) // result == true
var result = _.isEmptyOrWhitespace([]) // result == true
var result = _.isEmptyOrWhitespace("") // result == true
var result = _.isEmptyOrWhitespace(" ") // result == true
</code></pre>



### hasEmptyOrWhitespaceValues
<p>Checks if any property/value of a non-empty object or array is empty or only contains whitespace characters.<br />Depends on isEmptyOrWhitespace</p>

<p>Examples</p>

<pre><code>var result = _.hasEmptyOrWhitespaceValues([1, "", 3]) // result == true
var result = _.hasEmptyOrWhitespaceValues({ one:1, two:2, three:"   " }) // result == true
</code></pre>



### toString
<p>Converts and/or ensures that regardless of the input, the output will always be a string.<br />Depends on isNullOrUndefined, isWhitespace and isEmptyOrWhitespace.</p>

<p>Examples</p>

<pre><code>var result = _.toString(null) // result == ""
var result = _.toString(undefined) // result == ""
var result = _.toString(undefined, "fallback!") // result == "fallback!"
var result = _.toString(123) // result == "123"
var result = _.toString("Hello World") // result == "Hello World"
</code></pre>



### objectToQuery
<p>Convert an object to a URL query string. "Borrowed" this function from Dojo Toolkit. See <a href='https://github.com/dojo/dojo/blob/9a4f36bab3c49ae405aa6d4e268e4729ca0c6e8e/io-query.js#L9'>https://github.com/dojo/dojo/blob/9a4f36bab3c49ae405aa6d4e268e4729ca0c6e8e/io-query.js#L9</a></p>

<p>Examples</p>

<pre><code>var result = _.objectToQuery({ a:1, b:2, c:3 }) // result == "a=1&amp;b=2&amp;c=3"
var result = _.objectToQuery(undefined) // result == ""
</code></pre>



### queryToObject
<p>Convert the query string of a URL to an object. "Borrowed" this function from Dojo Toolkit. See <a href='https://github.com/dojo/dojo/blob/9a4f36bab3c49ae405aa6d4e268e4729ca0c6e8e/io-query.js#L46'>https://github.com/dojo/dojo/blob/9a4f36bab3c49ae405aa6d4e268e4729ca0c6e8e/io-query.js#L46</a></p>

<p>Examples</p>

<pre><code>var result = _.queryToObject("a=1&amp;b=2&amp;c=3") // result ==  { a:1, b:2, c:3 }
var result = _.queryToObject("a=1&amp;b=2&amp;c=3&amp;a=4") // result ==  { a: ['1', '4'], b:'2', c:'3' }
var result = _.queryToObject(undefined) // result == {}
</code></pre>



### getPrototypeOf
<p>Function to safely get the prototype object of any object.</p>





## Change Log

__v1.0__

* Initial release

## License

Copyright (c) 2012 Fernando Berrios

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
