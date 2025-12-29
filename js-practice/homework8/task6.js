// У вас є вихідний масив
// Copy code
// Створіть новий масив на основі вихідного масиву (копіюйте його)
// Відсортуйте створений масив (від меншого до більшого)
// Виведіть обидва масиви в консоль
const unsortedArray = [3, 0, 6, 98, 56, 13, 45];
const sortedArray = unsortedArray.sort((a, b) => a - b);
console.log(sortedArray);