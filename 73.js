const task1 = () => {
    return new Promise((resolve,reject) => {
    
        resolve("task1 is completed")
        
    })};
    
    const task2 = () => {
        return new Promise((resolve,reject) => {
        
           setTimeout(() => {
            resolve("task2 is completed");
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
    
    
    // task1()
    // .then((res)=>console.log(res))
    // .then(task2)
    // .then((res)=>console.log(res)) 
    // .then(task3)
    // .then((res)=> console.log(res))
    // .then(task4)
    // .then((res)=>console.log(res))
    // .then(task5)
    // .then((res) => console.log(res))   
    // .catch((err) => console.log(err));

    // async function callAllTasks(){
    //     const t1 = await task1();
    //     console.log(t1);
    //     const t2 = await task2();
    //     console.log(t2);
    // }
    // callAllTasks();

   

    const callAllTasks = async() =>{
       try{

        const t1 = await task1();
        console.log(t1);
        const t2 = await task2();
        console.log(t2);
        const t3 = await task3();
        console.log(t3);
        const t4 = await task4();
        console.log(t4);
        const t5 = await task5();
        console.log(t5);



       }catch(e){
        console.log(e)
       }
    }























    callAllTasks();