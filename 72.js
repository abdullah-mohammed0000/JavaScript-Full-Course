const task1 = () => {
return new Promise((resolve,reject) => {

    resolve("task1 is completed")
    
})};

const task2 = () => {
    return new Promise((resolve,reject) => {
    
       setTimeout(() => {
        resolve("task2 is is completed");
       },2000)
        
    })};

const task3 = () => {
        return new Promise((resolve,reject) => {
        
            resolve("task3 is completed")
            
        })};    

const task4 = () => {
            return new Promise((resolve,reject) => {
            
                reject("task4 is not completed")
                
            })};        

            const task5 = () => {
                return new Promise((resolve,reject) => {
                resolve("task5 is  completed")
                    
                })};            


task1()
.then((res)=>console.log(res))
.then(task2)
.then((res)=>console.log(res)) 
.then(task3)
.then((res)=> console.log(res))
.then(task4)
.then((res)=>console.log(res))
.then(task5)
.then((res) => console.log(res))   
.catch((err) => console.log(err));