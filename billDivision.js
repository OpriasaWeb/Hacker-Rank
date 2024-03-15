// Instructions are here: https://www.hackerrank.com/challenges/bon-appetit/problem

function bonAppetit(bill, k, b) {
  // Write your code here
  
  // Psuedocode:
  let total = 0
  // Loop through the bill
  for(let i = 0; i < bill.length; i++){
      // Check if the current index matches the value of k parameter, continue or skip
      if(i == k){
          continue
      }
      // Get the total cost that Brian and Anna shared from
      total += bill[i]
  }
  
  // Variable to get the result divided by 2
  let dividedByTwo = total / 2
  
  // If b parameter is not equals to result variable
  if(dividedByTwo != b){
      // b minus the actual charge and return
      let overcharge = b - dividedByTwo
      console.log(overcharge)
      return overcharge
  }
  
  // Otherwise return Bon Appetit
  console.log("Bon Appetit")
  return 
}

// ----- Test cases below -----
bonAppetit([3, 10, 2, 9], 1, 12)
// bonAppetit([3, 5, 4, 10], 3, 32)
// bonAppetit([8, 13, 27, 90], 2, 134)