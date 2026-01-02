

function recursionCounter(num) {
   console.log(num);
    if (num <= 0) {
        return;
    } else {
        return recursionCounter(num - 1);
    }
}
recursionCounter(9);