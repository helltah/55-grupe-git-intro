function biggestNumber(list) {
    if (!Array.isArray(list)) {
      return ' Duomenys turi buti sarase.';
    }


    let biggest = -Infinity;

    for (let i = 0; i < list.length; i++) {

        if(typeof list[i] !== 'number') {
            continue;
        }

        if (!isFinite(list[i])) {
            continue;
        }


        if (list[i] > biggest) {
            biggest = list[i];
        }
    }
    return biggest;         
}

console.log(biggestNumber([1]), '-->', 1);
console.log(biggestNumber([1, 2]), '-->', 2);
console.log(biggestNumber([1, 2, 3]), '-->', 4);
console.log(biggestNumber([2, 3, 1]), '-->', 4);
console.log(biggestNumber(['asdf']), '-->', 4);
console.log(biggestNumber('fdasdf'), '-->', 4);

console.log(biggestNumber(['asd', 2, 3]));
console.log(biggestNumber([1, 2, 'asd']));
console.log(biggestNumber([1, 'asd', 3]));

console.log(biggestNumber([-Infinity, -2, -3]));
console.log(biggestNumber([-1, -2, -Infinity]));
console.log(biggestNumber([-1, -Infinity, -3]));

console.log(biggestNumber([-Infinity, -2, -3]));
console.log(biggestNumber([-1, -2, Infinity]));
console.log(biggestNumber([-1, Infinity, -3]));

