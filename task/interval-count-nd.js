function intervalCount(start, end, divider){
let count = 0

for (let i = start; i <= end; i++) {
    if (i % divider === 0) {
        count++;
    }
}


    return `Skaiciu intervale tarp ${start} ir ${end}, besidalijinciu be liekanos is ${divider} yra ${count} vienetai.`;
}

console.log(intervalCount(0, 11, 3));

console.log(intervalCount(0, 11, 3))
console.log(intervalCount(0, 11, 5))
console.log(intervalCount(0, 11, 7))

function intervalCount(start, end, divider){
    let count = 0

    for (let i = start; i <= end; i+= divider) {
        if (i % divider === 0) {
            count++;
        }
    }
    
    
        return `Skaiciu intervale tarp ${start} ir ${end}, besidalijinciu be liekanos is ${divider} yra ${count} vienetai.`;    
}
console.log(intervalCount(1, 11, 3))
console.log(intervalCount(1, 11, 5))
console.log(intervalCount(1, 11, 7))
 
 console.clear();
//3.

function intervalCount(start, end, divider){
    if (typeof start !== 'number' ){
        return 'Intervalo pradzia turi buti skacius.'
    }
    if (typeof end !== 'number' ){
        return 'Intervalo pradzia turi buti skacius.'
    }
    if (typeof divider !== 'number'){
        return 'Daliklis turi buti skacius.'
    }
    if (start % 1 !== 0) {
        return 'Intervalo pradzia turi buti sveikasis skaicius.'
    }
    if (end % 1 !==0) {
        return 'Intervalo pabaiga turi buti sveikasis skacius.'
    }
    if (divider % 1 !== 0) {
        'Daliklis turi buti sveikasis skaicius'
    }
    if (start > end) {
        return 'Intervalo pradzia negali buti didesne nei intervalo pabaiga.'
    }

    let count = 0;

    for (let i = start; i <= end; i++) {
        if ( i % divider === 0) {
            count++;
        }
        }
        return `Skaiciu intervale tarp ${start} ir ${end}, besidalijinciu be liekanos is ${divider} yra ${count} vienetai.`;    
}
console.log(intervalCount(1, 11, 'asd'))
console.log(intervalCount(1, 'asd', 5))
console.log(intervalCount('asd', 11, 7))


console.log(intervalCount(0.1, 11, 3));
console.log(intervalCount(0, 11.1, 3));
console.log(intervalCount(0, 11, 3.1));
console.log(intervalCount(0,1, 11, 3.1));
console.log(intervalCount(0, 11, 3.1));
console.log(intervalCount(0, 11, 3));

console.log(intervalCount(NaN, 11, 7.1));
console.log(intervalCount(0, NaN, 7.1));
console.log(intervalCount(0, 11, NaN));
    
console.log(intervalCount(Infinity, 11, 7));
console.log(intervalCount(0, Infinity, 7));
console.log(intervalCount(0, 11, Infinity))





const a = 3.111; 
const b = a % 1;
console.log(b);