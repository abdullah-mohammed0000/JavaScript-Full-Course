var input = document.querySelector("input")
input.addEventListener("blur",function(e){
    //console.log("Blur is occured");
     input.style.backgroundColor = "transparent";
     input.style.padding = "0";
   console.log(e.target.value);
   input.value = e.target.value.toUpperCase();



})

input.addEventListener("focus",function(){
    //console.log("Focus is occured");
    input.style.backgroundColor = "olive";
    input.style.padding = "2rem";
})

input.addEventListener("focusin",function(){
    console.log("focusin is occured");
})

input.addEventListener("focusout",function(){
    console.log("Focusout is occured");
})