function divide(numerator, denominator) {
    if (denominator === 0) {
        throw new Error(`Uncorrecr input: denominator = ${denominator}`);
    } else if (typeof numerator !== typeof denominator && typeof numerator != Number) {
        throw new Error('Uncorrect input: isNot datatype Number');
    } else {
        return console.log(numerator / denominator);
    }
}
try {
    divide(12, 0);
} catch (error) {
    console.log(error);
}
try {
    divide(13, 'fd');
} catch (error) {
    console.log(error);
}
finally {
    divide(13, 5);
    console.log('Робота завершена');
}