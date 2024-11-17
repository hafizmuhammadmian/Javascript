// function hello() {
//     console.log("hello");
// }
// function printName(params) {
//     console.log("Mian")
// }
// printName()

// function num(params) {
//     for (let i = 0; i < 10; i++) {
//        console.log(i)

//     }
// }
// num();

// function isAdult(params) {
//     let age = 18;
//     if (age>=18) {
//         console.log("adult")
//     }else{
//         console.log(":is not adult")
//     }
// }
// isAdult()

// Practie qs

//Dice

// function Dice() {
//     let random = Math.floor(Math.random()*6)+1;
//     return random;
// }
// Dice();

// function with arg

// function name(name, age) {
//     return (`${name} has the age ${age}`)

// }
// console.log(name('mian',19));

// sum

// function sum(a,b) {
//     return a+b;
// }
// console.log(sum(6,7))

// avgnum

// function numAvg(a,b,c) {
//     return (a+b+c)/3;
// }
// console.log(numAvg(67,90,87));

// practise question

// function sumOf(n) {
//     let sum = 10;
//     for (let i = 0; i <= n; i++) {
//         sum+=i

//     }
//     return sum;
// }

// let arr = ["hello", "hi", "bye"];
// function conCat(arr) {
//   let result = "";
//   for (let i = 0; i < arr.length; i++) {
//     result += arr[i];
//   }
//   return result;
// }


// let greet = "hello" //Global scope

// function changeGreet() {
//     let greet = "namaste"; //function scope
//     console.log (greet)
//     function innerGreet(params) {
//         console.log(greet);//lexical scope
//     }
//     innerGreet();
// }
// console.log(greet)
// changeGreet();

// practise ques

// let square = (n) =>{
//     return n*n;
// }
// square(5);


// let str1 = " hello World";

// let str=setInterval (() => {
//     console.log(str1)
// },2000)



// for each

// let arr = [ 4,5,6,7,]

// arr.forEach((el)=>{
//     console.log(el)
// })


// let obj = [{
//     name : "aman",
//     marks : 98,
// },{
//     name : "aman",
//     marks : 97,
// },{
//     name : "aman",
//     marks : 90,
// },]
// let newarr = obj.map((el)=>{
//     return el.marks/10;
// })


// let arr = [ 4,5,6,7,9,4,2,6,]

// let newarr = arr.reduce((max ,el)=>{
// if (max > el) {
//     return el;
    
// }else{
//     return max;
// }
// })

// let arr = [ 4,5,6,7,9,4,2,6,]

// let multi = arr.every((el)=>{
// return (el%10 ===0);
// })
