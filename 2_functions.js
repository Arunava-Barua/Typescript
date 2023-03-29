"use strict";
exports.__esModule = true;
var add = function (num) {
    return num + " hello ";
};
var square = function (num) {
    return num * num;
};
var result = square(1234);
console.log(result);
var throwError = function (msg) {
    throw new Error(msg);
};
