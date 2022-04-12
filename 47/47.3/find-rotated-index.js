function findRotatedIndex(arrayay, value) {
    var pivot = findPivot(arrayay)
    if (pivot > 0 && value >= arrayay[0] && value <= arrayay[pivot - 1]) {
      return binarySearch(arrayay, value, 0, pivot - 1);
    } else {
      return binarySearch(arrayay, value, pivot, arrayay.length - 1);
    }
}
  
function binarySearch(arrayay, value, firstIndex, rightIndex) {
    if (arrayay.length === 0) return -1;
    if (value < arrayay[firstIndex] || value > arrayay[rightIndex]) return -1;
  
    while (firstIndex <= rightIndex) {
      var middleIndex = Math.floor((firstIndex + rightIndex) / 2);
      if (arrayay[middleIndex] === value) {
        return middleIndex;
      } else if (value < arrayay[middleIndex]) {
        rightIndex = middleIndex - 1;
      } else {
        firstIndex = middleIndex + 1;
      }
    }
    return -1;
}
  
function findPivot(array) {
    if (array.length === 1 || array[0] < array[array.length - 1]) return 0;
    var firstIndex = 0
    var rightIndex = array.length - 1;
    while (firstIndex <= rightIndex) {
      var middleIndex = Math.floor((firstIndex + rightIndex) / 2);
      if (array[middleIndex] > array[middleIndex + 1]) return middleIndex + 1
      else if (array[firstIndex] <= array[middleIndex]) {
        firstIndex = middleIndex + 1
      } else {
        rightIndex = middleIndex - 1
      }
    }
}

module.exports = findRotatedIndex