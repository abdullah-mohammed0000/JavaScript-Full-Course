//let variable will work only on limited scope
var x = 10;
if(true){

    let x = 11;
    console.log(x); //x=11
}
console.log(x); //x=10

let a = 200;
let b =300;
let sum = a+b;
console.log(`the sum is ${sum}. The end.`);

let name = "Anisul Islam";
let message = `The name of my best teacher is ${name}.`;
console.log(message);

//if you declare by using const you will unable change the value

const c =100;
console.log(c);
//var c = 200; it showing error
console.log(c);

//Function in ES6

const add =  (x,y) => {

    let sum = x+y;
    console.log(sum);
}

add(20000,30000);