

function Student(name,age,cgpa,lang){
this.name =  name
this.age = age
this.cgpa = cgpa
this.lang = lang

this.display = function(){

    console.log(this.name);
    console.log(this.age)
    console.log(this.cgpa)
    console.log(this.lang)
}
}


var student1 = new Student("Abdullah",23,3.82,["English","Bangla"])
var student2 = new Student("safrul",21,3.55,["Arabic","English"])

student1.display();
student2.display();