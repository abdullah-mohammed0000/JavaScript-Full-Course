var numbers = [10,20,30,40]
var square = numbers.map(function(x)
{
    return(x*x);
}
)
console.log(square)

var numbers = [10,20,30,40]
var square1 = numbers.filter(function(x)
{
    
    return x>10
}
)
console.log(square1)
console.log(numbers)