// semicolon is must after iife function bracket
// way1 named iife
(function chai(){
    console.log(`DB connected`);    
})();

// way2
(()=>{
    console.log(`db connected`);  
})();

// way3
(function code(){
    console.log(`db connected`);
    
})();

// value simple iife
((name)=>{
    console.log(`db connected ${name}`);  
})("Maya");
