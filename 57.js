function message(text="I love js"){

    console.log(`${text}`)



}

message();
message("I love ES6");


function sum(x,y,...z){

    console.log(`X=${x},Y=${y},Z=${z}`)
}

sum(10,20,30,40,50,60);