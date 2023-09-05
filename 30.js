var firstone = document.createElement("h1")
var textone = document.createTextNode("First One")
firstone.appendChild(textone)
var accessone = document.getElementById("my-div")
accessone.appendChild(firstone)

var secondone= document.createElement("h1")
var texttwo=document.createTextNode("Second one")
secondone.appendChild(texttwo)
var heading0 = document.getElementsByTagName("h1")[0]
accessone.insertBefore(secondone,heading0)

var heading1 = document.getElementsByTagName("h1")[1]
accessone.removeChild(heading1)

var thirdone = document.createElement("h1")
var textthree = document.createTextNode("Replaced")
thirdone.appendChild(textthree)
var heading2= document.getElementsByTagName("h1")[2]

accessone.replaceChild(thirdone,heading2)