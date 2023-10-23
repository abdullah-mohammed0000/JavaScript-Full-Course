function square(x){
    console.log(`square of ${x}: ${x*x}`);
}

//square(6);

//const y = square;
//y(5);

function higherorderfunction(num,callback)
{
    callback(num);
}

higherorderfunction(8,square)


const task1 = (callback) => {

    console.log("Task One");
    callback();

}
 
// const dataloading = () => {
//     console.log("Task Two.Data Loading...")
// }

const task2 = (callback) => {

   setTimeout(() => {
    console.log("Task Two.Data Loading...");
    callback()
},1000);

}

const task3 = (callback) => {

    console.log("Task Three");
    callback();

}

const task4 = (callback) => {

    console.log("Task Four");
    callback();

}

const task5 = () => {

    console.log("Task Five");

}

task1(function f1(){
    task2(function f2(){
        task3(() => { 
            task4(() => {
                task5();
            });
        });
    });
})
