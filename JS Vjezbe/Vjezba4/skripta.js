//Zad 1
function printSomove(min, max) {
    let temp = min;
    setTimeout(function ispisi() {
        console.log(temp);
        if (temp < max) {
            setTimeout(ispisi, 1000);
        }
        if (temp >= max && temp < 1500) {
            setTimeout(ispisi, 2000);
        }
        temp += 100;
    }, 2000);
}
printSomove(500,1000)

// Zad 2
function curry(curryFunction){
    let temp = 1;
    return function innerFunction(x){
        if(!x)
            return temp;
        else if(x > 0 && x < 20)
            temp = curryFunction(temp, x);  

        return innerFunction;
    } 
}
const multiply = curry((a, b) => a * b);
console.log(multiply(1)(-2)(3)(-4)(5)(-5)(10)(-8)()); 

//Zad 3
const randomIntArrayInRange = (min, max, n = 10) =>
  Array.from(
    { length: n },
    () => Math.round(Math.random() * (max - min + 1)) + min
  );

let niz = randomIntArrayInRange(50, 150);
console.log(niz);
let min = Math.min.apply(null, niz),
    max = Math.max.apply(null, niz);
console.log("Max je : ", max);
console.log("min je : ", min);
console.log("Index max elementa je : ", niz.indexOf(max));
console.log("Index min elementa je : ", niz.indexOf(min));