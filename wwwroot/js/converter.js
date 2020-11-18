
/*
Salesforce ID converter pack.

Sample ID:
    Input: 9062I000000ITnk
    Expected Output: 9062I000000ITnkQAG
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


// Set alphanumeric list
let codeList = [];
let j = 65;
let k = 0;
const alphaStopIdx = 91;
while (j < 97) { 
    j < alphaStopIdx ? codeList.push(String.fromCharCode(j)) : codeList.push(`${j - alphaStopIdx}`);
    j++;
    k++;
}


var sfid15 = "9062I000000ITnk"; // 90630000000gtfAAAQ


function ConvertID(SfidObj) {
    let i = 0;
    const stepsize = 5;
    let letters = [];

    while (i < SfidObj.length) {
        let chunk = SfidObj.slice(i, i + stepsize);
        let idx = 0;
        let tot = 0;
        chunk.split("").forEach( el => {
            tot += el.isUpper ? Math.pow(2, idx) : 0;
            idx++;
        });
        letters.push(codeList[tot]);
        i += stepsize;
    }

    let newID = sfid15 + letters.join("");
    console.assert(newID.length === 18, `Error: NewId character count mismatch.`);
    return newID;
}

