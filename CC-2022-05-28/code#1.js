// Square Every Digit 

// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

// P: Parameters: number, 0 included, no strings/objects/arrays 

// R - Returns: number only 

// E - Examples    
//   (squareDigits(3212), 9414);
//   });

//   squareDigits(2112), 4114);
//   });

//  (squareDigits(0), 0);

// P - Pseudocode
 
//   Number only parameter 
//  - take input number, put into string, then split by individual string, then map into array, returning number
//  - map method to square each element... then use .join() to put back together via concat, return 
 
function squareDigits(num){
    let newArr = String(num).split('').map((num) => { return Number(num)
  })  
    let result = newArr.map(ele => Math.pow(ele, 2))
    let sum = result.join('');
    return sum
  }
  