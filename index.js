spherical_volume = function(radius){
	return (4/3)*Math.PI*Math.pow(radius, 3);
};

density = function(total_mass, volume){
	return volume === 0 ? undefined : total_mass / volume;
};

gas_pressure = function(density, temperature, mass){
	return mass === 0 ? undefined : 
	(density*boltzmanns_constant*temperature)/mass;
};

//temperature in kelvin
//mass in kg
density_by_gas_pressure_temperature_and_mass = function(gas_pressure, 
														temperature, 
														mass){
	return temperature === 0 ? undefined :
	(gas_pressure * mass)/(boltzmanns_constant * temperature);
};

//returns orbital period
keplers_third_law = function(average_distance){
	return Math.sqrt( Math.pow(average_distance, 3));
};

/*
    temperature conversions
*/
convert_fahrenheit_to_celcius = function(fahrenheit_value){
	return (fahrenheit_value - 32)*(5/9);
};

convert_celcius_to_fahrenheit = function(celcius_value){
	return celcius_value * 1.8 + 32;
};

convert_fahrenheit_to_kelvin = function(fahrenheit_value){
	return ((fahrenheit_value - 32)/1.8000)+273.15;
};

convert_celcius_to_kelvin = function(celcius_value){
	return celcius_value + 273.15;
};

/*
    constants
*/

const solar_mass = 1.9891e30; //kg
const earth_radius = 6.37e6; //m
const earth_mass = 5.97e24; //kg
const earth_volume = 1.0826969324300023e+21; // km^3
const earth_density = 5514.008418404722; //kg/m^3
const boltzmanns_constant = 1.381e-23; //J/K