define(['underscore.module', 'underscore.string'], function (_, _string) {
    var module = {};
    var backstop = {};

    if (_ === void 0) {
        // https://github.com/documentcloud/underscore/blob/599d31101b7a7b896ff73e338d26ae698833f878/underscore.js
        throw "Missing Dependency: Underscore.js v1.3.3";
    }

    if (_string === void 0) {
        // https://github.com/epeli/underscore.string/blob/36c97e3accee57f3947ecb98732b12027705d3f0/lib/underscore.string.js
        throw "Missing Dependency: Underscore.string.js v2.2.0rc";
    }

    /**
     * Check if the value passed is null or undefined.
     *
     * Examples
     *
     *     var result = _.isNullOrUndefined(null) // result == true
     *     var result = _.isNullOrUndefined(undefined) // result == true
     *     var result = _.isNullOrUndefined(void 0) // result == true
     *     var result = _.isNullOrUndefined("") // result == false
     *
     * @param {Object} object Value to check.
     * @returns {Boolean} True if object is null or undefined.
     */
    function isNullOrUndefined(object) {
        return (_.isNull(object) || _.isUndefined(object));
    }

    /**
     * Checks if a string contains only whitespace character(s).
     *
     * Examples
     *
     *     var result = _.isWhitespace("") // result == false
     *     var result = _.isWhitespace("Hello World!") // result == false
     *     var result = _.isWhitespace("  ") // result == true
     *
     * @param {String} object Value to check. Should be a string.
     * @returns {Boolean} True if object is an whitespace string ("  ").
     */
    function isWhitespace(object) {
        var output = false;

        if (_.isString(object)) {
            output = (/^\s+$/).test(object);
        }

        return output;
    }

    /**
     * Checks if an object or array is empty, or, if a string is empty or only contains whitespace characters.
     * Depends on isWhitespace.
     *
     * Example
     *
     *     var result = _.isEmptyOrWhitespace({}) // result == true
     *     var result = _.isEmptyOrWhitespace([]) // result == true
     *     var result = _.isEmptyOrWhitespace("") // result == true
     *     var result = _.isEmptyOrWhitespace(" ") // result == true
     *
     * @param {Object} object Value to check.
     * @returns {Boolean} True if object is either an empty/zero length string/object ("" or {}) or whitespace string ("  ") or a null or undefined object.
     */
    function isEmptyOrWhitespace(object) {
        var output = _.isEmpty(object) && !_.isNumber(object);

        if (!output) {
            if (_.isString(object)) {
                output = isWhitespace(object);
            }
        }

        return output;
    }

    /**
     * Checks if any property/value of a non-empty object or array is empty or only contains whitespace characters.
     * Depends on isEmptyOrWhitespace
     *
     * Examples
     *
     *     var result = _.hasEmptyOrWhitespaceValues([1, "", 3]) // result == true
     *     var result = _.hasEmptyOrWhitespaceValues({ one:1, two:2, three:"   " }) // result == true
     *
     * @param {Object|Array} object Value to check. Should be an Object or an Array, otherwise it falls back to isEmptyOrWhitespace function.
     * @returns {Boolean} True if any property of the object or array is either an empty/zero length string/object ("" or {}), a whitespace string ("  "), a null or an undefined object.
     */
    function hasEmptyOrWhitespaceValues(object) {
        var output = false;

        if ((_.isArray(object) || _.isObject(object)) && !isEmptyOrWhitespace(object)) {
            // TODO: Add option or default to be recursive?
            var values = !_.isArray(object) ? _.values(object) : object;
            var matchedValues = _.find(values, function (x) {
                return isEmptyOrWhitespace(x);
            });

            if (!_.isNullOrUndefined(matchedValues)) {
                output = true;
            }
        } else {
            output = isEmptyOrWhitespace(object);
        }

        return output;
    }

    /**
     * Converts and/or ensures that regardless of the input, the output will always be a string.
     * Depends on isNullOrUndefined, isWhitespace and isEmptyOrWhitespace.
     *
     * Examples
     *
     *     var result = _.toString(null) // result == ""
     *     var result = _.toString(undefined) // result == ""
     *     var result = _.toString(undefined, "fallback!") // result == "fallback!"
     *     var result = _.toString(123) // result == "123"
     *     var result = _.toString("Hello World") // result == "Hello World"
     *
     * @param {Object} object Value to check.
     * @param {String} [replaceString] String to replace if object is not a string.
     * @returns {String} If object is a valid string then the function returns it, otherwise it returns the replaceString or defaults to returning a empty/zero length string ("").
     */
    function toString(object, replaceString) {
        var output = (!isNullOrUndefined(replaceString) && _.isString(replaceString)) ? replaceString : "";

        if (!isNullOrUndefined(object) && !isEmptyOrWhitespace(object)) {
            if (_.isString(object)) {
                if (isWhitespace(object)) {
                    output = object;
                }
            } else if (_.isNumber(object)) {
                output = object.toString();
            }
        }

        return output;
    }

    /**
     * Convert an object to a URL query string. "Borrowed" this function from Dojo Toolkit. See https://github.com/dojo/dojo/blob/9a4f36bab3c49ae405aa6d4e268e4729ca0c6e8e/io-query.js#L9
     *
     * Examples
     *
     *     var result = _.objectToQuery({ a:1, b:2, c:3 }) // result == "a=1&b=2&c=3"
     *     var result = _.objectToQuery(undefined) // result == ""
     *
     * @param {Object} map Name/value mapping object.
     * @returns {String} A string representing a URL-encoded version of the map object.
     */
    function objectToQuery(map) {
        var enc = encodeURIComponent, pairs = [];

        for (var name in map) {
            var value = map[name];
            if (value != backstop[name]) {
                var assign = enc(name) + "=";
                if (_.isArray(value)) {
                    for (var i = 0, l = value.length; i < l; ++i) {
                        pairs.push(assign + enc(value[i]));
                    }
                } else {
                    pairs.push(assign + enc(value));
                }
            }
        }

        return pairs.join("&"); // String
    }

    /**
     * Convert the query string of a URL to an object. "Borrowed" this function from Dojo Toolkit. See https://github.com/dojo/dojo/blob/9a4f36bab3c49ae405aa6d4e268e4729ca0c6e8e/io-query.js#L46
     *
     * Examples
     *
     *     var result = _.queryToObject("a=1&b=2&c=3") // result ==  { a:1, b:2, c:3 }
     *     var result = _.queryToObject("a=1&b=2&c=3&a=4") // result ==  { a: ['1', '4'], b:'2', c:'3' }
     *     var result = _.queryToObject(undefined) // result == {}
     *
     * @param {String} str The query string, usually what is returned by window.location.search.
     * @returns {Object} An object representing a de-serialized query section of a URL. Query keys with multiple values are returned in an array.
     */
    function queryToObject(str) {
        var ret = {};

        if (!isNullOrUndefined(str)) {
            var dec = decodeURIComponent, qp = str.split("&"), name, val;
            for (var i = 0, l = qp.length, item; i < l; ++i) {
                item = qp[i];
                if (item.length) {
                    var s = item.indexOf("=");
                    if (s < 0) {
                        name = dec(item);
                        val = "";
                    } else {
                        name = dec(item.slice(0, s));
                        val = dec(item.slice(s + 1));
                    }
                    if (_.isString(ret[name])) {
                        ret[name] = [ret[name]];
                    }

                    if (_.isArray(ret[name])) {
                        ret[name].push(val);
                    } else {
                        ret[name] = val;
                    }
                }
            }
        }

        return ret; // Object
    }

    /**
     * Function to safely get the prototype object of any object.
     *
     * @param {Object} object Object to get the prototype object from.
     * @returns {Object} The object's prototype object.
     */
    function getPrototypeOf(object) {
        var output;

        if (typeof Object.getPrototypeOf !== "function") {
            if (typeof object.__proto__ === "object") {
                output = object.__proto__;
            } else {
                // May break if the constructor has been tampered with
                output = object.constructor.prototype;
            }
        } else {
            output = Object.getPrototypeOf(object);
        }

        return output;
    }

    /*!
     * Make the module methods "publicly" available.
     *
     */
    module.isNullOrUndefined = isNullOrUndefined;
    module.isWhitespace = isWhitespace;
    module.isEmptyOrWhitespace = isEmptyOrWhitespace;
    module.hasEmptyOrWhitespaceValues = hasEmptyOrWhitespaceValues;
    module.ensureString = toString;
    module.objectToQuery = objectToQuery;
    module.queryToObject = queryToObject;
    module.getPrototypeOf = getPrototypeOf;

    // Finally, we use the mixin function of Underscore.js to add the methods to it.
    _.each(_.functions(module), function (element) {
        var func = {};
        func[element] = module[element];
        _.mixin(func);
    });

    // And also, mixin the Underscore.string functions :)
    _.mixin(_string.exports());

    return module;
});