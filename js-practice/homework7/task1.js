
function handleNum(number, handleEven, handleOdd) {
    if (number % 2 === 0) {
        handleEven();
    }
    else if (number % 2 !== 0) {
        handleOdd();
    }
}
function handleEven(handleNum) {
    console.log('The number is even');
}
function handleOdd(handleNum) {
    console.log('The number is odd');
}
handleNum(4, handleEven, handleOdd);