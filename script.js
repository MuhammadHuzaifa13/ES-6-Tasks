// Global Scope




var num1 = 20
let num2 = 30
const num3 = 40

{
    console.log(num1);
    console.log(num2);
    console.log(num3);
    
}

// They are Globally Accessible

// Function Scope

// let greet = ()=>{

    // var str1 = "Karachi"
    // let str2 = "Lahore"
    // const str3 = "Quetta"
// }
// greet()
// console.log(str1);
// console.log(str2);
// console.log(str3);
// They aren't accessible 

// Block Scope
let num = 20
if(num){
    var str1 = "Karachi"
    let str2 = "Lahore"
    const str3 = "Quetta"
}
// console.log(str1);
// console.log(str2);
// console.log(str3);
// Only 'var' is accessible


// Hoisting with var
console.log(sum);
var sum = 10+10
// Output: Undefined

// Hoisting with let and const

// console.log(sumLet);
// console.log(sumConst);
// let sumLet = 10+20
// const sumConst = 50+10

// Error: Cannot access before initialization

// Re Assignment


var a = 1
let b = 2
const c = 3 

a = 10
b = 20
// c = 50
console.log(a);
console.log(b);
console.log(c);

// Cannot Re assign Const but Let and Var can be assigned




// Temporal Dead Zone


{
    // console.log(value);
    // let value = "abc"

    // Error:  Cannot access before initialization
}

{
    // console.log(value);
    
    // const value = 123

    // Error:  Cannot access before initialization

}

// String Interpolation:


let firstName = "Ayan"
let lastName = "raza"
console.log(`My name is ${firstName} ${lastName}`);


// Simple Expressions:

let n1 = 10
let n2 = 20
console.log(`The sum of ${n1} and ${n2} is ${n1+n2}`);




// Loops within Template Literals:

let arrShoppping = ['Clothes','Shoes','Jwellery','Watch','Wallet']
for(let i = 0 ; i < 5; i++){

    let strShopping = `<ul>
    
    <li>${arrShoppping[i]}</li>

    </ul>`
    
    console.log(strShopping);   
}


// Simple Condition:

// let age = 19
// let canVote = age >= 18 ? "YES, You can Vote" : "No you can't vote"
// console.log(canVote);


// Even OR Odd

let number = 7;
let EvenOrOdd = number % 2 === 0 ? "Even" : "Odd"
console.log(EvenOrOdd);


// Grade Evaluation

let percentage = 89.7;

let check = percentage >= 33 && percentage <= 50 ? "F" :
            percentage >= 51 && percentage <= 60 ? "D" :
            percentage >= 61 && percentage <= 70 ? "C" : 
            percentage >= 71 && percentage <= 80 ? "A" : 
            percentage >= 81 && percentage <= 100 ? "A+" : 
            "invalid percentage";

console.log(check);



// Login Status

let isLoggedIn = true;

let statusMessage = isLoggedIn ? "Welcome back!" : "Please log in";

console.log(statusMessage);

// Discount Eligibility

let isMember = true;  
let purchaseAmount = 150; 
let discount = (isMember && purchaseAmount > 100) ? (purchaseAmount * 0.10) : 0;

console.log(discount);



// Greeting Message

let greet = (name)=>{
    return (name && name.trim() !== "") ? `Hello, ${name}!` : "Hello, guest!";
  }
  
  console.log(greet("Ayan")); 
  
  console.log(greet());       
  



//   Mapping Values

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let newArray = numbers.map((e,i)=>{
   return e % 2 === 0 ? e * 2 : e * 3;

})
console.log(newArray);



// Filtering Values

const strings = ["cat", "elephant", "dog", "tiger", "fox", "lion"];

const stringLength = strings.filter((e,i)=>{
    return e.length > 3 ? true : false


})

console.log(stringLength);

  

  
// Rest Parameter with Spread Operator


let multiply = (firstNumber, ...rest)=>{
    rest.map((e,i)=>{
      return num * firstNumber
    }
    
)}
const result = multiply(2, 3, 4, 5, 6);
console.log(result);
 
// First And rest

const numerical = [10, 20, 30, 40, 50];

const [first, ...rest] = numerical;

console.log("First:", first);
console.log("Rest:", rest);



// Basic Destructing



