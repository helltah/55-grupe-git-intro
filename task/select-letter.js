function selectLetter(tekstas, intervalas){
    if(typeof tekstas !== 'string'){
        return 'Pirmasis kintamasis yra netinkamo tipo'
    }//1
    if (tekstas.length === 0 || tekstas.length > 100  )
        return 'Pirmojo kintamojo reiksmes yra netinkamo dydzio.'
    //2
    if (typeof intervalas !== 'number' || intervalas % 1 !== 0) {
        return 'Antrasis kintamasis yra netinkamo tipo.'
    }//3
    
    if (intervalas <= 0) {
        return 'Antrasis kintamasis turi buti didesnis uz nuli.'
    }//4 

    if (intervalas > tekstas.length ) {
        return 'Antrasis kintamasis turi buti ne didesnis uz pateikto teksto ilgi.'
    }    //5
   let result = '';
   for (let i = 0; i < tekstas.length; i += intervalas) {
    result += tekstas[i];
   }

   return result;
}
 
console.log(selectLetter('abcdefg', 1));
console.log(selectLetter('asfkjhafbibafifai',3));
console.log(selectLetter('abc',0));
console.log(selectLetter('abc',4));
console.log(selectLetter(64846,2));

(a % b)
console.log(100, 5);