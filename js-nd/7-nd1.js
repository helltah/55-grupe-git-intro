/* Uzduotys su IF ir sarasais(array)
*/
//  1.patikrinkite, ar sarase yra [1, 2, 3, 4] tam tikras skaicius 3.



const sarasas1 = [1, 2, 3, 4];
if (sarasas1[1] === 3||sarasas1[2] === 3||sarasas1[0] === 3||sarasas1[3] === 3)
    
    {
    console.log('Rasta!');

}
else
{
    console.log('Nerasta')
    

}
    
 
/*  2.Patikrinkite ar masyvas tuscias
*/
// Patikrinkite ar sarasas tuscias [].

const masyvas = []
console.log(masyvas)

/*  3. Nustatyti, ar sarase yra teigiamas skaicius.
*/
//  PVZ. Patikrinkite, ar sarase [1, -2, 3, -4] yra teigiamu skaiciu.

const sarasas2 = [1, -2, 3, -4]
if (sarasas2[2] > 0||sarasas2[0] > 0||sarasas2[1] > 0||sarasas2[3] > 0)
   {
    console.log('Yra teigiamas skaicius')
}
else
{
    console.log('Neigiamas skaicius')
}

/* 4. Patikrinkite ar visi saraso skaiciai yra lyginiai.
*/

const lyginiai = [2, 4, 6]
 if (lyginiai[0, 1, 2] % 2 === 0)
 {
    console.log('Yra lyginiai skaiciai')
 }
 else
{
    console.log('Lyginiu skaiciu nera')
}

/* 5. Patikrinkite, ar kuris nors skaicius sarase yra neigiamas.
PVZ: [3,5, -2]
*/

const skaiciai3 = [3, 5, -2]
if (skaiciai3[0] <0|| skaiciai3[1] <0|| skaiciai3[2] <0)
    {
    console.log('Yra neigiamnas skaicius')
}
else
{
    console.log('Nera neigiamo skaiciaus')
}

/*6. Patikrinkite ar pirmas skaicius sarase didesnis uz paskutini.
*/

const skaiciai4 = [1, 3, 5]
if(skaiciai4[0] < skaiciai4[2])
    {
console.log('Pirmas skacius maziau uz paskutini.')
}
else
{
    console.log('Pirmas skaicius didesnis uz paskutini.')

}

/*7. Patikrinkite, ar saraso ilgis didesnis uz 5.
PVZ ar saraso [1,, 2, 3, 4, 5, 6] ilgis didesnis nei 5.
*/

const sarasoIlgis = [1, 2, 3, 4, 5, 6]
if(sarasoIlgis.length > 5){
    console.log('Saraso ilgis didesnis 5')
}
else
{
    console.log('Saraso ilgis maziau 5')
}

/*8. Patikrinkite ar sarase yra tik teksto tipo kintamieji.
PVZ: Patikrinkite ar ["Obuolys", "bananas", "vysnia"] yra tik tekstai.
*/

const sarasas5 = ["Obuolys", "bananas", [1], "daiktas"]
if(typeof sarasas5[0] == 'string') 
       {
    console.log(typeof sarasas5[0])
}
else
{
    console.log(false)
}
if(typeof sarasas5[1] == 'string') {
    console.log(typeof sarasas5[1])

}
else
{
    console.log(false)
}
if(typeof sarasas5[1] == 'string') {
    console.log(typeof sarasas5[2])
}
else{
    console.log(false)
}
if(typeof sarasas5[3] == 'string') {
    console.log(typeof sarasas5[3])
}
else

    console.log(false)


console.clear();
//Uzduotys su IF.

/*1.Patikirinkite ar skaicius teigiamas. 
*/

const skaicius2 = 3

if(skaicius2 >= 0) {
    console.log(`${skaicius2} yra teigiamas skaicius`)
}
else
{
    console.log('neigiamas')
}


/*2.Patikrinkite ar skaicius dalijasi.Pvz: ar skacius =15/5.
*/
const dividerNumber = 15

if (dividerNumber % 5 === 0){
    console.log(`${dividerNumber} dalijasi`)
}
else
{
    console.log('nedalijasi');
}

/*3.Patikrinkite ar teksto tipo kintamajame.Pvz: Patikrinkite ar eiluteje str = 'hello' yra daigiau nei 5 simboliai.
*/
function textSize7(text) {
    if (text.length > 5) {
        return 'Tekste daugiau negu 5 simboliai.';
    }
    if (text.length <= 5){
        return 'Tekste maziau negu 5 simboliai';
    }
    
}console.log(textSize7('hello'));

