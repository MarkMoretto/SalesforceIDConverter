// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.


/** 
 * @author Mark Moretto
 * @returns {boolean} true if single character is uppercase; false otherwise.
 * @description String property to evaluate whether a single character is uppercase.
 * @example <caption>Determine whether 'A' is uppercase.</caption>
 * // returns true
 * "A".isUpper
*/

Object.defineProperty(String.prototype, "isUpper", {
    get() {
        return this.length === 1 ? (this.toString() === this.toString().toUpperCase() && isNaN(this.toString() * 1)) ? true : false : "Property requires single character.";
    }
});

