/**
 * Converts a fahrenheit temperature value to celcius
 * @param  {number} fahrenheit_value Temperature value in fahrenheit
 * @returns number Temperature value in celcius
 */
export const convert_fahrenheit_to_celcius = function (fahrenheit_value: number) : number {
	return (fahrenheit_value - 32) * (5 / 9);
};

/**
 * Converts a celcius temperature value to fahrenheit
 * @param  {number} celcius_value Temperature value in celcius
 * @returns number Temperature value in fahrenheit
 */
export const convert_celcius_to_fahrenheit = function (celcius_value: number) : number {
	return celcius_value * 1.8 + 32;
};

/**
 * Converts a fahrenheit temperature value to kelvin
 * @param  {number} fahrenheit_value Temperature value in fahrenheit
 * @returns number Temperature value in kelvin
 */
export const convert_fahrenheit_to_kelvin = function (fahrenheit_value: number) : number {
	return ((fahrenheit_value - 32) / 1.8000) + 273.15;
};

/**
 * Converts a celcius temperature value to kelvin
 * @param  {number} celcius_value Temperature value in celcius
 * @returns number Temperature value in kelvin
 */
export const convert_celcius_to_kelvin = function (celcius_value: number) : number {
	return celcius_value + 273.15;
};