const fruits = ["apple", "mango", "grapes", "litchi"];

// Array property
console.log(fruits.length);

// Method: -> Push()
// Push method allows us to add new element at the last index of the array.

let f1 = fruits.push("watermelon");
console.log(f1);
console.log(fruits);
fruits.push("kiwi");
console.log(fruits);

// Method: -> Pop()
// allows us to remove an element from the last index of the array.
let f2 = fruits.pop();
console.log(f2);
console.log(fruits);

// Method: -> shift()
// shift method allows us to remove an element from the first index of the array.
let f3 = fruits.shift();
console.log(f3);
console.log(fruits);

// Method: -> unshift()
// unshift method allows us to add method add the first index of an array.
let f4 = fruits.unshift("orange");
console.log(f4);
console.log(fruits);

// Method: -> Slice()
// Sliced a portion of an array.
let updatedArray = fruits.slice(-4, -2);
console.log(updatedArray);
console.log(fruits);

// Method: -> Splice()
// allows us to insert, delete new elements from any middle index of an array.
let splicedArray = fruits.splice(3, 1, "coconut", "strawberry");
console.log(splicedArray);
console.log(fruits);

// Method: -> toString()
// toString method allows us to covert an array to a string.
let color = ["red", "pink", "ornage", "yellow"];
let c1 = color.toString();
console.log(c1);
console.log(color);

// Method: -> join()
// join method allows us to specify the seperator used to between the converted string values.
let c2 = color.join("|");
console.log(c2);
console.log(color);

// Method: -> indexOf()
// indexof method returns the index of the first match.
let newArray = ["burger", "pizza", "doughnut", "chips", "burger"];
let n1 = newArray.indexOf("burger");
let n2 = newArray.indexOf("nuggest");
console.log(newArray);
console.log(n1);
console.log(n2);

// Method: -> lastIndexOf()
// lastIndexOf method returns the index of the last match.
let n3 = newArray.lastIndexOf("burger");
console.log(n3);

// Method: ->  Find all method
// Find method allows us to return the first match from an array that passed a given test condition.
let numArray = [20, 24, 28, 26, 38, 48, 32, 78, 10];
let output = numArray.find(findNum);

// findLast method allows us to return the last match element that has passed a certain test condition.
let output1 = numArray.findLast(findNum);

// findLastIndex method returns the index of the last matched element that has passed a certain test condition.
let output2 = numArray.findIndex(findNum);

let output3 = numArray.findLastIndex(findNum);

function findNum(value) {
  return value > 25;
}

console.log(numArray);
console.log(output);
console.log(output1);
console.log(output2);
console.log(output3);

// Method: -> filter()
// filter method doesn't modify the original array, rather it's return a new array with the filtered values that has passed a certain test condition.

let fillArray = [50, 60, 67, 88, 80, 90];
let check = fillArray.filter((val) => {
  return val >= 70;
});

console.log(fillArray);
console.log(check);
