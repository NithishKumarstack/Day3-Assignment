// print odd numbers in an array?
let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
for(let i=0; i<arr.length; i++){
    if(arr[i] % 2 !==0 ){
       console.log("Print odd numbers in an Array:", arr[i]);
    }
};   // Output: 1 3 5 7 9 

// Convert all the strings to title caps in a string array?
let str = "hello guvi this is nithish kumar";
let cap = str.toUpperCase();
console.log("Convert all the Strings into Caps String:", cap);  // Output: HELLO GUVI THIS IS NITHISH KUMAR

// Sum of all numbers in an array?
let box = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let sum = box.reduce((acc, curr) => 
acc + curr, 0);
console.log("Sum of all numbers in an Array:", sum); // Output: 45

// Return all the prime numbers in an array?
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Anonymous Function
(function(){
    const filteredValues = numbers.filter((num) => {
        for(let i = 2; i < num; i++){
            if(num % i === 0){
                return false;
            }
        }
        return num > 1;

    });

    console.log("PrimeNumbersinanArray:", filteredValues);
})();  // Output: [ 2, 3, 5, 7 ]

// Return all the palindromes in an array?
const Arr = ['hello', 'level', 'world', 'racecar', 'noon'];  // Helper function to check if a word is a palindrome
function isPalindrome(word) {
  const reversedWord = word.split('').reverse().join('');
  return word === reversedWord;
}
const palindromes = Arr.filter((word) => isPalindrome(word));  // Filter the array to get all palindromes
console.log("Palindromes:", palindromes); // Output: ['level', 'racecar', 'noon']

// Return median of two sorted arrays of the same size?
const findMedianSortedArrays = function(arr1, arr2) {
    const mergedArray = arr1.concat(arr2).sort((a, b) => a - b);
    const middleIndex = Math.floor(mergedArray.length / 2);
  
    if (mergedArray.length % 2 === 0) {
      return (mergedArray[middleIndex - 1] + mergedArray[middleIndex]) / 2;
    } else {
      return mergedArray[middleIndex];
    }
  };
  const arr1 = [1, 3, 5, 7, 9];
  const arr2 = [2, 4, 6, 8];
  const median = findMedianSortedArrays(arr1, arr2);
  console.log("FindMedianofTwoSortedArrays:", median);  // Output: 3.5
  
// Remove duplicates from an array?
const array = [0, 1, 2, 3, 3, 4, 5, 6, 6, 7, 8, 8, 8, 9];
const uniqueArray = array.filter(function(value, index, self) {
  return self.indexOf(value) === index;
});
console.log("RemoveDuplicatesfromanArray:", uniqueArray);  // Output: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// Rotate an array by k times?
const Box = [1, 2, 3, 4, 5, 6];
const k = 3; // Number of rotations
const rotateArray = function(arr, rotations) {
  for (let i = 0; i < rotations; i++) {
    const temp = arr.shift();
    arr.push(temp);
  }
  return arr;
};
const rotatedArray = rotateArray(Box.slice(), k); // Create a copy of the original array
console.log("RotateanArraybyKTimes:", rotatedArray);  // Output: [4, 5, 6, 1, 2, 3]
// -----------------------------------------------------------------------------------------------------------------------------