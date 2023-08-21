var num = 12;
num = toString(num)
console.log(typeof(num));
var num = "12";
num = parseInt(num);
console.log(typeof(num));
var num = "12.5";
num = parseFloat(num);
console.log(typeof(num));
var num = 2.4535;
console.log(num.toFixed());
var num = 2.4535;
console.log(num.toFixed(4));
var num = 2.4535;
console.log(num.toPrecision(1));
var num = 2.4535;
console.log(num.toPrecision(4));

console.log(Number("12"));
console.log(typeof(Number("12")));

console.log(Number("12.5"));
console.log(typeof(Number("12.5")));
console.log(Number(false));
console.log(typeof(false));