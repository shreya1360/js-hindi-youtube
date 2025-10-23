const user ={
    username: "hitesh",
    price:999,


welcomeMessage:function(){
    // console.log(`${this.username}, welcome to website`);
    // console.log(this);
    
}
}
// user.welcomeMessage();
// user.username="sam";
// user.welcomeMessage()

// user.welcomeMessage(this)

// console.log(this);

// function chai(){
//     let username ="saumya"
//     console.log(this.username);
    
// }
// chai()

// const chai = function(){
//     let username = "hitersh"
//     console.log(this.username);
    
// }
// chai()

const chai = () =>{
    let username = "hitersh"
    console.log(this);
    
}

// arrow function

// const addTwo =(num1, num2)=>{
//     return num1 + num2;
// }

// Implisit function ek hi row me without return keyword
// const addTwo =(num1, num2)=> num1 + num2
// const addTwo =(num1, num2)=> (num1 + num2)
const addTwo=(num1, num2)=>({username:"Nancy"})
console.log(addTwo(3,4));






