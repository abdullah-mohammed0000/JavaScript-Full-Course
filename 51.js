var save = document.querySelector(".save")
var message = document.querySelector("p")

save.addEventListener("click",startClock)

function startClock(){
var date = new Date();
var hours = date.getHours();
var minutes = date.getMinutes();
var seconds = date.getSeconds();

minutes = format(minutes)
seconds = format(seconds)

var time = hours + ":" + minutes + ":" + seconds  


message.textContent = time;

setInterval(startClock,1000)

}

function format(value){
    if(value<10){
        value = "0"+value;
    }
    return value;
}