var animals = [
    {name: 'Fluffy' , species: 'rabbit' },
    {name: 'Caro', species: 'dog' },
    {name: 'Ham', species: 'dog' },
    {name: 'Haro', species: 'fish' },
    {name: 'Ursa', species: 'cat' },
    {name: 'Jim', species: 'fish' }
];

/*
var names = animals.map(function(animal){
    return animal.name;
})
*/

// OR 

var names = animals.map(x => x.name); // input > 1 then a bracket is needed

/* 
1. Still takes CB function and each item in array is still passed in CB function
2. map expects a transformed object which it puts into a new array

// NON-FUNCTIONAL METHDO
/*
let names = [];
for (let i = 0; i < animals.length; i++){
    names.push(animals[i].name);
}
*/

console.log(names);
