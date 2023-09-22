var i;
for(i=0;i<3;i++)
{
var play = document.querySelectorAll(".mybutton")[i];
var pause= document.querySelectorAll(".mybutton")[i];
play.addEventListener("click",listen)
function listen(){
    var text = this.innerHTML;
    if(text=='A')
    {
    let audio = new Audio("a.mp3");
    audio.play();
    }
   else if(text=='B')
    {
    let audio = new Audio("b.mp3");
    audio.play();
    }
    else
        {
            let audio = new Audio("b.mp3");
            audio.play();
            }

}
}
