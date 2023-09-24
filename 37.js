for(var i=0;i<=3;i++)
{
var sound = document.querySelectorAll(".mybutton")[i];
sound.addEventListener("click",function(){
var text = this.innerHTML;
audioplay(text);
animation(text)

})
}

function audioplay(text){
    switch(text){

        case "a":
        var audio = new Audio("a.mp3")
        audio.play();
        setTimeout(function(){
            audio.pause();
        },2000)
        break;
        
        case "b":
        var audio = new Audio("b.mp3")
        audio.play();
        setTimeout(function(){
            audio.pause();
        },2000)
        break;
        
        case "c":
        var audio = new Audio("c.mp3")
        audio.play();
        setTimeout(function(){
            audio.pause();
        },16000)
        break;
        }
}

function animation(text){
var selectbutton = document.querySelector("."+text)
selectbutton.classList.add("anim");

setTimeout(function(){
selectbutton.classList.remove("anim")

},2000)


}