/*4. Patikrinkite ar asmuo turi teise balsuoti (amzius didesnis arba =18metu).
Pvz. ar turi teise balsuoti jei juo amzius =20metu
*/

function zmogausAmzius(amzius) {
if (amzius >= 18) {
    return 'Gali balsuot'
  }
  if (amzius < 18) {
    return 'Negali balsuot'
  }
}
console.log (zmogausAmzius(20));
console.log (zmogausAmzius(17));

/*5 Patikrinkite, ar asmuo yra paauglys nuo (13 iki 19 metu.)
Pvz.Patikrinkite , ar amzius = 15 atitinka paauglio amziu..
*/ 
function paauglio(amzius1) {
    if (amzius1 <= 14){
        return 'vaikas'
   }
   if (amzius1 >=13 && amzius1 <= 19) {
    return 'Amzius atitinka paauglio'
   }
   if (amzius1 >= 19) {
    return 'Suauges'
   }
}
console.log(paauglio(5));
console.log(paauglio(15));
console.log(paauglio(20));

/*6. Patikrinkite, ar skaicius yra nelyginis. Pvz ar skaicius = 7 yra nelyginis.*/

//v1
function oddNumber(skaicius) {
return skaicius % 2 === 0 ; 
}
console.log(oddNumber(7));
console.log(oddNumber(6));
console.log(oddNumber(10));
console.log(oddNumber(11));
console.log(oddNumber(9));

//v2

function oddNumber(skaicius)
{
 if (skaicius % 2 === 0)
    {
    return `${skaicius} lyginis`
 }
 if (skaicius % 2 !== 0) 
    {
    return `${skaicius} skaicius nelyginis`
 }
 
} 

/*7. Patikrinkite ar eilute lygi "Javascript" Pvz. ar teksto kintamasis = "Javascript" yra lygus = "Javascript"
*/
 function Javascript(zodis)
  {
    if (zodis == 'Javascript')
    {
        return `${zodis} lygus "Javascript"` 
    }
    else{
        console.log(`${zodis} nelygus "Javascript`)
    }
}
console.log(Javascript('Javascript'))
console.log(Javascript("JAVASCRIPT"))
console.log(Javascript("JAV"))

/*8. Patikrinkite, ar skaicius yra nuo 10 iki 20(imtinai) Pvz. patikrinkite, ar skaicius = 15 yra tarp 10 ir 20.
*/

function skaicius5(numeris)
{
    if (numeris > 10 && numeris <= 20) 
        {
            return `${numeris} yra tarp 10 ir 20.`
        }
        if (numeris <= 10 || numeris > 20)
        {
            return `${numeris} nera tarp 10 ir 20.`
        }
}

console.log(skaicius5(10));
console.log(skaicius5(20));
console.log(skaicius5(30));
console.log(skaicius5(5));


/*9.Patikrinkite, ar skaicius yra didesnis arba lygus 100.Pvz: Patikrinkite, ar skaicius = 150 yra didesnis arba lygus 100.
*/ 

function biggerNumber(skaicius6)
{
    if (skaicius6 >= 100)
        {
            return `${skaicius6} skaicius yra didesnis arba lygus,`
        }
        else
        {
            return `${skaicius6} yra mazesnis uz 100. `
        }
        
}
console.log(biggerNumber(100));
console.log(biggerNumber(150));
console.log(biggerNumber(91));
console.log(biggerNumber(100));



// Uzduotys su funkcijomis

/*1.Sukurkite funkcija, skirta patikrinkiti, ar skaicius yra teigiamas.
*/

function positiveNumber(number) {
    if (number >= 0) {
        return `${number}, yra teigiamas skaicius.`
    }
    if (number <= 0) {
        return `${number}, yra neigiamas skaicius.`
    }
}
console.log(positiveNumber(0));
console.log(positiveNumber(1));
console.log(positiveNumber(-1));
console.log(positiveNumber(-0.1));
console.log(positiveNumber(0.1));

/*2. Sukurkite funkcija skaiciaus kvadratui apskaiciuoti.
*/

function skaiciausKvadratas(skaicius9) {
    return skaicius9 * skaicius9    
}
console.log(skaiciausKvadratas(5))
console.log(skaiciausKvadratas(-5))
console.log(skaiciausKvadratas(0.5))
console.log(skaiciausKvadratas(3.12))
console.log(skaiciausKvadratas(5))

/*3. Sukurkite funkcija, kuri paima du skaicius ir isveda i console didesniji.
*/

