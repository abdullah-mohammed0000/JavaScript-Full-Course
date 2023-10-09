const input = document.querySelector("input")
const p = document.querySelector("p")
input.addEventListener("copy",function(){
   // console.log("Copied");
   p.innerText = "You have copied";
})
input.addEventListener("cut",function(){
    //console.log("Cut");
    p.innerText = "You have cut";
})
input.addEventListener("paste",function(){

    //console.log("Paste");
    p.innerText = "You have paste";
})