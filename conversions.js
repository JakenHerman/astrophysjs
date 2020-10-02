"use strict";
exports.__esModule = true;
exports.convert_celcius_to_kelvin = exports.convert_fahrenheit_to_kelvin = exports.convert_celcius_to_fahrenheit = exports.convert_fahrenheit_to_celcius = void 0;
/**
 * Converts a fahrenheit temperature value to celcius
 * @param  {number} fahrenheit_value Temperature value in fahrenheit
 * @returns number Temperature value in celcius
 */
exports.convert_fahrenheit_to_celcius = function (fahrenheit_value) {
    return (fahrenheit_value - 32) * (5 / 9);
};
/**
 * Converts a celcius temperature value to fahrenheit
 * @param  {number} celcius_value Temperature value in celcius
 * @returns number Temperature value in fahrenheit
 */
exports.convert_celcius_to_fahrenheit = function (celcius_value) {
    return celcius_value * 1.8 + 32;
};
/**
 * Converts a fahrenheit temperature value to kelvin
 * @param  {number} fahrenheit_value Temperature value in fahrenheit
 * @returns number Temperature value in kelvin
 */
exports.convert_fahrenheit_to_kelvin = function (fahrenheit_value) {
    return ((fahrenheit_value - 32) / 1.8000) + 273.15;
};
/**
 * Converts a celcius temperature value to kelvin
 * @param  {number} celcius_value Temperature value in celcius
 * @returns number Temperature value in kelvin
 */
exports.convert_celcius_to_kelvin = function (celcius_value) {
    return celcius_value + 273.15;
};