const fruits = ["apple", "banana", "cherry"];

const [firstFruit, secondFruit, thirdFruit] = fruits;

console.log("First Fruit:", firstFruit);
console.log("Second Fruit:", secondFruit);
console.log("Third Fruit:", thirdFruit);



// Skipping elements


const colors = ["red", "green", "blue", "yellow"];

const [primaryColor, , tertiaryColor] = colors;

console.log("Primary Color:", primaryColor);
console.log("Tertiary Color:", tertiaryColor);




// Rest Operators


const numbersArr = [1, 2, 3, 4, 5];

const [firstNumber, ...remainingNumbers] = numbersArr;

console.log("First Number:", firstNumber);
console.log("Remaining Numbers:", remainingNumbers);




// Basic Object Destructing

let student = {
    name: "Ahmed",
    age: 16,
    city: "Lahore"
  };
  
  let { name, age, city } = student;
  
  console.log("Name:", name);
  console.log("Age:", age);
  console.log("City:", city);
  


//   Renaming Variables

let car = {
    make: "Honda",
    model: "Civic",
    year: 2024
  };
  
  let { make: carMake, model: carModel, year: carYear } = car;
  
  console.log("Car Make:", carMake);
  console.log("Car Model:", carModel);
  console.log("Car Year:", carYear);
  



//   Array of Arrays


const nestedArray = [[1, 2], [3, 4], [5, 6]];

const [[a1], [b1], [c1]] = nestedArray;

console.log("a:", a1);
console.log("b:", b1);
console.log("c:", c1);



// Object with an object


const profile = {
    username: "MrRaza",
    details: {
      email: "raz@gmail.com",
      address: "Block 3, F.B Area"
    }
  };
  
  const { username, details: { email, address } } = profile;
  
  console.log("Username:", username);
  console.log("Email:", email);
  console.log("Address:", address);
  

// Count Properties


let student1 = {
    name: "Aeyan",
    age: 16,
    grade: "A+",
    school: "Aga Khan Higher Secondary"
  };
  
  let propertyNames = Object.keys(student);
  let numberOfProperties = propertyNames.length;
  
  console.log(numberOfProperties);
  

// Iterate over Keys


const product = {
    name: "Laptop",
    price: "120,000",
    category: "Electronics"
  };
  
  let productProperties = Object.keys(product);
  
  productProperties.forEach(property => {
    console.log(`${property}: ${product[property]}`);
  });


//   Convert Object to Array


let person = {
    firstName: "Aeyan",
    lastName: "Raza",
    age: 30
  };
  
  let entriesArray = Object.entries(person);
  
  console.log(entriesArray);
  
  


//  Key vAlue Swap


let roles = {
    admin: "Administration",
    editor: "Editing",
    viewer: "Audience"
  };
  
let swappedRoles = Object.fromEntries(
    Object.entries(roles).map(([key, value]) => [value, key])
  );
  
  console.log(swappedRoles);
  


//   Stimulate Api Calls



function apiCall() {
    return new Promise((resolve, reject) => {
      const delay = Math.random() * 2000;
      setTimeout(() => {
        if (Math.random() > 0.2) {  
          resolve(`Data received after ${delay.toFixed(0)}ms`);
        } else {
          reject('Error during API call');
        }
      }, delay);
    });
  }
  
  async function getData() {
    try {
      const result1 = await apiCall();
      console.log(result1);  
  
      const result2 = await apiCall();
      console.log(result2); 
  
      const result3 = await apiCall();
      console.log(result3);  
    } catch (error) {
      console.error('An error occurred:', error);
    }
  }
  
  getData();
  



// Error Handling in async/await:


function fetchUser(userId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const users = [
          { id: 1, name: 'Alice' },
          { id: 2, name: 'Bob' },
          { id: 3, name: 'Charlie' }
        ];
  
        const user = users.find(u => u.id === userId);
  
        if (user) {
          resolve(user);  
        } else {
          reject('User not found'); 
        }
      }, 1000); 
    });
  }
  
  async function getUserInfo(userId) {
    try {
      const user = await fetchUser(userId);
      console.log('User found:', user);  
    } catch (error) {
      console.error('Error:', error); 
    }
  }
  
  getUserInfo(2);  
  
  getUserInfo(4);  
  