var link = document.getElementsByTagName("a")[0];
link.innerHTML= "Study with Anis"
link.style.textDecoration="none"
link.style.color="green"
link.style.fontSize="2rem"
link.href="https://www.goal.com"

//creating HTML elements at the top
var common = document.getElementById("my-div");
var heading0 = document.getElementsByTagName("h1")[0]
var heading2 = document.createElement("h1")[2]
var heading1 = document.getElementsByTagName("h1")[1]


var creating = document.createElement("h1")
var text1 = document.createTextNode("Creating")
creating.appendChild(text1);
common.appendChild(creating);

var creating2 = document.createElement("h1")
var text2 = document.createTextNode("toping")
creating2.appendChild(text2)
common.insertBefore(creating2,heading0)


common.removeChild(heading0);

var replace = document.createElement("h1");
var text3 = document.createTextNode("Tata")
replace.appendChild(text3)
common.replaceChild(replace,heading1)

