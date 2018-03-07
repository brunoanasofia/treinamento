//begin - destructuring assignment
makeSound({
    weight: 23,
    sound: 'woof'
})

function makeSound({species = 'Dog', sound}){
    console.log('The ' + species + ' says ' + sound + '!');
}
//end - destructuring assignment

//begin - spread operator
//example 1
function addNumbers(a,b,c,d){
    console.log(a+b+c+d);    
}

var nums = [10,15,20,1];
addNumbers(...nums);

//example 2
var meats = ['bacon','ham'];
var food = ['apple', ...meats, 'kiwi','rice'];
console.log(food);
//end - spread operator

//begin - arrow functions and higer-order functions
//functions are value
var nums2 = [3,2,8,1,10];
let soma = (a,b,c,d,e) => {    
    return(a+b+c+d+e)
}
console.log(soma(...nums2));
//end - arrow functions and higer-order functions

//begin - filter
var animals = [
    { name: 'Laika', species: 'dog'},
    { name: 'Pink', species: 'dog'},
    { name: 'Lex', species: 'dog'},
    { name: 'Lois', species: 'dog'},
    { name: 'Piu', species: 'parrot'},
    { name: 'Primo', species: 'parrot'},
    { name: 'Bilila', species: 'tortoise'}
]

var dogs = animals.filter((animal) => animal.species === 'tortoise')
console.log(dogs);
//end - filter

//begin - reduce
var orders = [
    { amount: 250 },
    { amount: 400 },
    { amount: 100 },
    { amount: 325 }
]

var totalAmount = orders.reduce((sum, order) => sum + order.amount,0)
console.log(totalAmount);
//end - reduce

//begin - map
var orders = [
    { amount: 250 },
    { amount: 400 },
    { amount: 100 },
    { amount: 325 }
]

var totalAmount = orders.map(function (order){
    return order.amount * 2;
})
console.log(totalAmount);
//end - map


