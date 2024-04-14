// Instructions: Write a program that reads a 5x5 array of integers and then prints the row sum and column sum

let mulFiveArrays = [
  [8, 3, 9, 0, 10],
  [3, 5, 17, 1, 1],
  [2, 8, 6, 23, 1],
  [15, 7, 3, 2, 9],
  [6, 14, 2, 6, 0]
]

let n = 5


// Rows sum
function rowsSum(n, arr){
  let rowsArr = []
  let rowSum = 0
  for(let i = 0; i < n; i++){

    for(let j = 0; j < n; j++){
      rowSum += arr[i][j]
    }
    rowsArr.push(rowSum)
    // Reset the rowSum variable to 0 
    rowSum = 0
  }
  console.log(rowsArr)
  return rowsArr
}

rowsSum(n, mulFiveArrays)

/*

[8, 3, 9, 0, 10],
[3, 5, 17, 1, 1],
[2, 8, 6, 23, 1],
[15, 7, 3, 2, 9],
[6, 14, 2, 6, 0]

*/

// Column sum
function columnSum(n, arr){
  let colArr = []
  let colSum = 0

  for(let j = 0; j < n; j++){
    for(let i = 0; i < n; i++){
      colSum += arr[i][j]
    }
    colArr.push(colSum)

    // Reset the colSum variable to 0
    colSum = 0
  }
  console.log(colArr)
  return colArr
}

columnSum(n, mulFiveArrays)