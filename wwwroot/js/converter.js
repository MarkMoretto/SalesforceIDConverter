
/*
Salesforce ID converter pack.


Salesforce ID samples:
1. 
    Input: 9062I000000ITnk
    Expected Output: 9062I000000ITnkQAG

2. 
    Input: 90630000000gtfA
    Expected: 90630000000gtfAAAQ

*/


// Sample Salesforce ID
const sfid15 = "9062I000000ITnk"; // 90630000000gtfAAAQ



// Set alphanumeric list
let codeList = [];

function setCodeList() {
    let j = 65;
    let k = 0;
    const alphaStopIdx = 91;
    while (j < 97) { 
        j < alphaStopIdx ? codeList.push(String.fromCharCode(j)) : codeList.push(`${j - alphaStopIdx}`);
        j++;
        k++;
    }
}

/**
 * Convert 15-character ID to 18-character ID.
 * @param {String} SfidObj - Salesforce ID.
*/
function IdConverter(SfidObj) {
    const stepsize = 5;
    if (SfidObj.length === 15) {
        let i = 0;

        let letters = "";

        while (i < SfidObj.length) {
            // Chunk into three sections of five characters
            let chunk = SfidObj.slice(i, i + stepsize);

            // Set index and cumulative total variables to zero.
            let idx = 0;
            let tot = 0;

            // Split substring and determine if each character is uppercase.
            // If so, raise 2 to the power of the index value (range -> 0 to 4).
            chunk.split("").forEach( el => {
                tot += el.isUpper ? Math.pow(2, idx) : 0;
                idx++;
            });
            // Append character result to worker variable.
            letters += codeList[tot];

            // Increment starting index by step size value.
            i += stepsize;
        }

        // Append new character set to Salesforce ID object.
        SfidObj += letters;

        // Assert that we now have 18 characters for our ID.
        console.assert(SfidObj.length === 18, `Error: NewId character count mismatch.`);
        
    }
    return SfidObj;
}


/**
 * Set code list when DOM content completes loading.
*/
window.addEventListener("DOMContentLoaded", () => {
    setCodeList();
});