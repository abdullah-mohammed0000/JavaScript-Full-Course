

//document.addEventListener("keypress",function(event){

    //var text = event.key;
   //document.querySelector("p").innerHTML="You have pressed"+text;
    
    //})

var count =0;
    document.querySelector("textarea").addEventListener("keypress",function(event){
count++;
      
       document.querySelector("p").innerHTML="You have pressed "+count;
        
 })

