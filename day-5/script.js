// QUESTION: => 1
function fn(originalStr) {
  let reverseStr = originalStr.split("").reverse().join("");

  if (originalStr === reverseStr) {
    return true;
  }
  return false;
}

console.log(fn("level"));

// QUESTION: => 2
const factorial = (n) => {
  let result = 1;

  for (let i = 1; i <= n; i++) {
    result = result * i;
  }
  return result;
};

console.log(factorial(5));

// QUESTION: => 3

const arraySort = function (arr) {
  console.log();
};
arraySort([1, 4, 56, 55, 5, 6, 3]);
