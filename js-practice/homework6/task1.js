//Function declaration
function squareCalculating(width, height) {
    return width * height;
}
console.log(squareCalculating(16, 5));

//Function expression
const squareCalculating1 = function (width1, height1) {
    return width1 * height1;
}
console.log(squareCalculating1(2, 2));

// Row function
const squareCalculating2 = (width2, height2) => {
    return width2 * height2;
}
console.log(squareCalculating2(3, 3));
