//1.Spausdinkite skaičius nuo 1 iki 10 naudodami for ciklą. 

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

console.log('\nnaujaspratymas')

//2. Spausdinkite skaičius nuo 10 iki 1 atvirkštine tvarka naudodami for ciklą. 

for (let i = 10; i >= 1; i--) {
    console.log(i);    
}

console.log('\nnaujaspratymas')

//3. Spausdinkite kiekvieną lyginį skaičių nuo 0 iki 20 naudodami for ciklą. 

for (let i = 0; i <= 20; i+= 2) {
    console.log(i)
}
 
console.log('\nnaujaspratymas')

//4.Spausdinkite kiekvieną nelyginį skaičių nuo 0 iki 20 naudodami for ciklą.

for (let i = 1; i < 20; i+=2) {
    console.log(i)
}   

console.log('\nnaujaspratymas')

//5.Išspausdinkite pirmuosius 10 skaičių kvadratų (1^2, 2^2, 3^2 ir t. t.).


for (let i = 1; i <= 20; i++) {
    console.log(i ** 2)
}  

console.log('\nnaujaspratymas')

//6. Išspausdinkite pirmuosius 10 skaičių kubų (1^3, 2^3, 3^3 ir t. t.). 


for (let i = 1; i <= 10; i++) {
    console.log(i ** 3)
}  

console.log('\nnaujaspratymas')

//7.Atspausdinkite 7 daugybos lentelę (7 × 1, 7 × 2 ir t. t.). 

const n = 7

for (let i = 1; i <=10; i++) {
    console.log(`${n} x ${i}`)
} 

console.log('\nnaujaspratymas')

//8. Atspausdinkite nuo 1 iki 5 žvaigždučių (*) seriją (pvz., *, **, *** ir t. t.). 


let b = '*'
for (let i = 1; i <=5; i++) {
    console.log(b)
    b+='a'
} 

console.log('\nnaujaspratymas')

 //9. Atspausdinkite atvirkštinę eigą su žvaigždutėmis 5 eilutėse (pvz., *****, ****, *** ir t. t.). 

 let c = '*****'
for (let i = 5 ; i > 0; i--) {
    console.log(c)
    c = c.slice(1)
} 

console.log('\nnaujaspratymas')

//10. Spausdinti skaičius nuo 1 iki 50, kurie dalijasi iš 3.

for ( let i = 0; i <= 50; i+=3) {
console.log((i))
}

console.log('\nnaujaspratymas')

//11. Spausdinti skaičius nuo 1 iki 50 imtinai, kurie dalijasi iš 5

for ( let i = 0; i <= 50; i+=5) {
    console.log((i))
}

console.log('\nnaujaspratymas')
    
//12. Spausdinti skaičius nuo 1 iki 100, kurie dalijasi ir iš 3, ir iš 5. 


for ( let i = 1; i < 100; i++ ){

if(i % 5 == 0 && i % 3 == 0){
    console.log((i))
}     
}

console.log('\nnaujaspratymas')

//13. Sukurkite for ciklą, kuris penkis kartus išspausdintų "Hello, World!". 

const e =  "Hello World!"
for (let i = 0; i <= 5; i++ ){
    console.log(e)
}

/*
Sunkesnės užduotys: 
*/
console.log('\nnaujaspratymas')
/*1. Sukurkite for ciklą, kuris spausdina skaičius nuo 1 iki 100, tačiau kiekvieną skaičių, kuris 
dalijasi iš 4, reikia pakeisti žodžiu „Fizz“. 
*/

for (let i = 1; i <= 100; i++) {
    if (i % 4 === 0) {
        console.log('Fizz');
    } else {
        console.log(i);
    }
}

console.log('\nnaujaspratymas')
//2.Spausdinkite skaičius nuo 1 iki 100, bet skaičius, kurie dalijasi iš 3, pakeiskite "Fizz", 
//skaičius, kurie dalijasi iš 5, - "Buzz", o skaičius, kurie dalijasi iš abiejų, - "FizzBuzz". 

for ( i = 1; i <= 100; i++){
if(i % 3 == 0)
    {
 console.log('Fizz'); 
} 
if(i % 5 == 0)
    {
 console.log('Buzz'); 
} 
if(i % 3 == 0 && i % 5 == 0)
    {
 console.log('FizzBuzz'); 
}
if (i % 3 != 0 && i % 5 != 0){
    console.log(i)
} 
}
 
console.log('\nnaujaspratymas')

//3.Spausdinkite pirmuosius 10 skaičių Fibonačio sekoje.
// Kiekvienas šios sekos skaičius lygus dviejų prieš jį einančių skaičių sumai!.
// 2 kintamieji
let p = 0
let p1 =1, siekantisSkaicius

 for (i = 1; i<=10; i++){
    console.log(p)
 
siekantisSkaicius = p + p1
p = p1
p1 = siekantisSkaicius
 }

 console.log('\nnaujaspratymas')

 //4.Spausdinkite skaičius nuo 1 iki 20 ir prie kiekvieno lyginio skaičiaus spausdinkite 
 // "Even", o prie kiekvieno nelyginio - "Odd".
 
 for ( i = 0; i <= 20; i++){
  if (i % 2 == 0){
    console.log('Even')
  }
  else
  {
    console.log('Odd')
  }
 }

 //5. Spausdinti bet kurio pasirinkto skaičiaus daugybos lentelę.

 console.log('\nnaujaspratymas')

const sk = 7
 for (i = 0; i <= 10 ; i++) {
 console.log(7 * i)
 }

 console.log('\nnaujaspratymas')

 //6. Sukurkite for ciklą, kuris spausdina skaičius nuo 1 iki 30, bet tik tuos, kurie
 //  dalijasi iš 2 arba 3.

 for ( i = 1; i <= 30; i++) {
  if (i % 2 == 0 && i % 3 == 0){
    console.log (i)
  }
 }

 console.log('\nnaujaspratymas')

 //7. Sukurkite for ciklą, kad patikrintumėte, ar skaičius yra pirminis, ir išspausdintumėte 
//pranešimą

let skaicius = 5
for (let i = 0; i <= skaicius; i++){
  if (skaicius % i == 0){
    console.log(i)
  }
}

console.log('\nnaujaspratymas')

//8.Spausdinkite pirmuosius 10 pirminių skaičių, naudodami for ciklą ir if sąlygas.

let skaicius1 = 7
for (let i = 0; i <= 10; i++){
  if (skaicius1 % i == 0){
    console.log(i)
  }
}

console.log('\nnaujaspratymas')

//9. Išspausdinkite visų lyginių skaičių nuo 1 iki 100 sumą.
for (i = 1; i <= 100; i++){
    if (i % 2 == 0) {
        console.log(i)
    }
}