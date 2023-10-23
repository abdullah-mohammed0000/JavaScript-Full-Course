console.log("Welcome")

//how to create a promise :- pending,resolve,reject


const promise1 = new Promise((resolve,reject)=>{

    let completedpromise = true;

if(completedpromise)
{
    resolve("completed promise 1")
}
else{

    reject("Not completed 1");
}
})

const promise2 = new Promise((resolve,reject)=>{
    resolve("Completed promise 2")
})

Promise.all([promise1,promise2]).then(([res1,res2])=>{
    console.log(res1,res2);
})


const promise3 = new Promise((resolve,reject)=>{

    setTimeout(()=>{
        resolve("Completed promise 3")
    },2000)

})

const promise4 = new Promise((resolve,reject)=>{
   setTimeout(()=>{
    resolve("Completed promise 4")
   },1000)
})

Promise.race([promise3,promise4]).then((res)=>{
    console.log(res);
})

// promise2.then((res)=>{
//     console.log(res);
// })

// promise1.then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// })

console.log("End")