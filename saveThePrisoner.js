// Instructions: https://www.hackerrank.com/challenges/save-the-prisoner/problem

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
 * Complete the 'saveThePrisoner' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER m
 *  3. INTEGER s
 */

function saveThePrisoner(n, m, s) {
    // Write your code here
    
    // n = prisoners - 4
    // m = piece of candies - 6
    // s = start of distribution on chairs - 2
    
    
    // NOTE: Place another variable that start from s and increment per iteration
    let trackPrisoners = s
    
    // Loop from 0 up to m
    for(let i = 1; i <= m; i++){
        
        // Now, if trackPrisoners greater than to n, then start it to 1, continues..
        if(trackPrisoners > n){
            trackPrisoners = 1
        }
        
        // If the current iteration is not yet equals to m or candies that will be distributed, continue to add 1 on trackprisoner
        if(i != m){
            trackPrisoners += 1
        }
        
    }
    console.log(trackPrisoners)
    // If loop is done, then whatever the last number of trackPrisoners, should return
    return trackPrisoners

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine().trim(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

        const n = parseInt(firstMultipleInput[0], 10);

        const m = parseInt(firstMultipleInput[1], 10);

        const s = parseInt(firstMultipleInput[2], 10);

        const result = saveThePrisoner(n, m, s);

        ws.write(result + '\n');
    }

    ws.end();
}
