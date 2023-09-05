/*
1. Downwards -> 1. querySelector/querySelectorAll()
                2. children

2. Upwards -> 1. parentElement         

3. Sideways -> 1. nextElementSibling, previousElementSibling
               2. parentElement + childrem + index

*/

//Downwards -> querySelector/querySelectorAll
var studentlist = document.querySelector(".student-list")
var studentA = studentlist.querySelector(".student-a").innerHTML="hi";

//Downwards -> children
var studentchildren = document.querySelector(".student-list")
var studentB = studentlist.children[1]
studentB.innerHTML="hello"

//Upwards -> parentElement
 
var studentparent = document.querySelector("li");
var parent = studentparent.parentElement;
parent.children[2].innerHTML="tata"

//Sideways -> nextElementSibling, previousElementSibling
var shop = document.querySelector(".business li")
var office = shop.nextElementSibling;
office.innerHTML="9-5"
var market = office.nextElementSibling;
market.innerHTML="10-8"

var marketagain = document.querySelectorAll(".business li")[2]
var office2 = marketagain.previousElementSibling;
office2.innerHTML="Honey Nuts"

//Sideways -> parent + children + index

var bp = document.querySelector(".asiacup li")
var asiacup = bp.parentElement;
var ps = asiacup.children[2];
ps.innerHTML="Bangladesh vs India"