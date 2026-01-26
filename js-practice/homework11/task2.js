function getObjectById(id) {
    return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(response => response.json());
}

function getUserById(id) {
    return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response => response.json());
}
getObjectById(1)
    .then(json => console.log(`Результат, отриманий з Todos:`, json))
    .catch(error => console.log('[Error] - ', error));
getUserById(1)
    .then(json => console.log(`Результат, отриманий з Users:`, json))
    .catch(error => console.log('[Error] - ', error));
const allPromises = Promise.all([getObjectById(1), getUserById(1)])
    .then(([todo, user]) => {
        console.log('Результат Promise.all:', { todo, user });
    });
const racePromises = Promise.race([getObjectById(2), getUserById(2)])
    .then(fastest => {
        console.log('Результат Promise.race:', fastest);
    }); 
