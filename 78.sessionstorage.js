//localStorage vs sessionStorage
//10mb vs 5mb
//permanent vs session (tab)

sessionStorage.setItem("user","Abdullah Mohammed");

//getItem
const userName1 = sessionStorage.getItem("user")
console.log(userName1)

//remove

sessionStorage.removeItem("user")

sessionStorage.setItem("user1","Tamim Iqbal")
sessionStorage.setItem("user2","Shakib AL Hasan")

//clear
sessionStorage.clear();

//string
const user = {id: "101", name:"papon"};
sessionStorage.setItem("user",JSON.stringify(user));

const userInfo = JSON.parse(sessionStorage.getItem("user"));
console.log(userInfo)
