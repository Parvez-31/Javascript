// One parameter
const square = function (x) {
  return x * x;
};

console.log(square(12));

// No parameter
const makeNoise = function () {
  console.log("Pling!");
};

makeNoise();

// Multiple parameter
const roundTo = function (n, step) {
  let remainder = n % step; // 3
  return n - remainder + (remainder < step / 2 ? 0 : step);
};

console.log(roundTo(23, 10));

// console.log(23 % 10);

// Binding and scopes
const halve = function (n) {
  return n / 2;
};

let n = 10;
console.log(halve(100));
console.log(n);

// Nested scope

// Lexical Scoping মানে:

//কোন ভেরিয়েবল কোথায় থাকবে,    সেটা ঠিক হয় কোড কোথায় লেখা হয়েছে তার উপর, function কখন call হলো তার উপর না।

const hummus = function (factor) {
  const ingredient = function (amount, unit, name) {
    let ingredientAmount = amount * factor;
    if (ingredientAmount > 1) {
      unit = unit + "s";
    }
    console.log(`${ingredientAmount} ${unit} ${name}`);
  };
  ingredient(1, "can", "chickpeas");

  ingredient(0.25, "cup", "tahini");
  ingredient(0.25, "cup", "lemon juice");
  ingredient(1, "clove", "grlic");
  ingredient(2, "tablespoon", "olive oil");
  ingredient(0.5, "teaspoon", "cumin");
};

hummus(50);

// Functions as values
/*
let launchMissiles = function () {
  missileSystem.launch("now");
};

if (safeMode) {
  launchMissiles = function () {
    console.log("Missiles launched!");
  };
}
*/

let sum = function (a, b) {
  return a + b;
};

let anotherSum = sum;
console.log(anotherSum(2, 5));

function doSomethings(fn) {
  fn();
}

doSomethings(function () {
  console.log("Hello!");
});

// Declaration notion
console.log("The future says:", future());

function future() {
  return "You will never have flying cars";
}

// arrow function
const roundOne = (n, step) => {
  let remainder = n % step; // 0
  return n - remainder + (remainder < step / 2 ? 0 : step);
};

console.log(roundOne(20, 10));

// The call stack
function greet(who) {
  console.log("Hello" + who);
}
greet("Parvez");
console.log("Bye");

//------------------------------------------
// function chicken() {
//   return egg();
// }

// function egg() {
//   return chicken();
// }
// console.log(chicken() + " come first.");

// Optional Arguments

function squares(x) {
  return x * x;
}
console.log(squares(4, true, "parvez"));

function minus(a, b) {
  if (b === undefined) {
    return -a;
  } else {
    return a - b;
  }
}
console.log(minus(10));
console.log(minus(10, 5));

function roundTwo(n, step = 1) {
  const remainder = n % step;
  return n - remainder + (remainder < step / 2 ? 0 : step);
}

console.log(roundTwo(4.5));
console.log(roundTwo(4.5, 2));

//before ecmascript
// named function

function addition(num1, num2) {
  let total = num1 + num2;
  return total;
}

// let result = addition(24,38)
// console.log(result)
console.log(addition(24, 38));

// after ecmascript
// arrow function is donated by => notation

let show = (a1, a2) => {
  if (a1 >= 15 && a1 > a2) {
    return a1 % a2;
  } else {
    return a1 * a2;
  }
};

let result = show(25, 6);
console.log(result);
let res2 = show(4, 8);
console.log(res2);

// anonymous function
let data = function () {
  console.log("hello world");
};
data();

// callback function
let displayFun = (value) => {
  console.log("The output is : ", value);
};

let check = (m1, m2) => {
  if (m1 === m2) {
    let data = "No data to be returned";
    return data;
  } else if (m1 > m2) {
    let data = "The first number is greater";
    return data;
  } else {
    let data = "The first number is not greater";
    return data;
  }
};
displayFun(check(45, 48));
displayFun(check(100, 22));

// first class function
let formalGreetings = () => {
  console.log("Hello i am a formal message");
};

let casualGreatings = () => {
  console.log("hey! what's up");
};

let greatings = (type, formalGreetings, casualGreatings) => {
  if (type === "formal") {
    formalGreetings();
  } else if (type === "casual") {
    casualGreatings();
  }
};
greatings("formal", formalGreetings, casualGreatings);
greatings("casual", formalGreetings, casualGreatings);

// Higher order function
let product = (num) => {
  return function () {
    return num * 2;
  };
};

let resultProduct = product(6);
console.log(resultProduct());

// closure
const outerFunction = () => {
  let counter = 0;
  function innerFunction() {
    return ++counter;
    // console.log(counter);
  }
  return innerFunction;
};

let counter = outerFunction();
console.log(counter());
console.log(counter());
console.log(counter());
// ---------------------------

const myCounter = () => {
  let counter = 0;

  return () => {
    return (counter = counter + 1);
  };
};
