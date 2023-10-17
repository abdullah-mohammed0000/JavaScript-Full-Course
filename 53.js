var button = document.querySelector("#amibutton")
button.addEventListener("click",function(){
var num = document.querySelector("#amitext").value
try{

if(num<5)
{
    throw "Enter higher value"
}
else if(num>10)
{
throw "Enter lower value"
}

}catch(err)

{
   console.log(err)

}









})
