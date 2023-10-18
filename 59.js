function studentinfo(name,age){
return{
    name,
    age
}

}

console.log(studentinfo("Abdullah Mohammed",29))

let message ={

    body:function(){
        
       return `Hi, I am object function`
        
    }
}
console.log(message.body())


let message1 ={

    body1(){
        
       return `Hi, I am object1 function`
        
    }
}
console.log(message1.body1())


let message2 ={

    'body name'(){
        
       return `Hi, I am object2 function`
        
    }
}
console.log(message2['body name']())