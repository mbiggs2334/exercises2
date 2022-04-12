function findFloor(array, value, leftIndex = 0, rightIndex = array.length - 1) {
    if (leftIndex > rightIndex) return -1;
    if (value >= array[rightIndex]) return array[rightIndex];
  
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
  
    if (array[middleIndex] === value) return array[middleIndex];
  
    if (middleIndex > 0 && array[middleIndex - 1] <= value && value < array[middleIndex]) {
      return array[middleIndex - 1];
    }
  
    if (value < array[middleIndex]) {
      return findFloor(array, value, leftIndex, middleIndex - 1);
    }
  
    return findFloor(array, value, middleIndex + 1, rightIndex)
}

module.exports = findFloor