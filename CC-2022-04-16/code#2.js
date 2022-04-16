// Two to One 
// Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"


function longest(s1, s2) {
    let new_str = s1.concat(s2)
    const str_array = new_str.split('')
    let uniq_letters = new Set(str_array)
    let final_array = []
    uniq_letters.forEach(letters => {
      final_array.push(letters)
    })
    let final_word = final_array.sort().join('')
    return final_word
  }