define(['underscore.module', 'underscore.extensions'], function (_, _ext) {
    describe("Underscore with mixed-in extensions module", function () {

        var commonFalsyTests = function (specFunction) {
            it("expect an empty/zero length string to be false", function () {
                var test = "";
                expect(specFunction(test)).toBeFalsy();
            });

            it("expect an non-empty string to be false", function () {
                var test = "lorem ipsum";
                expect(specFunction(test)).toBeFalsy();
            });

            it("expect a number to be false", function () {
                var test = 1;
                expect(specFunction(test)).toBeFalsy();
            });

            it("expect an array to be false", function () {
                var test = [1, 2, 3];
                expect(specFunction(test)).toBeFalsy();
            });

            it("expect an empty array to be false", function () {
                var test = [];
                expect(specFunction(test)).toBeFalsy();
            });

            it("expect an object to be false", function () {
                var test = { one:1, two:2, three:3 };
                expect(specFunction(test)).toBeFalsy();
            });

            it("expect an empty object to be false", function () {
                var test = {};
                expect(specFunction(test)).toBeFalsy();
            });
        };

        /* isNullOrUndefined */
        describe("isNullOrUndefined", function () {
            var specFunction = _.isNullOrUndefined;

            it("expect a null variable to be true", function () {
                var test = null;
                expect(specFunction(test)).toBeTruthy();
            });

            it("expect an undefined variable to be true", function () {
                var test;
                expect(specFunction(test)).toBeTruthy();
            });

            commonFalsyTests(specFunction);
        });

        /* isWhitespace */
        describe("isWhitespace", function () {
            var specFunction = _.isWhitespace;

            it("expect a whitespace string to be true", function () {
                var test = "   ";
                expect(specFunction(test)).toBeTruthy();
            });

            it("expect a new line character to be true", function () {
                var test = "\n";
                expect(specFunction(test)).toBeTruthy();
            });

            it("expect a carriage return character to be true", function () {
                var test = "\r";
                expect(specFunction(test)).toBeTruthy();
            });

            it("expect a tab character to be true", function () {
                var test = "\t";
                expect(specFunction(test)).toBeTruthy();
            });

            it("expect a form feed character to be true", function () {
                var test = "\f";
                expect(specFunction(test)).toBeTruthy();
            });

            it("expect a null variable to be false", function () {
                var test = null;
                expect(specFunction(test)).toBeFalsy();
            });

            it("expect an undefined variable to be false", function () {
                var test;
                expect(specFunction(test)).toBeFalsy();
            });

            it("expect a sentence with whitespace  to be false", function () {
                var test = "lorem ipsum dolor \n lorem ipsum";
                expect(specFunction(test)).toBeFalsy();
            });

            commonFalsyTests(specFunction);
        });

        /* isEmptyOrWhitespace */
        describe("isEmptyOrWhitespace", function () {
            var specFunction = _.isEmptyOrWhitespace;

            it("expect a null variable to be true", function () {
                var test = null;
                expect(specFunction(test)).toBeTruthy();
            });

            it("expect an undefined variable to be true", function () {
                var test;
                expect(specFunction(test)).toBeTruthy();
            });

            it("expect an empty/zero length string to be true", function () {
                var test = "";
                expect(specFunction(test)).toBeTruthy();
            });

            it("expect a whitespace string to be true", function () {
                var test = " ";
                expect(specFunction(test)).toBeTruthy();
            });

            it("expect an empty array to be true", function () {
                var test = [];
                expect(specFunction(test)).toBeTruthy();
            });

            it("expect an empty object to be true", function () {
                var test = {};
                expect(specFunction(test)).toBeTruthy();
            });

            it("expect an non-empty string to be false", function () {
                var test = "lorem ipsum";
                expect(specFunction(test)).toBeFalsy();
            });

            it("expect a number to be false", function () {
                var test = 1;
                expect(specFunction(test)).toBeFalsy();
            });

            it("expect an array to be false", function () {
                var test = [1, 2, 3];
                expect(specFunction(test)).toBeFalsy();
            });

            it("expect an object to be false", function () {
                var test = { one:1, two:2, three:3 };
                expect(specFunction(test)).toBeFalsy();
            });
        });

        /* hasEmptyOrWhitespaceValues */
        describe("hasEmptyOrWhitespaceValues", function () {
            var specFunction = _.hasEmptyOrWhitespaceValues;

            it("expect a null variable to be true", function () {
                var test = null;
                expect(specFunction(test)).toBeTruthy();
            });

            it("expect an undefined variable to be true", function () {
                var test;
                expect(specFunction(test)).toBeTruthy();
            });

            it("expect an empty/zero length string to be true", function () {
                var test = "";
                expect(specFunction(test)).toBeTruthy();
            });

            it("expect a whitespace string to be true", function () {
                var test = " ";
                expect(specFunction(test)).toBeTruthy();
            });

            it("expect an empty array to be true", function () {
                var test = [];
                expect(specFunction(test)).toBeTruthy();
            });

            it("expect an empty object to be true", function () {
                var test = {};
                expect(specFunction(test)).toBeTruthy();
            });

            it("expect an array with an empty/zero length string to be true", function () {
                var test = [1, '', 3];
                expect(specFunction(test)).toBeTruthy();
            });

            it("expect an array with a whitespace string to be true", function () {
                var test = [1, '  ', 3];
                expect(specFunction(test)).toBeTruthy();
            });

            it("expect an array containing an empty array to be true", function () {
                var test = [
                    [],
                    2,
                    3
                ];
                expect(specFunction(test)).toBeTruthy();
            });

            it("expect an array containing an empty object to be true", function () {
                var test = [
                    {},
                    2,
                    3
                ];
                expect(specFunction(test)).toBeTruthy();
            });

            it("expect an object with an empty/zero length string to be true", function () {
                var test = { one:1, two:2, three:'' };
                expect(specFunction(test)).toBeTruthy();
            });

            it("expect an object with a whitespace string to be true", function () {
                var test = { one:1, two:2, three:'   ' };
                expect(specFunction(test)).toBeTruthy();
            });

            it("expect an object containing an empty array to be true", function () {
                var test = { one:1, two:2, three:[] };
                expect(specFunction(test)).toBeTruthy();
            });

            it("expect an object containing an empty object to be true", function () {
                var test = { one:1, two:2, three:{} };
                expect(specFunction(test)).toBeTruthy();
            });

            it("expect an object to be false", function () {
                var test = { one:1, two:2, three:3 };
                expect(specFunction(test)).toBeFalsy();
            });

            it("expect an non-empty string to be false", function () {
                var test = "lorem ipsum";
                expect(specFunction(test)).toBeFalsy();
            });

            it("expect a number to be false", function () {
                var test = 1;
                expect(specFunction(test)).toBeFalsy();
            });

            it("expect an array to be false", function () {
                var test = [1, 2, 3];
                expect(specFunction(test)).toBeFalsy();
            });

            it("expect an object to be false", function () {
                var test = { one:1, two:2, three:3 };
                expect(specFunction(test)).toBeFalsy();
            });
        });

        /* toString */
        describe("toString", function () {
            var specFunction = _.toString;

            it("expect a null variable to be an empty string", function () {
                var test = null;
                expect(specFunction(test)).toEqual("");
            });

            it("expect a null variable to equal the replacement string", function () {
                var test = null;
                var replacement = "replaced!";
                expect(specFunction(test, replacement)).toEqual(replacement);
            });

            it("expect a undefined variable to be an empty string", function () {
                var test = null;
                expect(specFunction(test)).toEqual("");
            });

            it("expect a undefined variable to equal the replacement string", function () {
                var test;
                var replacement = "replaced!";
                expect(specFunction(test, replacement)).toEqual(replacement);
            });

            it("expect an empty object to be an empty string", function () {
                var test = {};
                expect(specFunction(test)).toEqual("");
            });

            it("expect an empty object to equal the replacement string", function () {
                var test = {};
                var replacement = "replaced!";
                expect(specFunction(test, replacement)).toEqual(replacement);
            });

            it("expect an empty array to be an empty string", function () {
                var test = [];
                expect(specFunction(test)).toEqual("");
            });

            it("expect an empty array to equal the replacement string", function () {
                var test = [];
                var replacement = "replaced!";
                expect(specFunction(test, replacement)).toEqual(replacement);
            });

            it("expect a number to equal a numeric string", function () {
                var test = 123;
                expect(specFunction(test)).toEqual("123");
            });
        });

        /* objectToQuery */
        describe("objectToQuery", function () {
            var specFunction = _.objectToQuery;

            it("expect a null variable to be an empty string", function () {
                var test = null;
                var expected = "";
                expect(specFunction(test)).toEqual(expected);
            });

            it("expect an undefined variable to be an empty string", function () {
                var test;
                var expected = "";
                expect(specFunction(test)).toEqual(expected);
            });

            it("expect an object with special characters to be a valid query string", function () {
                var test = { test:" #$%&@`/:;<=>?[\\]^{|}~\"'+," };
                var expected = "test=%20%23%24%25%26%40%60%2F%3A%3B%3C%3D%3E%3F%5B%5C%5D%5E%7B%7C%7D~%22'%2B%2C";
                expect(specFunction(test)).toEqual(expected);
            });

            it("expect an object to be a valid query string", function () {
                var test = { a:1, b:2, c:3 };
                var expected = "a=1&b=2&c=3";
                expect(specFunction(test)).toEqual(expected);
            });
        });

        /* queryToObject */
        describe("queryToObject", function () {
            var specFunction = _.queryToObject;

            it("expect a null variable to be an empty object", function () {
                var test = "";
                var expected = {};
                expect(specFunction(test)).toEqual(expected);
            });

            it("expect an undefined variable to be an empty object", function () {
                var test;
                var expected = {};
                expect(specFunction(test)).toEqual(expected);
            });

            it("expect an query string with special characters to be an object", function () {
                var test = "test=%20%23%24%25%26%40%60%2F%3A%3B%3C%3D%3E%3F%5B%5C%5D%5E%7B%7C%7D~%22'%2B%2C";
                var expected = { test:" #$%&@`/:;<=>?[\\]^{|}~\"'+," };
                expect(specFunction(test)).toEqual(expected);
            });

            it("expect a valid query string to be an object", function () {
                var test = "a=1&b=2&c=3";
                var expected = { a:'1', b:'2', c:'3' };
                expect(specFunction(test)).toEqual(expected);
            });

            it("expect a valid query string with repeated keys to return them in an array grouped under 1 key of the object", function () {
                var test = "a=1&b=2&c=3&a=4";
                var expected = { a: ['1', '4'], b:'2', c:'3' };
                expect(specFunction(test)).toEqual(expected);
            });
        });
    });
});
