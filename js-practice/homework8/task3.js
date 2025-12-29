
// Створіть масив чисел, наприклад, [10, 20, 30, 40, 50].
// Використовуючи метод reduce, обчисліть суму всіх елементів масиву.
// Виведіть отриману суму на консоль.
const inputData = [10, 20, 30, 40, 50];
const sumElements = inputData.reduce((accelerator, number) => accelerator + number);
console.log(sumElements);