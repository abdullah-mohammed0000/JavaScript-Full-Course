console.clear();
console.log(window)
const makeRequest = (url,method)=>{
    const result = $.ajax({
    url:url,
    method:method,

    });
    console.log(result);
};

const getData = () =>{
    makeRequest("https://jsonplaceholder.typicode.com/posts/1","GET")
}
getData();

const makeRequest1 = async (url,method)=>{
   try{

    const result = await $.ajax({
        url:url,
        method:method,
    
        });
        return result;

   }catch(err){
    console.log(err);
   }
};

const get1Data = () =>{
    makeRequest1("https://jsonplaceholder.typicode.com/posts/1","GET")
    .then((res)=>console.log(res))
}
get1Data();

/*---------------------*/

const makeRequest2 = async (url,method,data)=>{
    try{
 
     const result = await $.ajax({
         url:url,
         method:method,
         data:data
     
         });
         return result;
 
    }catch(err){
     console.log(err);
    }
 };
 
 const createData = () =>{
     makeRequest2("https://jsonplaceholder.typicode.com/posts","POST", {
        title: 'foo',
        body: 'bar',
        userId: 1,
      }).then((res)=>console.log(res));
         

     }
    
     
 
 createData();

 /*------------------*/
 const makeRequest3 = async (url,method,data)=>{
    try{
 
     const result = await $.ajax({
         url:url,
         method:method,
         data:data
     
         });
         return result;
 
    }catch(err){
     console.log(err);
    }
 };
 
 const updateData = () =>{
     makeRequest3("https://jsonplaceholder.typicode.com/posts/1","PUT", {
        title: 'foona',
        body: 'barna',
        userId: 1,
      }).then((res)=>console.log(res));
         

     }
    
     
 
 updateData();


 /*----------------*/

 const makeRequest4 = async (url,method,data)=>{
    try{
 
     const result = await $.ajax({
         url:url,
         method:method,
         data:data
     
         });
         return result;
 
    }catch(err){
     console.log(err);
    }
 };
 
 const deleteData = () =>{
     makeRequest4("https://jsonplaceholder.typicode.com/posts/1","DELETE", {
        title: 'foona',
        body: 'barna',
        userId: 1,
      }).then((res)=>console.log(res));
         

     }
    
     
 
 deleteData();
