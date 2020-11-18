// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

/*
Salesforce ID sample:
    Input: 9062I000000ITnk
    Expected Output: 9062I000000ITnkQAG

    var sfid15 = "9062I000000ITnk";
*/

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

/**
 * Datetime footer
*/
// const footerDateEl = document.querySelector("#footer-datetime");
// const dt = new Date();
// const startYr = 2019;

// function setFooterDateTime() {
//     let msg = dt.getFullYear() === startYr ? `&copy; ${startYr}` : `&copy; ${startYr} - ${dt.getFullYear()}`;
//     footerDateEl.innerHTML = msg;
// }

// window.addEventListener("DOMContentLoaded", (e) => {
//     setFooterDateTime();
// })
