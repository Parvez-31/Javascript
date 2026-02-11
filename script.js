// const user = {
//   fullName: function (city, country) {
//     return `My first name is ${this.firstName} and last name is ${this.lastName} and my city name ${city} and country is ${country}`;
//   },
// };

// const person1 = {
//   firstName: "Gourav",
//   lastName: "Halder",
// };

// const person2 = {
//   firstName: "Parvez",
//   lastName: "Tarafder",
// };

// console.log(user.fullName.apply(person2, ["kolkata", "India"]));

// const wrd = "hello";
// const word = wrd.split(" ");
// console.log(word);

// const letter = "hello";
// const ltr = letter.split("");
// console.log(ltr);

// const indx = "parvez is a good";
// const ind = indx.split(" ", 3);
// console.log(ind);

// const letter = "hello my name is parvez"
// const lette = letter[2].split();
// console.log(lette);

// const date = "2022-02,12"
// const da = date.split(/[-,]/)
// console.log(da);

// let num = "12.5abcd"
// let x = Number(num)
// console.log(x);
//
// let arr = [1, 2, 3, 4, 5, 6, 6, 3, 2];
// let x = [];
// for (let i = 0; i < arr.length; i++) {
//   if (!x.includes(arr[i])) {
//     x.push(arr[i]);
//   }
// }
// console.log(x);
// 1

// let fr = ["apple", "mango", "bannana"]
// let x = ["bannana"]
// let y = []

// for(let i =0; i< fr.length; i++) {
// if(!x.includes(fr[i])) {
//   y.push(fr[i])
// }

// hello world
// hello world

//TODO:
//FIXME:
//NOTE:

// const arr = [1, 2, 3, 4, 5, 5, 6, 7, 7, 8, 8, 2, 1];
// let newArr = [];
// for (let i = 0; i < arr.length; i++) {
//   if (!newArr.includes(arr[i])) {
//     newArr.push(arr[i]);
//   }
// }
// console.log(newArr);

// const fruits = ["mango", "apple", "banana"];
// const oneFruit = ["banana"];
// let towFruits = [];
//
// for (let i = 0; i < fruits.length; i++) {
//   if (!oneFruit.includes(fruits[i])) {
//     towFruits.push(fruits[i]);
//   }
// }
// console.log(towFruits);
//
// const sellingPrice = (actualPrise, twoHundredFifty = 250) => {
//   return actualPrise - twoHundredFifty;
// };
//
// console.log(sellingPrice(1000));
//
// const oneHundredYear = (myBirthYear) => {
//   return myBirthYear + 100;
// };
//
// console.log(oneHundredYear(2007));
//
// const mobilePhUse = (everyDayHours, days) => {
//   return days * everyDayHours;
// };
//
// console.log(mobilePhUse(3, 30));
//
// const tenTimes = (number) => {
//   const result = number * 10;
//   return result;
// };
//
// const output = tenTimes(10);
// console.log(output);

// const add = (price1, price2) => {
//   const total = price1 + price2;
//   return total;
// };
//
// const output = add(23, 67);
// console.log(output);
//
// const potato = 56;
// const onion = 45;
// const shirt = 500;
// const pant = 1200;
//
// const add = (price1, price2)=> {
//   return price1 + price2;
// };
//
// const bill1 = add(potato, onion);
// // const bill1 = add(potato , onion)
// const bill2 = add(shirt, pant);
// const total = add(bill1, bill2);
// console.log(total);
//
// const doMath = (num1, num2) => {
//   const sum = num1 + num2;
//   const diff = num1 - num2;
//   const multiply = sum * diff;
//   const result = multiply / 2;
//   return result;
// };
//
// const result = doMath(12, 34);
// console.log(result);

