var myvar = document.querySelector(".para1")
function add1(){
    myvar.style.color = "red"
    myvar.style.fontSize = "3rem"
    myvar.style.fontStyle = "italic"
    myvar.style.fontWeight = "bold"
}
function remove1(){
    myvar.classList.remove("para1style");
}


var myvar1 = document.querySelector(".para2")
function add2(){
   myvar1.classList.add("para1style")
}
function remove2(){
    myvar1.classList.remove("para1style");
}
