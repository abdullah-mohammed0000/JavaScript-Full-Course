function addNumbers(x,y,z)
{
  return x+y+z;

}

let numbers = [1,2,3];

console.log(addNumbers(numbers[0],numbers[1],numbers[2]))

function add2Numbers(x,y,z)
{
  return x+y+z;

}

let numbers2 = [5,2,3];

console.log(add2Numbers(...numbers2))



let numbers3 = [6,...numbers2,3];

console.log(numbers3)

let numbers4 = numbers2.concat(numbers3);
console.log(numbers4)

let numbers5 = [...numbers2,...numbers3];
console.log(numbers5)

let p1 = {

    Name : "Abdullah Mohammed" ,  Age : 30
}

let p2 = {
    Occupation : "Developer", 
    Nationality : "Bangladesh"
}

let p = {...p1,...p2}
console.log(p);