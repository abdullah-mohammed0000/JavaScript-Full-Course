import {text,setText} from './68.module.js'
console.log(text)
setText("GoodBye from ES6");
console.log(text)

import { message } from './68.module.js';
console.log(message)

import {text3 as message2 } from './68.module.js';
console.log(message2)

//Class and Object

class student{
    constructor(id,name){
        this.id =id;
        this.name = name;
    }

    set studentname(name)
    {
        this.name = name;
    }

    get studentInfo()
    { 
        return this.id + " " + this.name

    }
}

let s1 = new student (101,'Anis')
console.log(s1)
console.log(s1.id)
console.log(s1.name)
s1.studentname = 'lalala'
console.log(s1.name);
console.log(s1.studentInfo)