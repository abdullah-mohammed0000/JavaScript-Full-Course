
console.clear()

var mouse = document.querySelector("div")
mouse.addEventListener("click",function(e){

//console.log("click is occured");
// console.log(e.target);
// console.log(e.target.id)
// console.log(e.target.className)
// console.log(e.target.innerHTML)
// console.log(e.target.innerText)
// console.log(e.target.textContent)


})

// mouse.addEventListener("dblclick",function(){

//     console.log("dblclick is occured");
    
// })

// mouse.addEventListener("mousedown",function(){

//     console.log("mousedown is occured");
    
// })

// mouse.addEventListener("mouseup",function(){

//     console.log("mouseup is occured");
    
// })

// mouse.addEventListener("mouseenter",function(){

//     console.log("mouseenter is occured");
    
// })


// mouse.addEventListener("mouseleave",function(){

//     console.log("mouseleave is occured");
    
// })

// mouse.addEventListener("mouseover",function(){

//     console.log("mouseover is occured");
    
// })

// mouse.addEventListener("mousemove",function(e){

//     //console.log("mousemove is occured");
// //console.log("clientX"+e.clientX+", clientY"+e.clientY)
// console.log("offetX"+e.offsetX+", offsetY"+e.offsetY)

// })


var button = document.querySelectorAll(".btn")
console.log(button)
Array.from(button).map((kemondilam)=>{
kemondilam.addEventListener("click",function(e){

    console.log(e.log.innerText)


})


})