// const isNum = (num) => {
//   if (num % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// };
//
// const even = isNum(8);
// console.log(even);
//
// const isOdd = (num) => {
//   if (num % 2 === 1) {
//     return true;
//   }
//   return false;
// };
//
// const num1 = isOdd(10);
// console.log(num1);
//
// const num2 = isOdd(7);
// // console.log(num2);
//
// const aboveTen = (num) => {
//   if (num > 10) {
//     return true;
//   }
//   return false;
// };
//
// const ten = aboveTen(11);
// console.log(ten);
//
// const thirteen = (num) => {
//   if (num % 13 === 0) {
//     return true;
//   }
//   return false;
// };
//
// const result = thirteen(50);
// console.log(result);
//
// const rice = 40;
// const curry = 80;
// const drinks = 100;
//
// const totalBill = (item1, item2, item3) => {
//   return item1 + item2 + item3;
// };
//
// const total = totalBill(rice, curry, drinks);
// console.log(total);
//
// const voter = (age) => {
//   if (age > 18) {
//     return "Eligible for voting";
//   }
//   return "Not Eligible";
// };
//
// const result = voter(19);
// // console.log(result);
//
// const sentence = "I am a good boy.";
//
// const stringLength = (sentence) => {
//   return sentence.length;
// };
//
// const result = stringLength(sentence);
// console.log(result);
//
// const average = (num1, num2, num3) => {
//   return (num1 + num2 + num3) / 3;
// };
//
// const result = average(23, 23, 23);
// // console.log(result);
//
// const negNumber = (num) => {
//   if (num < 0) {
//     return num * 1;
//   }
//   return num;
// };
// const result = negNumber(45);
// console.log(result);

// const user1 = {
//   firstName: "Parvez",
//   lastName: "Tarafder",
// };
//
// const user2 = {
//   firstName: "Gourav",
//   lastName: "Halder",
// };
//
// const printFullName = function (city, country) {
//   return `My firstName is ${this.firstName} and lastName is ${this.lastName} and my city is ${city} and country ${country}`;
// };
//
// console.log(printFullName.call(user1, "kolkata", "india"));
// console.log(printFullName.call(user2, "Mumbai", "india"));
// console.log(printFullName.apply(user2, ["Mumbai", "india"]));

// const result = printFullName.bind(user1, "kolkata", "india");
// console.log(result);
// console.log(result());

//TODO:
//string print - ✔️
//string and string length return - ✔️
//check this length is even or odd(true, false) - ✔️
//
// const cityName = (city) => {
//   console.log(city);
// };
//
// cityName("kolkata");
//
// const evenSizeString = (city) => {
//   console.log(city, city.length);
// };
//
// evenSizeString("kolkata");
//
// const evenOdd = (str) => {
//   const size = str.length;
//
//   if (size % 2 === 0) {
//     return "even";
//   }
//   return "odd";
// };
//
// console.log(evenOdd("kolkata"));
//
// const doubleTriple = (num, double) => {
//   if (double === true) {
//     const result = num * 2;
//     return result;
//   } else {
//     const result = num * 3;
//     return result;
//   }
// };
//
// console.log(doubleTriple(2, true));
// console.log(doubleTriple(3, false));
//
// const numberOfElement = (arr) => {
//   let len = arr.length;
//   if (len % 2 === 0) {
//     return even;
//   }
//   return odd;
// };
//
// const len = numberOfElement([23, 4, 52, 3, 5, 78, 98, 23]);
// console.log(len);
//
// const firstLetter = (str) => {
//   let first = str[0];
//   return first;
// };
//
// console.log(firstLetter("Raju"));
//
// const checkNum = (num) => {
//   if (num > 10) {
//     return num / 10;
//   } else {
//     return num * 10;
//   }
// };
//
// console.log(checkNum(2));
//
// const arr = (arrNum) => {
//   // return arrNum;
//   let sum = 0;
//   for (let i = 0; i < arrNum.length; i++) {
//     sum = sum + arrNum[i];
//   }
//   return sum;
// };
//
// console.log(arr([20, 30]));

// const positiveNegative = (n) => {
//   if (n > 0) {
//     return n * 2;
//   } else {
//     return n * 3;
//   }
// };
//
// console.log(positiveNegative(20));
// console.log(positiveNegative(-20));

