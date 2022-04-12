function countZeroes(array) {
    let count = 0;
    let leftIndex = 0;
    let rightIndex = array.length - 1;
    while(leftIndex <= rightIndex){
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
        let middleValue = array[middleIndex];
        if(middleValue === 0){
            rightIndex = middleIndex - 1;
            count = array.length - rightIndex - 1;
        } else if(middleValue !== 0){
            leftIndex = middleIndex + 1;
        }
    }
    return count;
}

module.exports = countZeroes