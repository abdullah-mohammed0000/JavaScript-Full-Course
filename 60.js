const names = ["s1","s2","s3"]
for(let name of names){
    console.log(name)
}

let students ={
    ID:101,
    Name:"Abdullah Mohammed",
    CGPA:3.61
}

for(let x in students){
    console.log(students[x])
}

let students1 ={
    ID:101,
    Name:"Abdullah Mohammed",
    CGPA:3.61
}

for(let x in students1){
    console.log(`${x}: ${students[x]}`)
}


