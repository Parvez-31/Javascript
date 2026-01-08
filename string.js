// What is string in js?
// String in js is used to store text value.

let userName = "Parvez Hossien Tarafder";
let userNameLength = userName.length;
console.log(userNameLength);

// Js always returns length of a string as lastindex + 1.

// Method: -> Slice method
let data = "Hello World!!";
let d = data.slice(0, 8);
console.log(data);
console.log(d);

// NOTE:
// In slice method end position is calculated but value is not included.
// Slice method accepts two parameters(start positon, end positon)
// Slice method is used to extract a part from a string.

let d1 = data.slice(6);
console.log(d1);

let d2 = data.slice(-8, -4);
console.log(d2);

let d3 = data.slice(-3);
console.log(d3);

// Method: -> Substring method
let text = "Hello Monkey";
let t1 = text.substring(5, 10);
console.log(t1);

// NOTE:
// Like slice method, substring is also used to extract a certain part of a string.
// Substring doesn't accept start or end position in negative index.

// Method: -> Replace method
let rt = "Welcome to Flipkart";
let rt1 = rt.replace("Flipkart", "Mintra");
console.log(rt);
console.log(rt1);

// Method:  -> Trim method
let a = "            Hello World                ";
console.log(a.length);
let a1 = a.trimStart();
console.log(a1.length);
console.log(a1);
let a2 = a.trimEnd();
console.log(a2);
// both -trimStart and trimEnd
let a3 = a.trim();
console.log(a3.length);

// Method: -> ReplaceAll method
let t4 = "I love cupcakes as CUPCAKES are delicious.";
let t5 = t4.replaceAll(/cupcakes/gi, "pastries");
console.log(t4);
console.log(t5);

// Method: -> Concat method
let c1 = "Superman";
let c2 = "Batman";
let c3 = c1.concat(" ", c2);
console.log(c3);

// Topic: -> Template string
console.log(`Hello world!! I am your beloved ${c1} and ${c2}`);
