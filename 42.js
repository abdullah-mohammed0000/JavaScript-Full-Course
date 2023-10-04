window.addEventListener("load",function(){
    console.log("Load")
})

window.addEventListener("unload",function(){
    console.log("Unload")
})

window.addEventListener("scroll",function(){
    console.log("scroll")
})

window.addEventListener("resize",function(){
var width = window.outerWidth;
var height = window.outerHeight;
console.log(`height:${height},width:${width}`)
})

window.addEventListener("toggle",function(){
    console.log("Unload")
})

var details = document.querySelector("details")
details.addEventListener("toggle",function(e){
    console.log(e.target.open)
})