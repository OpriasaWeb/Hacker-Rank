// Instructions: https://www.hackerrank.com/challenges/strange-advertising/problem

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
 * Complete the 'viralAdvertising' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER n as parameter.
 */
function viralAdvertising(n) {
    let recipients = 5 // Initially, recipients equals to 5
    let likes = 0 // likes is 0 for now
    
    for(let day = 1; day <= n; day++){
        // Per day, we get the floor of the recipients divided by 2
        let likedToday = Math.floor(recipients / 2);
        // Sum the liked today to likes variable per iteration
        likes += likedToday
        // update recipients to current liked today multiply to 3
        recipients = likedToday * 3
    }
    
    console.log(likes)
    return likes
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const result = viralAdvertising(n);

    ws.write(result + '\n');

    ws.end();
}
