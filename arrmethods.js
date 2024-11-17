// let arr = [ 1 , 2, 3 ,4 ,5];

// function print(el) {
//     console.log(el)

// }
// arr.forEach(print);

// let arr = [1, 2, 3, 4, 5];

// arr.forEach(function print(el) {
//   console.log(el);
// });

// let arr = [{
//     name : "aman",
//     marks : 90,
// },
// {
//     name : "raj",
//     marks : 98,
// },
// {
//     name : "man",
//     marks : 80,
// }]

// arr.forEach((n) => (
//     console.log(n.name)
// )
// )

// practise quetion

// let nums = [ 10 , 20 , 30 , 40]

// let ans = nums.every((el) => el %10 == 0);
// console.log(ans);

// q2
// let nums = [ 10 , 20 , 30 , 40]
// function getMin(nums)  {

//     let min = nums.reduce((min, el) => {
//         if (min<el) {
//             return min
//         }else{
//             return el;
//         }
//     })
//     return min;
// }
// console.log(getMin(nums))

// default parameter

// function fun(a, b = 3) {
//     return a+b;

// }
// console.log(fun(2,9));

// rest concept

// function sum(...args) {
//   for (let i = 0; i < args.length; i++) {
//     console.log("you gave us arg", args[i]);
//   }
// }
