//functions can assigned to varibles
var triple = function(x) {
    return x*3;
}
// or
var triple2 = x => x*3;


var animals = [
    {name: 'Fluffy' , species: 'rabbit' },
    {name: 'Caro', species: 'dog' },
    {name: 'Ham', species: 'dog' },
    {name: 'Haro', species: 'fish' },
    {name: 'Ursa', species: 'cat' },
    {name: 'Jim', species: 'fish' }
]

//FUNCIONAL METHOD
/*

var dogs = animals.filter(function(animal){
    return animal.species === 'dog';
}) 
*/

// OR

// var dogs = animals.filter(animal => animal.species === 'dog');

/*
1. fitler function accepts 1 argument - another function (call back function)
2. filter then loops through each item in array and passes into the CB function
3. CB function returns true of flase --> filter then knows to include or disclude
*/
//with functins you can decouple the functions for ex.

// OR 

var isDog = (animal => animal.species === 'dogs');

var dogs = animals.filter(isDog); //array of dogs



//NON FUNCTIONAL METHOD TO FILTER DOGS
/*
var dogs = []
for(var i = 0; i < animals.length; i++) {
    if (animals[i].species === 'dog') {
        dogs.push(animals[i]);
    }       
}
*/

// console.log(dogs);

console.log(dogs);

