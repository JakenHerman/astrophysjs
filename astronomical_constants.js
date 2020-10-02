"use strict";
exports.__esModule = true;
exports.sidereal_year = exports.solar_mass = void 0;
exports.solar_mass = 1.9891e30;
/**
 * Returns the value for sidereal year.
 * @param  {string} unit Unit of measurement (days/seconds).
 * For days, use 'd', 'day', or 'days'.
 * For seconds, use 's', 'seconds', or 'second'
 * The default unit is days.
 * @returns number the value for sidereal year
 */
exports.sidereal_year = function (unit) {
    switch (unit) {
        case 's':
        case 'seconds':
        case 'second':
            return 3.15581450e7;
        case 'd':
        case 'day':
        case 'days':
        default:
            return 365.256308;
    }
};
