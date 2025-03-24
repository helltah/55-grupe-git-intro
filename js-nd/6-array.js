/*Susikurkite bent 6 sąrašo (array) tipo kintamuosius, kurių pirmas narys yra mokinio vardas, o toliau yra 5 skaičiaus tipo mokinio pažymiai
Sukurkite funkciją, kuri padaro šiuos veiksmus:

Į console išveda mokinio vardą

Į console išveda mokinio pažymių vidurkį ir praneša ar mokinys išlaikė ar neišlaikė kurso

Jei mokinys neišlaiko kurso, parašykite ar mokinys, gavęs vieną gerą įvertį, galėtų pasitaisyti savo vidurkį.*/


const student1 = ['Petras', 10, 8, 3, 2, 4];
const student2 = ['Maryte', 4, 6, 4, 2 , 4];
const student3 = ['Povilas', 9, 9, 2, 5, 6];
const student4 = ['Dovydas', 4, 5, 3, 10, 2];
const student5 = ['Mantas', 7, 3, 8, 4, 6];
const student6 = ['Ona', 10, 6, 3, 2, 5];

function MokinioVidrukis (mok)
{
    let vidurkis = ((mok[1]) + (mok[2]) + (mok[3])+ (mok[4]) + (mok[5]))/5; 
    if (vidurkis >=3.5)
    {
        console.log(mok[0] + " Islaike, jo vidurkis:" + vidurkis);    

   
    }
else
    {
    let NaujasVidurkis = ((vidurkis*5)+10/6);
    console.log(mok[0], "neislaike. Jo dabartinis vidurkis:" + vidurkis);
    if(NaujasVidurkis >= 3.5)
   {
    console.log(mok[0] + "islaikytu kursa jei gauti viena desimtuka");
    }
   
    }

    
}
MokinioVidrukis(student1)
MokinioVidrukis(student2)
MokinioVidrukis(student3)
MokinioVidrukis(student4)
MokinioVidrukis(student5)
MokinioVidrukis(student6)