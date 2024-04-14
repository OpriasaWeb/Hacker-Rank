// Instructions: https://www.hackerrank.com/challenges/divisible-sum-pairs/problem

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
 * Complete the 'divisibleSumPairs' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER k
 *  3. INTEGER_ARRAY ar
 */

function divisibleSumPairs(n, k, ar) {
    // Write your code here
    
    // Variable for result
    let result = 0
    // Set outer loop
    for(let i = 0; i < n; i++){
        // Set inner loop
        for(let j = i + 1; j < n; j++){
            // reset variable per iteration inside the inner loop
            let sum = ar[i] + ar[j]
            // In each iteration of outer loop
            // compare the current OL index to IN index
            if(sum % k === 0){
                result += 1
            }
        }
    }
    console.log(result)
    
    return result

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(firstMultipleInput[0], 10);

    const k = parseInt(firstMultipleInput[1], 10);

    const ar = readLine().replace(/\s+$/g, '').split(' ').map(arTemp => parseInt(arTemp, 10));

    const result = divisibleSumPairs(n, k, ar);

    ws.write(result + '\n');

    ws.end();
}
