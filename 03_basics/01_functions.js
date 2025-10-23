

function sayMyName(){
    console.log("H");
console.log("T");
console.log("I");

}

 sayMyName()


//  function addTwoNumbers(number1, number2){
//     console.log(number1 +  number2);
    
//  }
//  addTwoNumbers(3,'a');

function addTwoNumbers(number1 , number2){
//   let result = number1 + number2  
//   console.log("ram");
//   return result

  // agar function me ek bar kuchh return kar diye toh uske bad kuchh bhi execute nahi hoga
//   console.log("Shreya");

//   easy way to return
return number1 + number2
  

}
const result = addTwoNumbers(3,5)

// console.log("result:", result);

function loginUserMessage(username="sam"){
  if(!username){
    console.log("please enter a username");
    return
  
  }
  return `${username} just logged in`
}

 console.log(loginUserMessage("Hitesh"));
// console.log(loginUserMessage(""));
console.log(loginUserMessage());

const user ={
  username : "Shreya",
  price:199
}
function handleObject(anyobject){
  console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
  
}
// object

// handleObject(user)
handleObject({
  username:"soni",
  price:399
})

//array
const myNewArray = [20, 400,300, 500]
function returnSecondValue(getArray){
  return getArray[1]
}
console.log(returnSecondValue([200, 400, 300]));



function calculateCartPrice(val1, value2 ,...num1){
  return num1
}
console.log(calculateCartPrice(200, 400, 600,300));

