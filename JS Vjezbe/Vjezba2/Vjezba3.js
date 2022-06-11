function firstLastArgumentSum(){
    let suma = 0;
    suma = arguments[0] + arguments[arguments.length - 1];
    return suma;
}
firstLastArgumentSum(1, 2, 3);

function isPositive(x){
    return(x >= 0);
}
(isPositive(7)) ? console.log("It's positive") : console.log("It's negative");

function isDivisible(x, y){
    return(x != 0 && x % y == 0);
}
(isDivisible(9, 2)) ? console.log("It's divisible") : console.log("It's not divisible");

function fja(niz, isPositive, isDivisible, brojDj)
{    
    for(let i = 0; i < niz.length; i++)
    {
        if(isPositive(niz[i]) && isDivisible(niz[i], brojDj))
        {
            console.log("Broj " + niz[i] + " je pozitivan i djeljiv s brojem " + brojDj);
        }        
    }
}
let niz = [0, 1, 2, 3, -1, -2, -3, 4, -4, 5, -5];
let brojDj = 3;
fja(niz, isPositive, isDivisible, brojDj);

function input(){
    return Number(prompt('Aj pliz unesi broj: '));
}
function sumTwoNum(x, y)
{
    return (x + y);
}
function sumTotal(input, n, sumTwoNum)
{
    let sum = 0;
    let i = 0;
    while(i < n)
    {
        sum = sumTwoNum(input(), sum);
        i++;
    }
    return sum;
}
let n = 3;
let sumTotal = sumTotal(input, n, sumTwoNum);
console.log("Suma svih unosa : ", sumTotal);

    

