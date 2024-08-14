// Instructions: https://www.codewars.com/kata/55b42574ff091733d900002f/train/javascript
/*
Make a program that filters a list of strings and returns a list with only your friends name in it.

If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

Input strings will only contain letters. Note: keep the original order of the names in the output.
*/

function friend(friends){
  //your code here
  let output = []
  // Loop through the length of parameters
  for(let i = 0; i < friends.length; i++){
    // if the current index length is equals to four
    if(friends[i].length === 4){
      // push it to output array
      output.push(friends[i])
    }
  }
  
  return output
  
}
// Call function
friend(["Ryan", "Kieran", "Mark"])