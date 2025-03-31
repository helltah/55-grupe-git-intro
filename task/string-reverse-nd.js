// 1. SPRENDIMAS
function stringReverse(text) {
    let result = '';

    for (let i = text.length - 1; i >= 0; i--) {
        result += text[i];
    }

    // logika: text -->txet

    return result;
}

console.log(stringReverse('abc'));
console.log(stringReverse('sula'));
console.log(stringReverse('sedek'));
console.log(stringReverse('uzu'));
console.log(stringReverse('sachmatai'));
console.log(stringReverse('saskes'));


//2. SPRENDIMAS
function stringReverse1(text) {
    let result = '';

    for (let i = 0; i<text.length; i++ ) {
   result += text[text.length - i];     
    }

    return result;
}

console.log(stringReverse('abc'));
console.log(stringReverse('sula'));
console.log(stringReverse('kedes'));
console.log(stringReverse('seksas'));
console.log(stringReverse('vardas'));
console.log(stringReverse('sampanas'));


//3. SPRENDIMAS

//a    a
//b    ba
//c    cba

function stringReverse2(text) {
    if (typeof text !== 'string') {
        return 'Reikalinga string tipo reiksme.';
    }
    let result = '';

    for (let i = 0; i < text.length; i++ ) {
   result = text[i] + result;     
    }

    return result;
}
console.log(stringReverse2('cba'));
console.log(stringReverse2('alus'));
console.log(stringReverse2('kedes'));
console.log(stringReverse2('sekasi'));
console.log(stringReverse2('vardas'));
console.log(stringReverse2('sampanas'));


console.log(stringReverse2([]));
console.log(stringReverse2([1, 2]));
console.log(stringReverse2(['asd', ,'efre']));
console.log(stringReverse2(14561647));
console.log(stringReverse2(14561647));
console.log(stringReverse2(true));
console.log(stringReverse2(''));