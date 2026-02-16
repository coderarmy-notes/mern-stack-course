//  function

// function greeting(){
//     console.log("Hello Coder Army, Strike is coming on 18 october");
//     return 10;
// }


// function addNumber(num1,num2,num3=0,num4=0){
    
//     const sum = num1+num2+num3+num4;
//     console.log(sum);
// }

// greeting();
// addNumber(3,4);

// rest operator
// function addNumber(...num){
   
//     let sum=0;

//     for(let n of num){
//         sum+=n;
//     }

//     console.log(sum);
    
// }


// addNumber(6,7);
// addNumber(6,7,8);
// addNumber(6,7,8,9);
// addNumber(7,8,12,12,11,12,41,12)

// console.log(greeting());


// const arr = [10,20,30,40,50];
// const arr2 = [30,70,90,10]

// const [first,second, ...num] = arr;
// console.log(first,second, num);

// const ans = [arr,arr2];
// console.log(ans);



// function: expression

// console.log(addNumber(3,4));

// function addNumber(num1,num2){
//     return num1+num2;
// }




// const addNumber =function(num1,num2){
//     return num1+num2;
// }

// console.log(addNumber(3,4));


// arrow function

// ()=>{

// }

// const addNumber = (num1,num2)=>{
//    return num1+num2;
// }

// let arr = [10,11,19,7,50];

// arr.sort((a,b)=>b-a);
// console.log(arr);

// const addNumber = (num1,num2) => num1+num2;


// if we have single parameter, no need of this ()
// const squareNumber = num => num*num;



// // console.log(addNumber(3,4));
// console.log(squareNumber(6));


// const greeting = ()=> {
//     return {
//         name:"Rohit",
//         age:20,
//     }
// }


// const greeting = ()=> ({ name:"Rohit",age:20});


// console.log(greeting());


// IIFE

// (function greeting(){
//     console.log("Helloji");
// })();

// (()=>{
//     console.log("hi");
// })();


// 

// function greet(){
//     console.log("Hello Ji, Kaise ho")
// }

// function dance(){
//     console.log("I am dancing");
// }

// function meet(callback){
//     console.log("I am going to meet someone");
    // dance(); hardcode (Reusable)
    // code hota jisko marta
//     callback();
//     console.log("I have finished meeting");
// }

// meet(greet);
// meet(dance);

// blinkit

function blinkitOrderPlaced(){
    console.log("We have started packing your Order");
}

function zomatoOrderPlaced(){
    console.log("We have started preparing your food");
}

function payment(amount,callback){
    console.log(`${amount} payment has initilized`)
    console.log("Payment is received");
    callback();

    // GST: Government
    // Rider ko kitna payment dena
    // company ko kitna 
}

payment(500,zomatoOrderPlaced);
payment(300,blinkitOrderPlaced);
