define(['underscore'], function () {
    var module = window._;

    if (module === void 0) {
        throw "Missing Dependency: Underscore.js v1.3.1";
    }

    module = module.noConflict(); // Optional, but recommended :)

    return module;
});