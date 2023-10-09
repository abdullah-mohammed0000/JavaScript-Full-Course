var textarea = document.querySelector("textarea")
textarea.addEventListener("keydown",function(e){

//console.log("Keydown")
if(e.repeat)
{
    alert("do not press the key repeatiedly")
}

})

// textarea.addEventListener("keypress",function(){

//     console.log("Keypress")
    
    
//     })


    // textarea.addEventListener("keyup",function(e){

    //     //console.log("Keyup")
    //     //console.log(e.shiftKey)
    //    // console.log(e.key)
    //     if(e.shiftKey)
    //     {
    //           console.log("shift+"+e.key);
    //     }
        
    //     })