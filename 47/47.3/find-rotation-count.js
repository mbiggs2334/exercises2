function findRotationCount(array, leftIndex = 0, rightIndex = array.length - 1) {
    if (rightIndex < leftIndex) return 0;
    if (rightIndex === leftIndex) return leftIndex;
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
  
    // Check if element (middleIndex+1) is minimum element.
    // Consider the cases like [3, 4, 5, 1, 2]
    if (middleIndex < rightIndex && array[middleIndex + 1] < array[middleIndex])
      return middleIndex + 1;
  
    // Check if middleIndex itself is minimum element
    if (middleIndex > leftIndex && array[middleIndex] < array[middleIndex - 1]) {
      return middleIndex;
    }
  
    // Decide whether we need to go to left half or
    // right half
    if (array[rightIndex] > array[middleIndex]) {
      return findRotationCount(array, leftIndex, middleIndex - 1);
    }
  
    return findRotationCount(array, middleIndex + 1, rightIndex);
}

module.exports = findRotationCount