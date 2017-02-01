const EventEmitter = require('events').EventEmitter;
const util = require('util');
const processResult = function (calculator, result, callback) {
    calculator.emit('result', result);
    if (typeof callback !== 'undefined') {
        setTimeout(function () { callback(result); }, 1000, this);
    } else {
        return result;
    }
};

// The calculator supports 3 ways to show us the result of the calculation. 
// Synchronously via a return value, 
// and asynchronously via a callback or an event. 

function Calculator() {
    EventEmitter.call(this);
}
util.inherits(Calculator, EventEmitter);
Calculator.prototype.add = function (a, b, callback) {
    let result = a + b;
    return processResult(this, result, callback);
};
Calculator.prototype.substract = function (a, b, callback) {
    let result = a - b;
    return processResult(this, result, callback);
};
Calculator.prototype.multiply = function (a, b, callback) {
    let result = a * b;
    return processResult(this, result, callback);
};
Calculator.prototype.divide = function (a, b, callback) {
    let result = a / b;
    return processResult(this, result, callback);
};
module.exports = Calculator;