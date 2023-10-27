// console.clear();
// fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//       },
//     body: JSON.stringify({
//       title: 'foo',
//       body: 'bar',
//       userId: 1,
//     }),
//       })
  
// .then((res)=> {
    
// if(!res.ok){
//     const message = `Error: ${res.status}`;
//     throw new Error (message);

// }
// return res.json();


// })


// .then((res)=>console.log(res))
// .catch((err)=> console.log(err));

// /*---------------------------------------------------------*/

// fetch('https://jsonplaceholder.typicode.com/posts/1', {
//     method: 'PUT',
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//       },
//     body: JSON.stringify({
//       title: 'fooma',
//       body: 'barma',
//       userId: 1,
//     }),
//       })
  
// .then((res)=> {
    
// if(!res.ok){
//     const message = `Error: ${res.status}`;
//     throw new Error (message);

// }
// return res.json();


// })


// .then((res)=>console.log(res))
// .catch((err)=> console.log(err));


// /*------------------------------------------*/

// fetch('https://jsonplaceholder.typicode.com/posts/1', {
//     method: 'PATCH',
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//       },
//     body: JSON.stringify({
//       title: 'fooMAAA..',
     
//     }),
//       })
  
// .then((res)=> {
    
// if(!res.ok){
//     const message = `Error: ${res.status}`;
//     throw new Error (message);

// }
// return res.json();


// })


// .then((res)=>console.log(res))
// .catch((err)=> console.log(err));

// /*-------------------------------------------*/

// fetch('https://jsonplaceholder.typicode.com/posts/1', {
//     method: 'DELETE',
// })
  
// .then((res)=> {
    
// if(!res.ok){
//     const message = `Error: ${res.status}`;
//     throw new Error (message);

// }
// return res.json();


// })


// .then((res)=>console.log(res))
// .catch((err)=> console.log(err));

/*---------------------------------------------*/
const makeRequest = async(url)=>{
const res = await fetch(url);
if(!res.ok){
    const message = `Error : ${res.status}`;
    throw new Error(message)
}
const data = await res.json();
return data;
};

const getData = () => {
    makeRequest('https://jsonplaceholder.typicode.com/posts').then((res)=> console.log(res))
    .catch((err)=>console.log(err))
};

getData();

/*--------------------------*/

const makeRequest1 = async(url,confiq)=>{
    const res = await fetch(url,confiq);
    if(!res.ok){
        const message = `Error : ${res.status}`;
        throw new Error(message)
    }
    const data = await res.json();
    return data;
    };
    
    const sendData = () => {
        makeRequest1('https://jsonplaceholder.typicode.com/posts',{
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
  
 })
 .then((res)=> console.log(res))
        .catch((err)=>console.log(err))
    };
    
    sendData();

    /*--------------------------*/

    const makeRequest2 = async(url,confiq)=>{
        const res = await fetch(url,confiq);
        if(!res.ok){
            const message = `Error : ${res.status}`;
            throw new Error(message)
        }
        const data = await res.json();
        return data;
        };
        
        const updateData = () => {
            makeRequest2('https://jsonplaceholder.typicode.com/posts/1',{
      method: 'PUT',
      body: JSON.stringify({
        ID: 1,
        title: 'foomaaaaaaaaaaaaaaaa',
        body: 'barmaaaaaaaaaaaaaaaaaaa',
        userId: 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      
     })
     .then((res)=> console.log(res))
            .catch((err)=>console.log(err))
        };
        
        updateData();
    
        /*---------------------------*/
        const makeRequest3 = async(url,confiq)=>{
            const res = await fetch(url,confiq);
            if(!res.ok){
                const message = `Error : ${res.status}`;
                throw new Error(message)
            }
            const data = await res.json();
            return data;
            };
            
            const updatesingleData = () => {
                makeRequest3('https://jsonplaceholder.typicode.com/posts/1',{
          method: 'PUT',
          body: JSON.stringify({
            ID: 1,
            title: 'foomaaaaaaaaaaaaaaaa',
            body: 'barmaaaaaaaaaaaaaaaaaaa',
            userId: 100001,
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
          
         })
         .then((res)=> console.log(res))
                .catch((err)=>console.log(err))
            };
            
            updatesingleData();
        /*----------------------------*/

        const makeRequest4 = async(url,confiq)=>{
            const res = await fetch(url,confiq);
            if(!res.ok){
                const message = `Error : ${res.status}`;
                throw new Error(message)
            }
            const data = await res.json();
            return data;
            };
            
            const deleteData = () => {
                makeRequest4('https://jsonplaceholder.typicode.com/posts/1',{
          method: 'DELETE',
        
          
         })
         .then((res)=> console.log(res))
                .catch((err)=>console.log(err))
            };
            
            deleteData();