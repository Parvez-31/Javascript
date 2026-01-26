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
function chicken() {
  return egg();
}

function egg() {
  return chicken();
}
console.log(chicken() + " come first.");

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
