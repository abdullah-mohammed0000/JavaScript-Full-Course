//var input = document.querySelector("input[name=event1]");
//input.addEventListener("change",changeHandler)

//function changeHandler(e){
    //console.log(e)
    //console.log(e.type)
    //console.log(e.target)
    //console.log(e.target.className)
    //console.log(e.target.id)

//}

//var checkbox = document.querySelectorAll("input[name=program]")
//Array.from(checkbox).map((program)=> {
  //  program.addEventListener("change",hmm)
//})

//function hmm(e){
//if(e.target.checked){
    //console.log("checked");
  //  console.log(e.target.value)
//}

//}
var dept  = document.querySelector("#department");
dept.addEventListener("change",hello)
function hello(e){
//console.log("selected")

console.log(e.target.value)
}
