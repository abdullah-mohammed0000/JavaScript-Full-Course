var photos = ["32.imges/alexander-shatov-9Zjd7PE_FRM-unsplash.jpg","32.imges/alexander-shatov-CTZhGbSxWLI-unsplash.jpg","32.imges/alexander-shatov-I4p0FcjDBJI-unsplash.jpg"]
var imgtag = document.querySelector("img")
var count=0;
function next(){
count++;
if(count>=photos.length)
{
    count=0;
    imgtag.src=photos[count];
}
else{
    imgtag.src=photos[count];
}


}

function previous(){
count--
if(count<0){
    count=photos.length-1;
    imgtag.src=photos[count];
}

else
{
    imgtag.src=photos[count];
}



}