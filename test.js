// let numbers = [1, 3, 5, 7, 9];
// let a = numbers.forEach((num) => {
//   // console.log(num + 1);
// });

// hoisting
// let hello = function () {
//   console.log("hello world");
// };
// hello();

// push
// const arr = [1, 7];
// const newArr = [8, 9, 10];
// for (let i = 0; i < newArr.length; i++) {
//   arr[arr.length] = newArr[i];
// }

// console.log(arr);

// pop
// const arr = [2, 4, 5, 6, 7];
// const newArr = [];
// for (let i = 0; i < arr.length - 1; i++) {
//   newArr[newArr.length] = arr[i];
// }

// console.log(newArr);

// shift
// const arr = [1, 7, 5, 7, 8, 3];
// const newArr = [];
// for (let i = 1; i < arr.length; i++) {
//   newArr[newArr.length] = arr[i];
// }

// console.log(newArr);

// unshift
// const arr = [5, 6, 8, 9];
// const newNum = 89;

// let newArr = [];
// newArr[0] = newNum;

// for (let i = 0; i < arr.length; i++) {
//   newArr[newArr.length] = arr[i];
// }
// console.log(newArr);

// slice
// const arr = [2, 3, 4, 5, 6, 7, 8, 9];
// let start = 0;
// let end = 5;
// let newArr = [];

// for (let i = start; i < end; i++) {
//   newArr[newArr.length] = arr[i];
// }

// console.log(newArr);

//reduce
// const arr = [1, 2, 3, 4, 5, 6];
// let acc = 0;
// function customReduce(arr) {
//   for (let i = 2; i < arr.length; i++) {
//     acc = acc + arr[i];
//   }
//   return acc;
// }

// console.log(customReduce(arr));
// filter

// const arr = [2, 3, 4, 5, 6, 7, 8];
// let newArr = [];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > 4) {
//     newArr[newArr.length] = arr[i];
//   }
// }

// console.log(newArr);
