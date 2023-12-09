"use strict";

const information1 = {
  name: "Mariya",
  add: "Puran dhaka-1213",
  age: 22,
};

const information2 = information1;

// console.log(information2);

information2.age = "18+";

const arr = ["a", "b", "c", "d"];
const arr2 = arr;

console.log(arr);
console.log(arr2);

arr2.push(100);

// first class function
// 01.can be stored in a variable.
// 02.passed as arg to other function
// 03.returned as values from other function

const firstClassFn = (a, b) => {
  return a * b;
};

const otherFn = (a, b, fn) => {
  return fn(a, b);
};

console.log(otherFn(4, 5, firstClassFn));

// higher order function (hof)
// callback func

const stylish = document.querySelector(".stylish");

const callback = () => {
  document.body.style.backgroundColor = "aqua";
};

stylish.addEventListener("mouseover", callback);

const callout = () => {
  document.body.style.backgroundColor = "white";
};

stylish.addEventListener("mouseout", callout);

// curying function

function doMath(a) {
  return function (b) {
    return function (c) {
      return function (d) {
        return a + b + c + d;
      };
    };
  };
}

const essayMath = (a) => (b) => (c) => (d) => a + b + c + d; //lambda calculas

console.log(essayMath(10)(5)(4)(9));

// side effect
function lowLable(num1, num2) {
  return num1 * num2;
}

function higherOdr(num1, num2, low) {
  return low(num1, num2);
}

console.log(higherOdr(5, 5, lowLable));

function foodCutter(quantity) {
  return quantity * 4;
}

function addFlovour(pieces, fl) {
  return pieces * fl;
}

function foodBlender(quantity, fl) {
  const pieces = foodCutter(quantity);
  return addFlovour(pieces, fl);
}

console.log(foodBlender(5, 10));

// call()
function greet(greeting, message) {
  return `${greeting}, ${this.name}. ${message}`;
}

const person = { name: "Joya" };

const text = greet.call(person, "Hi", "How are you?");
console.log(text);

// Apply
function greet(greeting, message) {
  return `${greeting}, ${this.name}. ${message}`;
}

const person2 = { name: "Lili" };

const text2 = greet.apply(person2, ["Fine", "What's up?"]);
console.log(text2);

// bind
function binding(reciver1) {
  return `${reciver1}, ${this.name}.You are  ${
    2023 - this.birthYear
  } years old.`;
}

const info1 = { name: "Akhi akter", birthYear: 2004 };
const info2 = { name: "Farhad", birthYear: 200 };
const information = binding.bind(info1);

console.log(information("Hey!"));

// IIFE
(function () {
  console.log("hiii");
})();

// closures
function closuresFuc() {
  const exam = 700;

  function closuresFuc2() {
    return exam;
  }
  return closuresFuc2;
}

const result = closuresFuc();
// console.log(result);
console.log(result());
