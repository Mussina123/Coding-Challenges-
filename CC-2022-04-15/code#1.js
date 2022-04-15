// Calculate Average 

// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

function find_average(array) {
    let averageOfNums = array.reduce((acc, ele) => (acc + ele), 0) /array.length
  
    return averageOfNums > 0 ? averageOfNums : 0
    
    }