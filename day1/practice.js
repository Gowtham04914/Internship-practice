const add = (a, b) => a + b;
console.log(add(2, 3));

// 1. let and const
let a = 10;
a = 20;
const b = 30;
// b = 40;  // Error

console.log("let:", a);
console.log("const:", b);

// 2. Arrow function
const add = (x, y) => x + y;
console.log("Arrow add:", add(5, 3));

// 3. Template literals
const name = "Gowtham";
console.log(`Hello, ${name}! Welcome to Day 1.`);

// 4. Destructuring
const user = { id: 1, username: "john" };
const { id, username } = user;
console.log("Destructured:", id, username);

const arr = [10, 20, 30];
const [first, second] = arr;
console.log("Array destructuring:", first, second);

// 5. Spread operator
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log("Spread:", arr2);

// Rest operator
function sum(...nums) {
  return nums.reduce((acc, val) => acc + val, 0);
}
console.log("Rest sum:", sum(1, 2, 3, 4));

// 6. Promises
const fetchData = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve("Data loaded"), 1000);
  });

fetchData().then((res) => console.log("Promise:", res));

// 7. async/await
async function load() {
  const result = await fetchData();
  console.log("Async/Await:", result);
}

load();
