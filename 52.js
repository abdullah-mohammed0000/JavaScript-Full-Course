try{
    alert("Don't Waste your Time");
    alert(x);
    alert("Don't spend your time which will never be your future passion"); //you don't need to write it here as you write it on finally and compiler doesn't count it in this box
}catch(err){
   console.log(err);
   console.log(err.name);
   console.log(err.message);
}finally{
    alert("Don't spend your time which will never be your future passion");
}