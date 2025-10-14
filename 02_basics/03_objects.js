// singelton : when declaration occur as literals then singelton nahi bnega
// object.creates : constructor methods 

// object literals or non singelton objects

const mySym = Symbol("key1")
const JsUser={
    name:"Hitesh",
    "fullName":"Shreya Mishra",
    mySym:"myKey1",
    [mySym]: "mykey1",
    age : 18,
    location: "jaypur",
    email: "djnerh@google.com",
    isLoggedIn:false
}

// console.log(JsUser.email)
// console.log(JsUser["email"]);
// console.log(JsUser["fullName"])
// console.log(typeof JsUser.mySym)
// console.log( JsUser[mySym])
// Object.freeze(JsUser)

JsUser.email="Shreya@123gmail.com"
// Object.freeze(JsUser)
JsUser.email="hello@gmail.com";
console.log(JsUser);


JsUser.greeting =function(){
    console.log("hello Js user");
}

JsUser.greetingTwo =function(){
    console.log(`hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

