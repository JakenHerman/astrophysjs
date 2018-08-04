var assert = require('assert');
var astrophysjs = require('../index.js');

describe('Astronomy Functions', function() {
    describe('average_density()', function(){
        it('should return earths density', function(){
            assert.equal(density(5.97e24, 1.0826969324300023e+21),
                                                5514.008418404722);
        });
        it('should return undefined if volume = 0', function(){
            assert.equal(density(500, 0), undefined);
        });
    });
    describe('spherical_volume()', function(){
        it('should return spherical volume of earth', function(){
            assert.equal(spherical_volume(6.37e6), 1.0826969324300023e+21);
        });
    });
    describe('convert_fahrenheit_to_celcius()', function(){
        it('should return celcius value for given fahrenheit', function(){
            assert.equal(convert_fahrenheit_to_celcius(50), 10);
        });
    });
    describe('convert_celcius_to_fahrenheit()', function(){
        it('should return fahrenheit value for given celcius', function(){
            assert.equal(convert_celcius_to_fahrenheit(30), 86);
        });
    });
    describe('convert_celcius_to_kelvin()', function(){
        it('should return kelvin value for given celcius', function(){
            assert.equal(convert_celcius_to_kelvin(1), 274.15);
        });
    });
    describe('convert_fahrenheit_to_kelvin()', function(){
        it('should return fahrenheit value for given celcius', function(){
            assert.equal(convert_fahrenheit_to_kelvin(1), 255.92777777777775);
        });
    });
    describe('density_by_gas_pressure_temperature_and_mass()', function(){
        it('should return density of diatomic nitrogen', function(){
            assert.equal(density_by_gas_pressure_temperature_and_mass(
                1.01e105,
                288,
                4.65e-26
            ), 1.1808321264783974e100);
        });
    });
});