export const solar_mass: number = 1.9891e30;


/**
 * Returns the value for sidereal year.
 * @param  {string} unit Unit of measurement (days/seconds). 
 * For days, use 'd', 'day', or 'days'.
 * For seconds, use 's', 'seconds', or 'second'
 * The default unit is days.
 * @returns number the value for sidereal year
 */
export const sidereal_year = function (unit: string): number  {
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
}