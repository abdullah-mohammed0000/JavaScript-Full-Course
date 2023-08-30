var names = ["Kohli","Babar","Smith","Root"];
console.log(names);
//shift = opposite of pop
names.shift();
console.log(names);

//unshift = opposite of push
names.unshift("Kohli","Liton");
console.log(names);


//splice = adding element by remove or unremove
names.splice(1,0,"Kane")
console.log(names)
names.splice(2,1,"Rizwan");
console.log(names)

//splice = removing elemwnts 
names.splice(2,1)
console.log(names)

//slice = removing elements

var batsman = names.slice(3)
console.log(batsman)
console.log(names)


//sort = sorting the strings
names.sort();
console.log(names)
names.reverse();
console.log(names)


//number sorting
var number = ["60", "50" , "52", "34","54"]
number.sort(function(a,b){
    return a-b;
}

)
console.log(number)
number.sort(function(a,b){
    return b-a;
}
)
console.log(number)





