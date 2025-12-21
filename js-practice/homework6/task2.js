function isAdult (age){
    const notAdult = 'The person isn`t adult' ;
    const isAdult = 'The person is adult' ;
    if (age < 18){
        return notAdult
    }
    else if (age >= 18 && age <= 100) {
        return isAdult
    }
    return 'Wrong input'
}
console.log(isAdult(15)) 
console.log(isAdult(25))