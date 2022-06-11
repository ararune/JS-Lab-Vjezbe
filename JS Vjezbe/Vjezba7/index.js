/* function findMin(...someArguments) {
    return Math.min.apply(Math, someArguments);
} */
const findMin = (...args) => Math.min(...args);
console.log(findMin(1, 2, -1, 0, 4));


/* function mergeObjects(obj1, obj2){
    let merged = {...obj1, ...obj2};
    return merged;
} */

const obj1 = {
    a: 1,
    b: 2,
    c: 3
};
const obj2 = {
    d: 4,
    e: 5
}
const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 });
console.log(mergeObjects(obj1, obj2));

const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map(arg => arg * 2)];
console.log(doubleAndReturnArgs([1, 2, 3], 4, 4));

class Person {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
Person.prototype.toString = function personToString() {
    return (`${this.name}, ${this.age} godina`);
}

const marko = new Person('Marko', 26);
console.log(marko.toString());

const url = 'https://pokeapi.co/api/v2/pokemon-color/yellow';

// Defining async function
async function getApi(url) {
    
    // Storing response
    const response = await fetch(url);
    
    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);
    let pokemon = data.pokemon_species.map(element => element.name);
    console.log(pokemon);
    show(data);
}
// Calling that async function
getApi(url);

function show(data) {
    let tab = 
        `<tr>
          <th>Name</th>
         </tr>`;
    
    // Loop to access all rows 
    for (let r of data.pokemon_species) {
        tab += `<tr> 
    <td>${r.name}</td>       
</tr>`;
    }
    // Setting innerHTML as tab variable
    document.getElementById("pokemons").innerHTML = tab;
}