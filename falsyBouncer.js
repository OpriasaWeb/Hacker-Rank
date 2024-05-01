// Instructions: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/falsy-bouncer
/*
Remove all falsy values from an array. Return a new array; do not mutate the original array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

Hint: Try converting each value to a Boolean.
*/

function bouncer(arr) {
  let truthyArr = [];

  let falsyObj = {
    "false": false,
    "null": null, 
    "zero": 0,
    "empty": "",
    "undefined": undefined,
    "nan": NaN
  };

  for (let i = 0; i < arr.length; i++) {
    let isFalsy = false; // Flag variable to track if the value is falsy
    
    // Loop through the falsy object to check if the current value is falsy
    for (let key in falsyObj) {
      if(arr[i] === falsyObj[key]){
        isFalsy = true;
        break; // Once a falsy value is found, no need to check further
      }
    }

    // If the value is not falsy, add it to the truthy array
    if (!isFalsy) {
      // Check if the value is not equals to number, push it directly to truthyArr
      if(typeof(arr[i]) != "number"){
        truthyArr.push(arr[i]);
      }
      else{
        // If it is number, check if not equals to Not a Number, if so then push to truthyArr
        if(!isNaN(arr[i])){
          truthyArr.push(arr[i]);
        }
      }
    }
  }

  return truthyArr;
}

console.log(bouncer([7, "ate", "", false, 9])); // Output: []
console.log(bouncer([false, null, 0, NaN, undefined, ""])); // Output: []
console.log(bouncer([null, NaN, 1, 2, undefined])); // Output: [1, 2]
