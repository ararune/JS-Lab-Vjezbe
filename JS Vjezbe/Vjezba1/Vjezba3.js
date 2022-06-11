let input = prompt("Enter a number ");

// 1 Zadatak
if (input === null || typeof input === 'undefined') 
    console.log("Your input is null or undefined");
else if (input == 0) 
    console.log("Input is 0");
else if (input % 2 == 0) 
    console.log("Input is an even number");
else
    console.log("Input is an odd number");

input = (input === null || typeof input === 'undefined')  ? console.log("Your input is null or undefined")
      : (input == 0)      ? console.log("Number is 0") 
      : (input % 2 == 0)  ? console.log("Even number") 
      :                     console.log("Odd number");
      
// 2 Zadatak
let season = prompt("Enter a season");
switch (season) {
    case "winter":
        console.log("December, January, February");
        break;
    case "spring":
        console.log("March, April, May");
        break;
    case "summer":
        console.log("June, July, August");
        break;
    case "fall":
        console.log("September, Octoper, November");
        break;
    default:
        console.log("Not a valid season");
}
// 3 Zadatak
let num = 155;
while (num > 105) {
    if (num % 10 == 0) 
        console.log(num);

    num-=5;
}
// 4 Zadatak
let sum = 0;
for (let i = 50; i <= 100; sum+=i, i++);
console.log("The sum ", sum);