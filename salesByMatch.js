// Instructions: https://www.hackerrank.com/challenges/sock-merchant/problem

function sockMerchant(n, ar) {
    // Write your code here
    
    // To store the key value pairs here
    let count = {}
    let pairCount = 0
    
    // Loop through the array, if match the value then increment to 1 and if did not match anything meaning to say it is new, then basically add 1
    ar.forEach(sock => {
        if(count[sock]){
            count[sock] += 1
        }
        else{
            count[sock] = 1
        }
    })
    
    
    for(let color in count){
        console.log(count[color])
        // If the value is greater than 1
        if(count[color] > 1){
            // Check if divisible to two
            if(count[color] % 2 == 0){
                // If so, divide it to two then store it to pairCount variable
                let dividePair = count[color] / 2
                pairCount += dividePair
            }
            else{
                // If not, minus one and divide it to two then store it to pairCount variable
                let minusOne = count[color] - 1
                let dividePair = minusOne / 2
                pairCount += dividePair
            }
        }
            
    }
    return pairCount

}