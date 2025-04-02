function divide (skaicius1, skaicius2) {
if (typeof skaicius1 !== 'number' || typeof skaicius2 !== 'number' ){
return 'abu kintamieji nera skaiciai'
}
if (skaicius2 === 0 ){
    return 'dalyba is 0 negalima.'
}
const rezultatas = skaicius1 / skaicius2

if (!isFinite(rezultatas)) {
    return 'rezultatas nera galinis'
}

return rezultatas
}  

console.log(divide(5,0));
console.log(divide('as', 'as'));
console.log(divide(0, 5));