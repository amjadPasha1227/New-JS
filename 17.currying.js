// function sum(a, b){
//     return a + b;
// }

// console.log(sum(2, 6))
// console.log(sum(2, 8))
// console.log(sum(2, 10))


//////////////////////////////////////////////

// function sum(a){
//     return function (b){
//         return a + b;
//     }
// }

// console.log(sum(2)(6))
// console.log(sum(2)(8))
// console.log(sum(2)(10))

// const sumWithTwo = sum(2);

// console.log(sumWithTwo(6));
// console.log(sumWithTwo(8));
// console.log(sumWithTwo(10));

////////////////////////////////////////////////

// function sum(a, b){
//     return a + b;
// }

// function curry(fn){
//     return function(a){
//         return function(b){
//             return fn(a, b);
//         }
//     }
// }

// let currySum = curry(sum)
// const sum2 = currySum(2)
// console.log(sum2(2))
// console.log(sum2(4))

// console.log("normal function " + sum(4, 10))
