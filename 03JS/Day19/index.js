// console.log("Hello World Start");


// code

// const p1 = fetch("https://api.github.com/users");


// // fullfilled , reject

// const p2 = p1.then((response)=>{
//    return response.json();
// })


// p2.then((data)=>{
//     console.log(data);
// })


//Promise Chaining

// fetch("https://api.github.com/users")
// .then((response)=>{
    
//    return response.json();
// })
// .then((data)=>{
//     console.log(data);
// })

// const p1 = new Promise((resolve,reject)=>{

//     resolve({
//         name:"Rohit",
//         age:30,
//     });
// })

// p1.then((response)=>{
//     console.log(response);
// }).catch((error)=>{
//     console.log(error);
// })


// fetch("https://api.github.com/users")
// .then((response)=>{
    
//     console.log(response);
//     if(!response.ok){
//         throw new Error("Data is not persent in server");
//     }
//     return response.json();
// })
// .then((data)=>{
//     // console.log(data);

//     const parent = document.getElementById("first");

//     for(let i=0;i<data.length;i++){
//     const image = document.createElement('img');
//     image.src = data[i].avatar_url;
//     image.style.height = "40px";
//     image.style.width = "40px";

//     parent.append(image);
//     }
// })
// .catch((error)=>{
//     const parent = document.getElementById("first");
//     parent.textContent = error.message;
// })






// console.log("Hello World End");



// const j1 = {
//     name: "Rohit",
//     age: 30,
//     address: "dwarka",
// }


// // convert to json

// const jsonFormat = JSON.stringify(j1);

// console.log(jsonFormat);


// const jsonFormat = `{
//     "name":"Rohit",
//     "age": 30,
//     "address": "dwarka"
// }`;


// // java script object

// const JsObject = JSON.parse(jsonFormat);

// console.log(JsObject);

// zomato application

const orderDetail = {
    orderId: 123123,
    food:["Pizza","biryani","coke"],
    cost: 620,
    customer_name: "Rohit",
    customer_location: "Dwarka",
    restaurant_location: "Delhi"
}

function placedOrder(orderDetail){
    console.log(`${orderDetail.cost} Payment is in progress`);
    
    return new Promise((resolve,reject)=>{
       setTimeout(()=>{
     
      if(Math.random()>0.1){
      console.log("Payment is received and order get placed");
      orderDetail.status = true;
       resolve(orderDetail);
      }
      else{
        reject("Payment is failed");
      }

    },3000)
    })
   
}



function preparingOrder(orderDetail){
    console.log(`Your food preparation started of ${orderDetail.food}`);
    
    return new Promise((resolve,reject)=>{
  
     setTimeout(()=>{

        if(Math.random()>0.05){ 
        console.log("Your order is now prepared");
        orderDetail.token = 123;
        resolve(orderDetail);
        }
        else{
            reject("Food item is not persent at restaurant");
        }
        
    },3000);
    })
    
}


function pickupOrder(orderDetail){
    console.log(`Delivery boy is on way to pickup order from ${orderDetail.restaurant_location} `);
    
    return new Promise((resolve,reject)=>{


        setTimeout(()=>{
         if(Math.random()>0.05){   
        console.log("I have picked up the order");
        orderDetail.received = true;
        resolve(orderDetail);
        }
        else{
           reject("Delivery boy Unable to reach restaurant")
        }
    },3000);
    })
    
}


function deliverOrder(orderDetail){
    console.log(`I am on my way to deliver order ${orderDetail.customer_location}`);
    
    return new Promise((resolve,reject)=>{
       setTimeout(()=>{
        console.log("Order delivered succesfully");
        orderDetail.delivery = true;
        resolve(orderDetail);
    },3000)
    })
    
}


placedOrder(orderDetail)
.then((orderDetail)=>preparingOrder(orderDetail))
.then((orderDetail)=>pickupOrder(orderDetail))
.then((orderDetail)=>deliverOrder(orderDetail))
.then((orderDetail)=>{
    console.log(orderDetail);
})
.catch((error)=>{
    console.log("Error: ", error);
}).
finally(()=>{
    console.log("I am doing cleanup");
})
















