console.clear()

//event - onload(), onerror()
//property - response, responseText, responseType, responseURl, status,statusText
//function - open(), send(), setRequestHeader()

// const makeRequest= (method,url) =>{
// return new Promise((resolve,reject)=>{
//     const xhr = new XMLHttpRequest();
//     //console.log(xhr);
//     xhr.open(method,url);
//     xhr.onload = () => {
    
//         let data = xhr.response;
//         console.log(xhr.status)
//         //console.log(xhr.statusText)

//         console.log(JSON.parse(data))
//     }
    
//     xhr.onerror = () => {
//         console.log('error is here');
//     }
//     xhr.send();

// })

   
// }

// const getData = () => {
// makeRequest('GET','https://jsonplaceholder.typicode.com/posts/1')
// .then((res)=> console.log(res))

// }

// getData();


const makeRequest= (method,url) =>{
    
        const xhr = new XMLHttpRequest();
        //console.log(xhr);
        xhr.open(method,url);
        xhr.onload = () => {
        
            let data = xhr.response;
            console.log(xhr.status)
            //console.log(xhr.statusText)
    
            console.log(JSON.parse(data))
        }
        
        xhr.onerror = () => {
            console.log('error is here');
        }
        xhr.send();
    
    
       
    }
    
    const getData = () => {
    makeRequest('GET','https://jsonplaceholder.typicode.com/posts/1')
   
    
    }
    
    getData();











const makeRequest1= (method,url,data) =>{


    const xhr = new XMLHttpRequest();
    //console.log(xhr);
    xhr.open(method,url);
    xhr.setRequestHeader('Content-Type','application/json')
    xhr.onload = () => {
    
        let data = xhr.response;
        console.log(JSON.parse(data))
    }
    
    xhr.onerror = () => {
        console.log('error is here');
    }
    xhr.send(JSON.stringify(data));

}






const sendData = () => {
makeRequest1('POST','https://jsonplaceholder.typicode.com/posts',{
    title: 'foo',
    body: 'bar',
    userId: 1,
})


}

sendData();

const updateData = () => {
    makeRequest1('PUT','https://jsonplaceholder.typicode.com/posts/1',{
        id: 1,
        title: 'fooma',
        body: 'barma',
        userId: 1,
    })
    
    
    }
    
    updateData();
    

    const updateSingleData = () => {
        makeRequest1('PATCH','https://jsonplaceholder.typicode.com/posts/1',{
         
            title: 'foomaa..............',
         
        })
        
        
        }
        
        updateSingleData();
        

        const deleteData = () => {
            makeRequest1('DELETE','https://jsonplaceholder.typicode.com/posts/1')
            }
            
    deleteData();      