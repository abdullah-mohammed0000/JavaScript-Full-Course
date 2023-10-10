console.log(location.href);
console.log(location.protocol)
console.log(location.hostname)
console.log(location.port)
console.log(location.pathname)

var locationdiv = document.querySelector(".locationdiv");

var p1 = locationdiv.children[0];
p1.textContent = location.href;

var p2 = locationdiv.children[1];
p2.textContent = location.protocol;

var p3 = locationdiv.children[2];
p3.textContent = location.hostname;

var p4 = locationdiv.children[3];
p4.textContent = location.port;

var p5 = locationdiv.children[4];
p5.textContent = location.pathname;

var visit = document.getElementById("visit");
visit.addEventListener("click",function(){
location.assign("https://www.youtube.com/watch?v=ytOhuX7C69Y&list=PLgH5QX0i9K3qzryglMjcyEktz4q7ySunX&index=56")


})