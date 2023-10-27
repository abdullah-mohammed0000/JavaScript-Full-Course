console.clear();
//console.log(window)
axios
.get('https://jsonplaceholder.typicode.com/posts')
.then((res) => console.log(res.data))
.catch((err) => console.log(err));

axios
.post('https://jsonplaceholder.typicode.com/posts',{
  
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1,
    }),
})
.then((res)=>console.log(res.data))
.catch((err)=>console.log(err));



axios
.patch('https://jsonplaceholder.typicode.com/posts/1',{
  
    body: JSON.stringify({
     
      body: 'baramamamamamamamma',
     
    }),
})
.then((res)=>console.log(res.data))
.catch((err)=>console.log(err));


axios
.delete('https://jsonplaceholder.typicode.com/posts/1')
.then((res)=>console.log(res.data))
.catch((err)=>console.log(err));


const makeRequest = async(confiq) => {

    return await axios(confiq);

};

const get1Data = () => {
    makeRequest("https://jsonplaceholder.typicode.com/posts")
    .then((res)=>console.log(res))
    .catch((err)=> console.log(err))
}

get1Data();


const makeRequest1 = async(confiq) => {

    return await axios(confiq);

};

const createData = () => {
    makeRequest1( {
        url:"https://jsonplaceholder.typicode.com/posts",
        method: 'post',
        body: JSON.stringify({
          title: 'foo',
          body: 'bar',
          userId: 1,
        }),
      
      })
    .then((res)=>console.log(res.data))
    .catch((err)=> console.log(err))
}

createData();




const makeRequest2 = async(confiq) => {

    return await axios(confiq);

};


const update1Data = () => {
    makeRequest2( {
        url: "https://jsonplaceholder.typicode.com/posts/1",
        method: 'PUT',
        body: JSON.stringify({
          title: 'siuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu',
          body: 'goallllllllllllllllllllllllllllllll',
          userId: 3,
        }),
      
      })
    .then((res)=>console.log(res))
    .catch((err)=> console.log(err))
}

update1Data();




const makeRequest3 = async(confiq) => {

    return await axios(confiq);

};


const deleteData = () => {
    makeRequest3( {
        url: "https://jsonplaceholder.typicode.com/posts/1",
        method: 'DELETE'
      })
    .then((res)=>console.log(res))
    .catch((err)=> console.log(err))
};

deleteData();