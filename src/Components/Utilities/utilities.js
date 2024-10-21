function getTotalTimeCalories(array,value) {
    const sum = array.reduce((accumulator, currentValue) => {
        return accumulator + parseInt(currentValue[value].split(" ")[0]);
    }, 0);
    return sum;
}


export { getTotalTimeCalories }