// var numbers = [10,20,30,40];
// for(var x=0; x<numbers.length; x++)
// {
//     console.log(numbers[x]);
// }

// var numbers = [10,20,30,40]
// numbers.forEach(myfunction)
// function myfunction(x)
// {
//     console.log(x);
// }

var numbers = [10,20,30,40]
numbers.forEach(function(x)
{
    console.log(x);
}
)

var numbers = [10,20,30,40]
var square = []
numbers.forEach(function(x)
{
    square.push(x*x);
}
)
console.log(square)

var numbers = [10,20,30,40]
numbers.forEach(function(x,index,arr)
{
    arr[index] = x+5;
}
)
console.log(numbers)