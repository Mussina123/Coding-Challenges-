// Description:
// Write a function that checks if a given string (case insensitive) is a palindrome.


let isPalindrome = word => word.toLowerCase() === word.toLowerCase().split('').reverse().join('') ? true : false 