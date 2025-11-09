// truthy & falsy in js
const userEmail = "h@hitesh.ai"
if(userEmail){
    console.log("Got user email");  
}else{
    console.log("Dont have user email");
}

// string
const userInput= "";
if(userInput){
    console.log("Got user Input"); 
}else{
    console.log("Dont have user Input");
}

// array
const userValue = [];
if(userValue){
    console.log("Got user value");
}else{
    console.log("Dont have user value");
}

// falsy values

false, 0 , -0,  BigInt, 0n, "", null,  undefined, NaN

// truthy values
"0", 'false', " ", [],{},function(){}

if(userValue.length===0){
    console.log("Array is empty");   
}

const emptyObj={}
if(Object.keys(emptyObj).length===0){
    console.log("object is empty");
    

}

// Nulish Coalescing operator(??): null undefined

let val1;
// val1 = 5 ?? 10
// output 5

// val1 = null ?? 10
// output null

// val1  = undefined ?? 11
// o/p undefined

val1 = null ?? 10 ?? 20
console.log(val1);

// ternary operator
// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80"):console.log("more than 80");

