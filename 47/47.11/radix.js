const numCont = {
    0: [],
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
    6: [],
    7: [],
    8: [],
    9: [],
};

function getMaxDigits(arr){
    let highestDigit = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i].toString().length > highestDigit){
            highestDigit = arr[i].toString().length;
        };
    };
    return highestDigit;
}

function getDigitCount(num){
    return num.toString().length;
};

function getDigit(num, place){
    let stringified = num.toString();
    if(stringified.length - place < 0) return 0;
    return parseInt(stringified[(stringified.length - place) - 1]);
};

function radixSort(arr) {
    const largestDigit = getMaxDigits(arr);
    let currentPlace = 0;
    let sortedArray = [...arr];
    while(currentPlace < largestDigit){

        for(let i = 0; i < sortedArray.length; i++){
            let currentDigit = getDigit(sortedArray[i], currentPlace);
            numCont[currentDigit].push(sortedArray[i]);
        }

        console.log(numCont);

        sortedArray = [];

        for(let h = 0; h < 10; h++){
            for(let j = 0; j < numCont[h].length - 1; j++){
                sortedArray.push(numCont[h][j]);
            }
            numCont[h].length = 0;
        }
        currentPlace++
    }
    // console.log(numCont);
    // console.log(sortedArray);
}




module.exports = radixSort;