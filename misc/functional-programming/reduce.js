//Map, filter, reject, and find (returns first item) all tansform a list into something else

//REDUCE is not specific to a certian type of list transformation


//BASICS
var orders = [
    { amount: 250},
    { amount: 400},
    { amount: 100},
    { amount: 325},
];

//FUNCTIONAL Method to find total amount

/*  1. The first input inside the function (inside reduce) is the "end goal"
    2. The second input inside the function (inside reduce) is "thing" we are iterr
    2. Reduce takes an additional argument after the function as a "st arting point"

var totalAmount = orders.reduce(function(sum, order){
    // console.log("hello", sum, order);
    return sum + order.amount
}, 0);

*/

//OR

var totalAmount = orders.reduce((sum, order) => sum + order.amount, 0);



//NON-FUNCTIONAL to find total amount

/*
let totalAmount = 0;
for(let i = 0; i < orders.length; i++){
    totalAmount += orders[i].amount;
}
*/
console.log(totalAmount);


