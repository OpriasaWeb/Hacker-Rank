// Hacker Rank - Prepare - Algorithms - Implementation > Electronic Shops
/*
Instructions:
A person wants to determine the most expensive computer keyboard and USB drive that can be purchased with a give budget. Given price lists for keyboards and USB drives and a budget, find the cost to buy them. If it is not possible to buy both items, return -1.

b = 60
keyboards = [40, 50, 60]
drives = [5, 8, 12]

The person can buy a 40 keyboard + 12 USB drive = 52, or a 50 keyboard + 8 USB drive = 58. Choose the latter as the more expensive option and return 58.

Functional description:
Complete the getMoneySpent function in the editor below.

getMoneySpent has the following parameter(s):

int keyboards[n]: the keyboard prices
int drives[m]: the drive prices
int b: the budget

Returns:
int: the maximum that can be spent, or -1 if it is not possible to buy both items

*/



'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(str => str.trim());

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the getMoneySpent function below.
 */
function getMoneySpent(keyboards, drives, b) {
    /*
     * Write your code here.
     */
    
    // Have object to store all the possible combined prices
    let allBudget = []
    
    // Loop through keyboard first and per iteration, I set inner loop to add the keyboard current value to drives current value
    for(let i = 0; i < keyboards.length; i++){
        for(let j = 0; j < drives.length; j++){
            let sumCurrent = keyboards[i] + drives[j]
            // Check if the result of each iteration is not exceed or equal to budget - b
            if(sumCurrent <= b){
                // Then add it in the object
                allBudget.push(sumCurrent)
            }
        }
    }
    
    // If object is empty, then return -1
    if(allBudget.length == 0){
        return -1
    }

    
    // For in loop to object and get the higest amount
    let currentBudget = allBudget[0]
    for(let k = 1; k < allBudget.length; k++){
        // Store it in a variable
        if(currentBudget < allBudget[k]){
            currentBudget = allBudget[k]
        }
    }
    
    // return the highest amount
    return currentBudget;
    
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const bnm = readLine().split(' ');

    const b = parseInt(bnm[0], 10);

    const n = parseInt(bnm[1], 10);

    const m = parseInt(bnm[2], 10);

    const keyboards = readLine().split(' ').map(keyboardsTemp => parseInt(keyboardsTemp, 10));

    const drives = readLine().split(' ').map(drivesTemp => parseInt(drivesTemp, 10));

    /*
     * The maximum amount of money she can spend on a keyboard and USB drive, or -1 if she can't purchase both items
     */

    let moneySpent = getMoneySpent(keyboards, drives, b);

    ws.write(moneySpent + "\n");

    ws.end();
}
