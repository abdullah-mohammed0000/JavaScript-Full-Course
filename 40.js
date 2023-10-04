var form = document.querySelector("form")
var name = form.querySelector("div #name")
var email = form.querySelector("div #email")
var password = form.querySelector("div #password")

form.addEventListener("submit",formhandle)

function formhandle(e){
    e.preventDefault();
//console.log("submit");
//console.log(name.value);
//console.log(email.value);
//console.log(password.value)
var userInfo = {
name:name.value,
email:email.value,
password:password.value,

};

console.log(userInfo)

}