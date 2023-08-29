var num1,mum2;
num1= Number(prompt("Enter first number: "))
num2= Number(prompt("Enter second number: "))
Addition(num1,num2)
Subtraction(num1,num2)
Divide(num1,num2)

var result = Multiplication(num1,num2)
document.write("multiplication = "+result+"<br>")



function Addition(num1,num2)
{
    var result = num1 + num2;
    document.write("Addition = "+result+"<br>")
}

function Subtraction(num1,num2)
{
    var result = num1 - num2;
    document.write("Subtraction = "+result+"<br>")
}

function Divide(num1,num2)
{
    var result = num1 / num2;
    document.write("Divide = "+result+"<br>")
}

function Multiplication(num1,num2)
{
    var result = num1 * num2;
   return result;
}