function didesnisSkaicius (skaicius1, skaicius2) {
 if (skaicius1 > skaicius2) {
    return `${skaicius1} yra didesnis uz ${skaicius2}`
 }
 if (skaicius2 > skaicius1) {
    return `${skaicius2} yra didesnis uz ${skaicius1}`
 }
}
console.log(didesnisSkaicius(1, 5));
console.log(didesnisSkaicius(10, 5));
console.log(didesnisSkaicius(1, 5));

/*4. Sukurkite funkcija, kuri patikrintu ar skaicius yra lyginis.
*/

function lyginisSkaicius(number){
    if (number % 2 == 0  ){
        return `${number} yra lyginis skaicius`
    }
    if (number % 2)  {
        return `${number} yra nelyginis skaicius.`
    }
}
console.log(lyginisSkaicius(4));
console.log(lyginisSkaicius(5));
console.log(lyginisSkaicius(10));
console.log(lyginisSkaicius(15));
console.log(lyginisSkaicius(22));
console.log(lyginisSkaicius(465563));

console.clear();
/*5.   Sukurkite funkcija patikrintu ar eiluteje yra zodis 'JavaScript'.
*/
//v1
let sakinys ='yra "Javascript".'    

if (sakinys.includes("Javascript")) {
console.log('yra')
}
//v2
function findWord(sakinys1) {
    if (sakinys1.includes("Javascript")) {
        return 'sakinyje yra zodis "Javascript".'
    }
    else
    {
        return 'sakinyje nera zodzio "Javascript".'
    }
}
console.log(findWord('yra "Javascript".'));
console.log(findWord('yra zodis "labas".'));



/*6. Sukurkite funkciją, kuri į console išvestų priešingą reikšmę (jei skaičius teigiamas,
išvestų neigiamą, jei yra gaunamas žodis tai žodį turi parašyti atvirkčiai. Apsibrėžkite
kokio ilgio žodis turi būti gaunamas! ar 4, ar 5 ar kiek raidžių! imkite vieną
variantą kolkas)
*/


/*7. Sukurkite funkciją, kuri apskaičiuotų stačiakampio plotą.
a. Padaryti su sąrašo (array) tipo kintamuoju
b. Padaryti su keliais skaičių tipo kintamaisiais
*/

function rectangle(plotisIlgis) {

    return plotisIlgis[0] * plotisIlgis[1]
}
let rectangleIsmeai = [5, 5]
console.log(rectangle(rectangleIsmeai))


/*8.  Sukurkite funkciją, kuri tikrina, ar skaičius dalijasi iš 3.
*/

function divides3(skaicius) {
 if (skaicius % 3 == 0) {
    return 'Dalinasi is 3'
 }
 else
 {
    return 'Nedalinasi is 3'
 }
}
console.log(divides3(2));
console.log(divides3(3));
console.log(divides3(3));
console.log(divides3(5));
console.log(divides3(4));

/*9. Sukurkite funkciją, kuri tikrina, ar teksto tipo kintamasis prasideda raide 'a'.
*/

function firstLetter(start){
    if (start.startsWith('a')) {
        return `Zodis ${start} pradedasi is 'a'.`
    }
    else
    {
        return 'a nera'
    }
}
console.log(firstLetter('ananasas'));
console.log(firstLetter('bananas'));
console.log(firstLetter('gananas'));

/*10Sukurkite funkciją trijų skaičių vidurkiui rasti.
*/

function average(skaicius, skaicius1, skaicius2) {
return (skaicius + skaicius1 + skaicius2) / 3  
}
console.log(average(5, 5, 5));
console.log(average(5, 5, 8));
console.log(average(5, 15, 85));
console.log(average(5, 5, 5));
console.log(average(5, 5, 5)); 

/*11. Sukurkite funkciją, grąžinančią teksto tipo kintamojo ilgį
*/
function wordReturn(zodis) {
    return (zodis.length)
}
console.log(wordReturn('labas'));

/*12. Sukurkite funkciją dviem eilutėms sujungti.
*/
function onesentence(string1, string2) {
    return (string1 + string2)

}
console.log(onesentence('labas ' ,'rytas'));


/*13. . Sukurkite funkciją, kuri tikrina, ar skaičius yra tarp dviejų reikšmių (imtinai)
*/
 
function between(min, du, max ){
if (du > min && du < max) {
    return `skaicius ${du} yra tarp ${min} ir ${max} `
}  
else
{
    return `nera tarp ${min} ir ${max}.`
}
}
console.log(between(1, 5, 10))
console.log(between(1, 10, 10))
console.log(between(1, 15, 10))