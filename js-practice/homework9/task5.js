
// Створіть масив об'єктів users де обєкти мають довільні властивості (наприклад, name, email, age, тощо).
// Використовуючи цикл for...of, переберіть всі елементи масиву та виведіть їхні значення в консоль.
// Зробіть деструктуризацію в циклі
const users = [
    { firstName: 'Peter', lastName: 'Johnson', email: 'peter@gmail.com', age: 40 },
    { firstName: 'Sam', lastName: 'Biden', email: 'sam@gmail.com', age: 45 },
    { firstName: 'John', lastName: 'Johnson', email: 'john@gmail.com', age: 55 }
];
for (const { firstName, lastName, email, age } of users) {
    console.log(` name: ${firstName} ${lastName}; email: ${email}; age: ${age} `);
};

