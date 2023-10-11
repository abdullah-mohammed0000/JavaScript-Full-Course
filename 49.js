//Confirm Boxes

// function deletesomething(){
// var value = confirm("Do you want to delete?");
// if(value){
//     console.log("Item is deleted");
// }

// else{
//     console.log("Item is not deleted");
// }



// }

//  deletesomething();


//PROMPT

function input(){
    var h1 = document.createElement("h1");
    var text;
var name = prompt("What is your name?");
if(name==null || name=='')
{
   text = "No name found";
}
else{
    text="welcome"+name;
}
 var textNode = document.createTextNode(text);
 h1.appendChild(textNode);
 document.body.appendChild(h1)


}


input();