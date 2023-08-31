
var count =0;
var pound=0;


for(var i=1;i<=5;i++){
    var num = parseInt(prompt("Enter any number"));
var random = Math.floor((Math.random()*4)+1);

if(random === num)
{ 
    
    console.log("You guess it right");
    count++;
}
else{
    console.log("Your guess is wrong");
    pound++;
}

}
document.write("You guess right: "+count+"<br>")
document.write("You guess it wrong: "+pound+"<br>")