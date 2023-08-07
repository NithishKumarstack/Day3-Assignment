// Print odd numbers in an array?
const Array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const oddNumbers = Array.filter(number => number % 2 !== 0);
console.log("OddNumbers:", oddNumbers); // Output: [1, 3, 5, 7, 9]

// Convert all the strings to title caps in a string array?
const stringArray = ["hello world", "javascript is great", "programming is fun"];
const titleCapsArray = stringArray.map(str => {
  return str
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
});
console.log("StringsToTitleCaps:", titleCapsArray);  //Output: [ 'Hello World', 'Javascript Is Great', 'Programming Is Fun' ]

// Sum of all numbers in an array?
const Box = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sum = Box.reduce((total, Box) => total + Box, 0);
console.log("SumOfAllNumbersInAnArray:", sum); //Output: 55

// Return all the prime numbers in an array?
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
const isPrime = number => {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};
const primeNumbers = numbers.filter(number => isPrime(number));
console.log("PrimeNUmbers:", primeNumbers); //Output: [ 2, 3, 5, 7, 11, 13 ]

// Return all the palindromes in an array?
const words = ["level", "hello", "radar", "world", "deified"];
const isPalindrome = word => {
  const reversed = word.split('').reverse().join('');
  return word === reversed;
};
const palindromeWords = words.filter(word => isPalindrome(word));
console.log("PalindromeWords:", palindromeWords); //Output: [ 'level', 'radar', 'deified' ]
//---------------------------------------------------------------------------------------------------------------------------------