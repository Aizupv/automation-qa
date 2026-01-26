async function getToDoById(id) {
    const getToDo = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
    const toDodata = await getToDo.json();
    return toDodata;
}
async function getUserById(id) {
    const getUser = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const userData = await getUser.json();
    return userData;
}
async function allPromise() {
    const [todo, user] = await Promise.all([getToDoById(2), getUserById(2)]);
    console.log('Результат Promise.all:', { todo, user });
}
async function racePromises() {
    const race = await Promise.race([getToDoById(4), getUserById(3)]);
    console.log(`Результат Promise.race:`, race);
}
allPromise();
racePromises();