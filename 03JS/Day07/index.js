// // Array;

// // let marks1 = 100;
// // let marks2 = 50;
// // let marks3 = 70;
// // let marks4 = 80;

// let marks = [100,50,70,80,90];



// console.log(marks);
// console.log(marks.length);

// let arr = [100,30,"Rohit",true];

// console.log(arr[2]);
// console.log(typeof arr);

// arr[1] = 90;
// console.log(arr);

// // push : Insert element at end

// arr.push(90);
// arr.push("Strike");

// console.log(arr);

// // pop operation: Delete element from end
// arr.pop();
// console.log(arr);


// Add at starting index

// arr.unshift(10);
// arr.unshift(50);
// console.log(arr);

// // delete the element from starting index

// arr.shift();
// console.log(arr);


// let arr = [10,30,50,90,11];

// for(let i=0; i<arr.length; i++){
//     console.log(arr[i]);
// }

// for(let num of arr){
//     console.log(num);
// }

// let arr = [10,30,50,90,11];
// let arr2 = arr;

// arr2.push(30);

// console.log(arr);

// Object(non primitive) data type: Copy by reference hote hai / call by refrence 
// Primitive data type: Copy by value / call by value

// const arr = [10,30,50,90,11];
// arr[2] = 30;



// console.log(arr);


// const arr = [10,30,50,90,11];
// const arr2 = arr.slice(2,4);
// console.log(arr2);
// const arr3 = arr.splice(1,3,"Rohit",19);
// console.log(arr3);

// const arr = [10,30,50,90,11];
// const arr2 = ["Rohit",11,true];
// const arr4 = [90,4,false];

// arr.push(arr2);
// const arr3 = arr.concat(arr2,arr4);

// const arr3 = [arr,arr2,arr4];

// spread operator

// const arr3= [...arr,...arr2,...arr4];
// console.log(arr3);


// const names = ["Alice", "Rohit","Bob","Mohit", "Charlie",];

// console.log(names.toString());
// console.log(names.join("/"));
// console.log(names.lastIndexOf("Bob"));
// console.log(names.includes("Bobs"));

// names.sort();
// names.reverse();

// console.log(names);

// const a = ["101","90","80","32","91"];
// const arr = [10,"Rohit","Mohan",true];

// a.sort();
// arr.sort();
// console.log(a);
// console.log(arr);

// const arr = [10,40,31,71,5,11];

// arr.sort((a,b)=> a-b);
// // ascending order

// arr.sort((a,b)=> b-a);

// 40,10
// a = 10
// b = 40
// 10,31, 40
// a = 10
// b = 31

// -ve : pehle a aayega fr b aayega
// +ve: b aayega fr a aayega

// console.log(arr);


// const arr = [10,30,50,[40,90,[60,19,99],11], 80];

// const a = arr.flat(Infinity);
// console.log(a);
// console.log(arr[3][2][1]);


// const a = [10,309,"Rohit",9.3, true];
// a.name = "Moahn";
// console.log(a);