// setTimeout(()=>{

// console.log("hi");


// },5000)

// setTimeout(display,5000)

// function display(){
//     console.log("display function")
// }

//SET TIME OUT

// var save = document.querySelector(".save");
// var message = document.querySelector("p");

// save.addEventListener("click",display)

// function display(){
// message.textContent = "The item is saved ";

// setTimeout(()=>{
// message.textContent=" ";


// },5000)


// }

var save = document.querySelector(".save");
var message = document.querySelector("p");
save.addEventListener("click",accha)
 function accha(){
 var count = 1;
 message.textContent = count;
 setInterval(()=>{
    count++;
    message.textContent=count;
 },1000)
 }

