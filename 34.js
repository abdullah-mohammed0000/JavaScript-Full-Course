document.querySelector("h1").addEventListener("click",listen)

function listen(){
   alert("Number 7 ODI Team");
}

var hmm = document.querySelector("h2")
hmm.addEventListener("mouseover",function(){
   hmm.classList.add("myset");
})


hmm.addEventListener("mouseout",function(){
    hmm.classList.remove("myset")
})

var button = document.querySelector("button")
button.addEventListener("click",function(){
    alert("Number One");
})