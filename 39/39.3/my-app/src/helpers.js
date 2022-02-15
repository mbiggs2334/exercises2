const choice = array => {
    const idx = Math.floor(Math.random() * array.length);
    return array[idx];
};

const remove = (array, item) => {
    if(array.indexOf(item) !== -1){
        array.splice(array.indexOf(item),1);
        return array;
    };
    return undefined;
};

export { choice, remove }