// const nameLength = (firstName, secondName) => {
//   if (firstName.length > secondName.length) {
//     return true;
//   }
//   return false;
// };
//
// console.log(nameLength("ParvezTarafder", "samimMamu"));
//
// const into = (firstNum, secondNum) => {
//   let result = firstNum * secondNum;
//   // console.log(result);
//   if (result > 100) {
//     return result / 2;
//   }
//   return result;
// };
//
// console.log(into(100, 20));
//
// const sumOfNumbers = (number) => {
//   let sum = 0;
//
//   for (let num of number) {
//     if (num % 2 === 0) {
//       sum = num + sum;
//     }
//   }
//   return sum;
// };
// const result = sumOfNumbers([12, 3, 4, 5, 6, 7]);
// console.log(result);
//
// const sumOfNumbers = (number) => {
//   // console.log(number);
//   let sum = 0;
//   for (let num of number) {
//     if (num % 2 !== 0) {
//       sum = sum + num;
//     }
//   }
//   return sum;
// };
//
// console.log(sumOfNumbers([5, 15, 8, 7]));
//
// const smallNumber = (num) => {
//   if (num[0] > num[1]) {
//     return num[1];
//   }
//   return num[0];
// };
//
// console.log(smallNumber([10, 20, 70]));
//
// const checkMyAge = (age) => {
//   if (age < 18) {
//     return 18;
//   } else if (age > 45) {
//     return 45;
//   } else {
//     return age;
//   }
// };
//
// console.log(checkMyAge(50));
//
// const numberOfElement = (num) => {
//   let sum = 0;
//
//   for (let x of num) {
//     if (x % 4 === 0) {
//       sum = sum + x;
//     }
//   }
//   return sum;
// };
//
// console.log(numberOfElement([2, 4, 5, 7, 8, 32, 45]));
//
// const clac = (num) => {
//   if (num < 20) {
//     return num * 2;
//   }
//   return num / 20;
// };
//
// console.log(clac(2));
//
// const arr = (num) => {
//   // console.log(num);
//   let sum = 0;
//   for (let i = 0; i < num.length; i++) {
//     if (num[i] < 0) {
//       sum = num[i] + sum;
//     }
//   }
//   return sum;
// };
//
// console.log(arr([2, -4, 6, 7, -9, 2]));
//
// const arr = (num) => {
//   let into = 1;
//
//   for (let i = 0; i < num.length; i++) {
//     if (num[i] % 3 === 0) {
//       into = num[i] * into;
//     }
//   }
//   return into;
// };
//
// console.log(arr([6, 3, 5, 7, 9]));

//TODO:object
//
// const teacher = {
//   name: "parvez",
//   subject: "bengali",
//   age: 27,
//   town: "basirhat",
// };
//
// const tree = {
//   nameOfTheTree: "mango",
//   height: "1.74cm",
//   age: "2 years",
//   fruitName: "mango",
//   "fav fruits": ["mango", "apple", "guava"],
// };
//
// console.log(tree["fav fruits"]);
// console.log(tree["age"]);
//
// const cricketer = {
//   position: 4,
//   specialty: "batter",
//   age: 24,
//   runs: 8000,
// };
//
// console.log(cricketer.position);
// console.log(cricketer["runs"]);
//
// cricketer.position = 1;
// cricketer["runs"] = 9000;
//
// console.log(cricketer.position);
// console.log(cricketer["runs"]);
//
// const college = {
//   name: "parvez",
//   class: [11, 12],
//   events: ["seience fair", "bijoy dibos", "21 feb"],
//   unique: {
//     color: "black",
//     result: {
//       gpa: 5,
//       merit: "top",
//     },
//   },
// };
//
// console.log(college.unique.color);
// console.log(college.unique.result.gpa);
// console.log(college.events[2]);
//
//

// const a = 10;
// let b = 40;

// function xyz(firstNumber) {
//   console.log(firstNumber);
// }
// xyz(b);
//
//
// function gourav() {
//   {
//     var a = 10;
//     console.log(a);
//   }
//
//   console.log(a);
// }
//
// console.log(a);
// gourav();
//
// let a = 23;
//
// function abc() {
//   {
//     let a = 90;
//     console.log(a);
//   }
//   let a = 12;
//
//   console.log(a);
// }
// console.log(a);
// abc();

let arr = [2, 3, 4, 5, 6];
arr.splice(1, 1, true);

console.log(arr);

// arr.push(23);
// arr.pop();
// arr.unshift(20, 88);
// arr.shift();
