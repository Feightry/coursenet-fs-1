/** Looping */

/** 1. Faktor merupakan deretan angka yang membentuk suatu angka tertentu.
Contoh: Faktor dari 10 adalah angka 1, 2, 5 dan 10.
Ciri-ciri faktor adalah angka tersebut habis membagi.
var number = 10;
// Results
// 1,2,5,10
Buat sebuah program untuk menghasilkan faktor dari sebuah angka.*/

let number = 10;
let i = 1;
let result = "";

while (i <= 10) 
{
    if (10 % i === 0)
    {
        if (i != 10)
        {
            result = result.concat(i,",");
        }
        else
        {
            result = result.concat(i);
        }
    }
    i++;
}

console.log(result);

console.log("--------------------------");
/** 2. Print segitiga
var n = 5;
// Result
/*
#
#X
#X#
#X#X
#X#X#
*/  

let n = 1;
let result2 = "";

while (n <= 5)
{
    if (n % 2 === 0)
    {
        result2 = result2.concat("X");
        console.log(result2);
    }
    else
    {
        result2 = result2.concat("#");
        console.log(result2);
    }
    n++;
}

console.log("--------------------------");
/** 3. Print sebuah kotak
var input = 5;
// Result
/*
#####
#   #
#   #
#   #
#####
*/

let x = 1;
let bar5 = "#####";
let bar2 = "#   #";

while (x <= 5)
{
    if (x === 1 || x === 5)
    {
        console.log(bar5);
    }
    else
    {
        console.log(bar2);
    }
    x++;
}

