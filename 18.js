var array = new Array(50)
array[0]="Pappu"
array [1]="Chappu"
console.log(array[1]);

 var array1 = new Array(5);
 array1[0] = "Tikku";
 array1[1] = "Chikku";
 console.log(array1);
 console.log(array1.length);
 
 var array2 = ["Rinku", "Chinku", "Pinku", "Tikku", "Mikku"]
 console.log(array2.length);
 console.log(array2);

 var array3 = ["Rinku", "Chinku", "Pinku", "Tikku", "Mikku"];
 array3.push("chokku");
 array3.push("vokku");
 console.log(array3)
 console.log(array3.length);
array3.pop();
array3.pop();
console.log(array3.length);
console.log(array3);

var country1 = ["Bangladesh","India"];
var country2 = ["Myanmar","Pakistan"];
var country = country1.concat(country2);
console.log(country);