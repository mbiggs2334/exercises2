function sortedFrequency(array, value) {
    let firstIdx = findFirst(array, value);
    if (firstIdx == -1) return firstIdx;
    let lastIdx = findLast(array, value);
    return lastIdx - firstIdx + 1;
}
  
function findFirst(array, value, leftIndex = 0, rightIndex = array.length - 1) {
    if (rightIndex >= leftIndex) {
      let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
      if ((middleIndex === 0 || value > array[middleIndex - 1]) && array[middleIndex] === value) {
        return middleIndex;
      } else if (value > array[middleIndex]) {
        return findFirst(array, value, middleIndex + 1, rightIndex)
      } else {
        return findFirst(array, value, leftIndex, middleIndex - 1)
      }
    }
    return -1
}
  
function findLast(array, value, leftIndex = 0, rightIndex = array.length - 1) {
    if (rightIndex >= leftIndex) {
      let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
      if ((middleIndex === array.length - 1 || value < array[middleIndex + 1]) && array[middleIndex] === value) {
        return middleIndex;
      } else if (value < array[middleIndex]) {
        return findLast(array, value, leftIndex, middleIndex - 1)
      } else {
        return findLast(array, value, middleIndex + 1, rightIndex)
      }
    }
    return -1
}

module.exports = sortedFrequency