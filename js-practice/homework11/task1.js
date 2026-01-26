// Напишіть функцію яка буде приймати 2 аргументи - 
// довільний текст як перший аргумент та кількість 
// мілісекунд як другий аргумент. Функція повинна вивести в консоль 
// переданий текст через вказану кількість мілісекунд
const someText = 'This text will show after timeout';
function showMessage(text, timeout) {
    console.log(`Text will show after ${timeout} ms`);
    setTimeout(function () {
        console.log(`${text}`);
    }, timeout);
}
showMessage(someText, 4000);