localStorage.setItem("userName", "Abdullah Mohammed");
localStorage.setItem("password","01975842777");


//getItem
const userName = localStorage.getItem("userName")
const userPassword = localStorage.getItem("password")
console.log(userName,userPassword);

//update

localStorage.setItem("userName","Shakib Al Hasan");
localStorage.setItem("password","0123456789");

//removeItem(key)
localStorage.removeItem("userName")
localStorage.removeItem("password");

//setItem(key,value)

const countires = ["Australia","Bangladesh","Nepal"];
localStorage.setItem("countries",JSON.stringify(countires));

//getItem(key)
const countiresList = JSON.parse(localStorage.getItem("countries"));
console.log(countiresList);

//clearing everything
localStorage.clear();