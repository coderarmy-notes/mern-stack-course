// object
// key value
// const user = {
//    name: "Rohit",
//    age: 20,
//    emailId: "negi@gmail.com",
//    amount: 3400,
//    "home address": "dwarka"
// }


// console.log(user["name"]);
// console.log(user.age);
// console.log(user["age"]);
// console.log(user["home address"]);
// console.log(typeof user);
// CRUD operation: Create read update delete


// console.log(user.age);

//  update
// user.aadhar = 1234;
// user.amount = 5000;

// console.log(user);

// // delete
// delete user.emailId;
// console.log(user);


// const user = {
//    name: "Rohit",
//    age: 20,
//    emailId: "negi@gmail.com",
//    amount: 3400,
// }

// const user2 = user;
// user2.age = 90;

// console.log(user);

// Important

// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));

// for(let keys in user){
//     console.log(keys, user[keys]);
// }

// user.keys user["name"] user["age"]


// const user = {
//    name: "Rohit",
//    age: 20,
//    emailId: "negi@gmail.com",
//    amount: 3400,
// }

// for of loop array ke
// const temnparr = Object.keys(user);
// console.log(temnparr)
// for(let keys of temnparr){
//     console.log(keys);
// }

// for(let values of Object.values(user)){
//     console.log(values);
// }

// console.log(Object.entries(user));
// [
//   [ 'name', 'Rohit' ],
//   [ 'age', 20 ],
//   [ 'emailId', 'negi@gmail.com' ],
//   [ 'amount', 3400 ]
// ]

// for(let [keys,values] of Object.entries(user)){
//     console.log(keys, values);

// }


// const name = user.name;
// const age = user.age;

// object ko destructing karna
// const {name:userName,age:userAge} = user;

// const arr = [10,20,40,90,11];

// const [first,second]= arr;

// console.log(userName,userAge);
// console.log(first,second);


// const user = {
//    name: "Rohit",
//    age: 20,
//    emailId: "negi@gmail.com",
//    amount: 3400,
//    greeting: function(){
//     console.log(`Strike is coming on 18 october ${this.name}`);
//     return 20;
//    }
// }

// const user2 = {
//     name:"Mohan",
//     account:201,
//      greeting: function(){
//     console.log(`Strike is coming on 18 october ${this.name}`);
//     return 20;
//    }
// }

// user2.greeting = user.greeting;

// user2.greeting();
// const va = user.greeting();
// console.log(va);

// nested object

// const user = {
//    name: "Rohit",
//    age: 20,
//    emailId: "negi@gmail.com",
//    amount: 3400,
//    address: {
//     city:"kotdwar",
//     state:"Uttarkhand"
//    }
// }

// shallow copy
// const user2 = {...user};
// user2.name = "Mohan";
// user2.address.city = "Dwarka";

// console.log(user2);

// console.log(user.address.city);


// deep copy

// const user2 = structuredClone(user);
// user2.address.city = "Dwarka";
// console.log(user);
// keY; String || Symbol

// const sym = Symbol("id");

// const user = {
//     name:"Rohit",
//     age:20,
//     0: 100,
//     2: "Mohan",
//     [sym]:"Hello Ji"
// }

// const arr = [10,20,30,40];

// {
//     0:10,
//     1:20,
//     2:30,
//     3: 40
// }

// console.log(user[sym]);
