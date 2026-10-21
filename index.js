import formatCurrency, {
  add,
  capitalize,
  APP_VERSION
} from "./utils.js";



// 1. Arrow Functions

const square = (n) => n * n;

const greet = (name) => `Hello, ${name}!`;

const multiply = (a, b) => a * b;

const getFullName = (firstName, lastName) =>
  `${firstName} ${lastName}`;

console.log(square(5));
console.log(greet("Joshua"));
console.log(multiply(4, 3));
console.log(getFullName("Joshua", "Adeoye"));



// 2. Destructuring

const student = {
  name: "Amaka",
  age: 22,
  course: "Frontend Development"
};

const scores = [88, 72, 95, 60, 45];

// Extract name and course
const { name, course } = student;

console.log(name);
console.log(course);

// Extract age and rename it
const { age: studentAge } = student;

console.log(studentAge);

// Extract the first and second scores
const [firstScore, secondScore] = scores;

console.log(firstScore);
console.log(secondScore);





// 3. Spread Operator

const frontend = ["HTML", "CSS", "JavaScript"];
const backend = ["Node.js", "Express", "MongoDB"];

const userProfile = {
  username: "joshua",
  email: "joshua@example.com",
  role: "student"
};


const fullStack = [...frontend, ...backend];

console.log(fullStack);


const updatedProfile = {
  ...userProfile,
  email: "newemail@example.com"
};

console.log(userProfile);
console.log(updatedProfile);



// 4. Template Literals

const height = 5;
const width = 8;

const area = height * width;

console.log(`The area of the rectangle is ${area} square units.`);





// 5. Array Methods

const products = [
  { name: "Laptop", price: 450000, inStock: true },
  { name: "Mouse", price: 8000, inStock: false },
  { name: "Monitor", price: 120000, inStock: true },
  { name: "Keyboard", price: 15000, inStock: true }
];

const productNames = products.map((product) => product.name);

console.log(productNames);

// Get only products in stock
const inStockProducts = products.filter((product) => product.inStock);

console.log(inStockProducts);

// Get uppercase names of in-stock products
const inStockProductNames = products
  .filter((product) => product.inStock)
  .map((product) => product.name.toUpperCase());

console.log(inStockProductNames);




// 6. Ternary Operator & Logical AND

const role = "editor";
const cartItems = 0;

const access =
  role === "admin"
    ? "Full Access"
    : role === "editor"
    ? "Edit Access"
    : role === "viewer"
    ? "Read Only"
    : "No Access";

console.log(access);


console.log(cartItems && "View Cart");

// Because cartItems is 0 (a falsy value), && returns 0 instead of "View Cart".

// Show "View Cart" only when items exist
const cartMessage = cartItems > 0 && "View Cart";

console.log(cartMessage);


console.log(add(10, 5));
console.log(capitalize("javascript"));
console.log(APP_VERSION);
console.log(formatCurrency(45000));



