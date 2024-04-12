// Instructions: https://www.hackerrank.com/challenges/find-digits/

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'findDigits' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER n as parameter.
 */

function findDigits(n) {
    // Write your code here
    let stringDigit = n.toString()
    let splitDigit = stringDigit.split("")
    
    let trackResult = 0
    
    for(let i = 0; i < splitDigit.length; i++){
        let digit = parseInt(splitDigit[i])
        if(digit !== 0 && n % digit === 0){
            trackResult += 1
        }
    }
    
    return trackResult
    // console.log(trackResult)

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine().trim(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const n = parseInt(readLine().trim(), 10);

        const result = findDigits(n);

        ws.write(result + '\n');
    }

    ws.end();
}
