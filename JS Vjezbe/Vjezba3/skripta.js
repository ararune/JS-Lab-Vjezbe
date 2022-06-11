/* function isEven(y)
{
    return(y % 2 == 0);
}

function stvoriBrojac() 
{
    let i = 0;
    return function() {return i++;};
}

function zbroj() 
{
    let sum = 0;
    return function(a) {return sum += a;};
} */

let stvoriBrojac = () => {
         let i = 0;
         return () => i++;
        }
let zbroj = () => {
        let sum = 0;
        return (a) => sum+= a;
    }
let isEven = (y) => {
    return (y % 2 == 0)
}
function myFunction()
{
    let input;
    let counter = stvoriBrojac();
    let sum = zbroj();
    /* let counter = stvoriBrojac();
    let sum = zbroj(); */
    /*     let i = 0;
    let sum = 0;
    */
    /* let sumEven; */
    do {
    input = Number(prompt("Unesi 0 : "));

    if(isEven(input)){
        sum(input);
    }
    else{
        counter();
    }

    } while (input != 0 && input);
    
    console.log("Zbroj svih parnih brojeva je: ",sum(input));
    console.log("Ukupan broj svih neparnih brojeva je: ", counter());
}
myFunction();

function rezultat(nazivKolegija){
    return function(ostvareniBodovi){
        return function(ukupniBodovi){
            return ("Iz kolegija " + nazivKolegija + " ostvarili ste " + ((ostvareniBodovi / ukupniBodovi) * 100).toFixed(2) + "%");
        }
    }
}
console.log(rezultat("MUP/PWKS")(25)(35));

let arrowRezultat = nazivKolegija => ostvareniBodovi => ukupniBodovi => {
    return ("Iz kolegija " + nazivKolegija + " ostvarili ste " + ((ostvareniBodovi / ukupniBodovi) * 100).toFixed(2) + "%");
}
console.log(arrowRezultat("AOR")(10)(35));


