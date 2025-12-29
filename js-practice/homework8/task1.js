
// Створіть масив чисел за допомогою конструкції const numbers = [2, -5, 0, 7, -3, 0, 10, -8].
// Задайте змінні positiveCount, negativeCount та zeroCount зі значенням 0. Вони будуть використовуватись для відстеження кількості позитивних, негативних та нульових чисел в масиві.
// Використовуючи цикл for, пройдіться по кожному елементу масиву numbers.
// Перевірте чи число позитивне, негативне чи нульове, та збільште відповідну змінну (positiveCount, negativeCount або zeroCount) на 1.
// Після завершення циклу виведіть значення змінних positiveCount, negativeCount та zeroCount на консоль.
const numbers = [3, -4, 9, 0, -18, 50, 45];
let positiveCount = 0;
let negativeCount = 0;
let zeroCount = 0;
for (let i = 0; i <= numbers.length; i++) {
    if (numbers[i] < 0) {
        negativeCount++;
    } else if (numbers[i] === 0) {
        zeroCount++;
    } else if (numbers[i] > 0) {
        positiveCount++;
    }
}
console.log(`Кількість позитивних значеннь : ${positiveCount}`);
console.log(`Кількість негаливних значеннь : ${negativeCount}`);
console.log(`Кількість нульових значеннь : ${zeroCount}`);