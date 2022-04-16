/** product: calculate the product of an array of numbers. */

function product(nums, i=0) {
  if(i === nums.length) return 1;
  return nums[i] * product(nums, i + 1);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, i=0) {
  if(words[i] === undefined) return 0;
  return words[i].length > longest(words, i +1) 
  ? words[i].length 
  : words[i + 1].length;
}

/** everyOther: return a string with every other letter. */

function everyOther(str, i=0) {
  if(i === str.length) return '';
  return (i % 2 === 0 ? str[i] : '') + everyOther(str, i + 1);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, i=0) {
  let left = i;
  let right = str.length - i - 1;
  if (left >= right) return true;
  if (str[left] !== str[right]) return false;
  return isPalindrome(str, i + 1);
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i=0) {
  if(i === arr.length) return -1;
  if(arr[i] === val) return i;
  return findIndex(arr, val, i + 1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, i=str.length - 1) {
  if(i === -1) return '';
  return str[i] + revString(str, i - 1);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let emptyArray = [];
  for(let val of Object.values(obj)){
    if(typeof(val) === 'object'){
      emptyArray.push(gatherStrings(val));
    } else {
      if(typeof(val) === 'string'){
        emptyArray.push(val);
      }
    }
  }
  return emptyArray.flat(Infinity);
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, left=0, right=arr.length - 1) {
  if(left > right) return -1;
  let returnVal;
  let mid = Math.floor((left + right) / 2);
  if(arr[mid] === val) return mid;
  if(val > mid){
    returnVal = binarySearch(arr, val, mid + 1, right);
  } else {
    returnVal = binarySearch(arr, val, left, mid - 1);
  };
  return returnVal === -1 ? -1 : returnVal;
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
