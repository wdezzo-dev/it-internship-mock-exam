import { Question } from '../types';

export const javascriptQuestions: Question[] = [
  {
    id: 'js-1',
    question: 'What is the output of `typeof null` in JavaScript?',
    options: ['"null"', '"object"', '"undefined"', '"boolean"'],
    correctAnswer: 1,
    explanation: 'This is a well-known bug in JavaScript. `typeof null` returns "object" even though null is not an object.'
  },
  {
    id: 'js-2',
    question: 'Which method is used to convert a JSON string into a JavaScript object?',
    options: ['JSON.stringify()', 'JSON.parse()', 'JSON.convert()', 'JSON.toObject()'],
    correctAnswer: 1,
    explanation: 'JSON.parse() takes a JSON string and transforms it into a JavaScript object.'
  },
  {
    id: 'js-3',
    question: 'What does the `===` operator do in JavaScript?',
    options: ['Assigns a value', 'Compares values only', 'Compares values and types', 'Compares references only'],
    correctAnswer: 2,
    explanation: 'The strict equality operator (===) checks both value and type without type coercion.'
  },
  {
    id: 'js-4',
    question: 'Which keyword is used to declare a constant in JavaScript?',
    options: ['var', 'let', 'const', 'constant'],
    correctAnswer: 2,
    explanation: '`const` declares a block-scoped constant whose value cannot be reassigned.'
  },
  {
    id: 'js-5',
    question: 'What is a closure in JavaScript?',
    options: [
      'A way to close the browser window',
      'A function that has access to variables from its outer scope',
      'A method to end a loop',
      'A type of error handling'
    ],
    correctAnswer: 1,
    explanation: 'A closure is a function that retains access to variables from its lexical scope even after the outer function has returned.'
  },
  {
    id: 'js-6',
    question: 'Which array method creates a new array with the results of calling a function on every element?',
    options: ['forEach()', 'map()', 'filter()', 'reduce()'],
    correctAnswer: 1,
    explanation: 'map() creates a new array populated with the results of calling a provided function on every element.'
  },
  {
    id: 'js-7',
    question: 'What is the purpose of the `async` keyword in JavaScript?',
    options: [
      'Makes a function synchronous',
      'Declares a function that returns a Promise',
      'Pauses execution',
      'Creates a new thread'
    ],
    correctAnswer: 1,
    explanation: 'The async keyword declares an asynchronous function that implicitly returns a Promise.'
  },
  {
    id: 'js-8',
    question: 'What will `console.log(0.1 + 0.2 === 0.3)` output?',
    options: ['true', 'false', 'undefined', 'NaN'],
    correctAnswer: 1,
    explanation: 'Due to floating-point precision issues, 0.1 + 0.2 equals 0.30000000000000004, not exactly 0.3.'
  },
  {
    id: 'js-9',
    question: 'Which of the following is NOT a JavaScript data type?',
    options: ['Symbol', 'BigInt', 'Float', 'undefined'],
    correctAnswer: 2,
    explanation: 'Float is not a JavaScript data type. JavaScript uses "number" for all numeric values (both integer and floating-point).'
  },
  {
    id: 'js-10',
    question: 'What does the `spread operator (...)` do?',
    options: [
      'Spreads errors across functions',
      'Expands an iterable into individual elements',
      'Creates a new variable',
      'Deletes array elements'
    ],
    correctAnswer: 1,
    explanation: 'The spread operator expands an iterable (like an array) into individual elements.'
  },
  {
    id: 'js-11',
    question: 'What is event delegation in JavaScript?',
    options: [
      'Assigning events to every child element',
      'Using a parent element to handle events for its children',
      'Removing event listeners',
      'Creating custom events'
    ],
    correctAnswer: 1,
    explanation: 'Event delegation uses event bubbling to handle events at a higher level in the DOM rather than attaching handlers to individual elements.'
  },
  {
    id: 'js-12',
    question: 'What is the difference between `let` and `var`?',
    options: [
      'No difference',
      '`let` is function-scoped, `var` is block-scoped',
      '`let` is block-scoped, `var` is function-scoped',
      '`let` cannot be reassigned'
    ],
    correctAnswer: 2,
    explanation: '`let` is block-scoped (limited to the block where defined), while `var` is function-scoped.'
  },
  {
    id: 'js-13',
    question: 'What does `Promise.all()` do?',
    options: [
      'Resolves when the first promise resolves',
      'Resolves when all promises resolve, rejects if any reject',
      'Always resolves regardless of individual promise results',
      'Runs promises sequentially'
    ],
    correctAnswer: 1,
    explanation: 'Promise.all() takes an array of promises and resolves when all of them resolve. It rejects immediately if any promise rejects.'
  },
  {
    id: 'js-14',
    question: 'Which method removes the last element from an array and returns it?',
    options: ['shift()', 'pop()', 'splice()', 'slice()'],
    correctAnswer: 1,
    explanation: 'pop() removes the last element from an array and returns that element.'
  },
  {
    id: 'js-15',
    question: 'What is hoisting in JavaScript?',
    options: [
      'Moving code to a server',
      'Declarations are moved to the top of their scope before execution',
      'A design pattern',
      'A way to optimize code'
    ],
    correctAnswer: 1,
    explanation: 'Hoisting is JavaScript\'s default behavior of moving declarations to the top of the current scope during compilation.'
  },
  {
    id: 'js-16',
    question: 'What is the output of `console.log(typeof NaN)`?',
    options: ['"NaN"', '"undefined"', '"number"', '"object"'],
    correctAnswer: 2,
    explanation: 'NaN (Not a Number) is ironically of type "number" in JavaScript.'
  },
  {
    id: 'js-17',
    question: 'What does `Array.prototype.reduce()` do?',
    options: [
      'Reduces the size of an array',
      'Filters elements from an array',
      'Executes a reducer function on each element, resulting in a single value',
      'Removes duplicate elements'
    ],
    correctAnswer: 2,
    explanation: 'reduce() executes a reducer function on each element of the array, resulting in a single output value.'
  },
  {
    id: 'js-18',
    question: 'What is the purpose of `Object.freeze()`?',
    options: [
      'Deletes an object',
      'Prevents adding, removing, or modifying properties',
      'Creates a deep copy',
      'Converts object to string'
    ],
    correctAnswer: 1,
    explanation: 'Object.freeze() freezes an object, preventing new properties from being added and existing properties from being modified or removed.'
  },
  {
    id: 'js-19',
    question: 'What is a callback function?',
    options: [
      'A function that calls itself',
      'A function passed as an argument to another function',
      'A function that returns another function',
      'A function called by the browser'
    ],
    correctAnswer: 1,
    explanation: 'A callback is a function passed as an argument to another function, to be executed later.'
  },
  {
    id: 'js-20',
    question: 'Which statement about arrow functions is TRUE?',
    options: [
      'They have their own `this` context',
      'They cannot take parameters',
      'They inherit `this` from the enclosing scope',
      'They must always use curly braces'
    ],
    correctAnswer: 2,
    explanation: 'Arrow functions do not have their own `this` context; they inherit it from the enclosing lexical scope.'
  },
  {
    id: 'js-21',
    question: 'What does `setTimeout` return?',
    options: ['undefined', 'A Promise', 'A timer ID (number)', 'null'],
    correctAnswer: 2,
    explanation: 'setTimeout returns a numeric timer ID that can be used with clearTimeout to cancel the timer.'
  },
  {
    id: 'js-22',
    question: 'What is destructuring in JavaScript?',
    options: [
      'Destroying variables',
      'Extracting values from arrays or objects into distinct variables',
      'Removing properties from objects',
      'Breaking code into modules'
    ],
    correctAnswer: 1,
    explanation: 'Destructuring allows you to unpack values from arrays or properties from objects into distinct variables.'
  },
  {
    id: 'js-23',
    question: 'What is the event loop in JavaScript?',
    options: [
      'A loop that iterates over events',
      'A mechanism that handles asynchronous callbacks by checking the call stack and task queue',
      'A method for creating events',
      'A type of for loop'
    ],
    correctAnswer: 1,
    explanation: 'The event loop continuously checks if the call stack is empty and pushes callbacks from the task queue to the call stack.'
  },
  {
    id: 'js-24',
    question: 'What is the difference between `null` and `undefined`?',
    options: [
      'They are the same',
      '`null` is an intentional absence of value; `undefined` means a variable has been declared but not assigned',
      '`undefined` is an intentional absence of value; `null` means not declared',
      '`null` is for numbers, `undefined` is for strings'
    ],
    correctAnswer: 1,
    explanation: '`null` represents an intentional absence of any value, while `undefined` means a variable has been declared but not yet assigned a value.'
  },
  {
    id: 'js-25',
    question: 'Which method is used to add one or more elements to the beginning of an array?',
    options: ['push()', 'unshift()', 'concat()', 'splice()'],
    correctAnswer: 1,
    explanation: 'unshift() adds one or more elements to the beginning of an array and returns the new length.'
  },
  {
    id: 'js-26',
    question: 'What does `"use strict"` do in JavaScript?',
    options: [
      'Makes the code run faster',
      'Enables strict mode which catches common coding errors and prevents unsafe actions',
      'Enforces TypeScript rules',
      'Disables console.log'
    ],
    correctAnswer: 1,
    explanation: '"use strict" enables strict mode which helps catch common coding mistakes and prevents the use of certain error-prone features.'
  },
  {
    id: 'js-27',
    question: 'What is the purpose of the `fetch` API?',
    options: [
      'To fetch data from the DOM',
      'To make HTTP requests to servers',
      'To import modules',
      'To get user input'
    ],
    correctAnswer: 1,
    explanation: 'The Fetch API provides a modern interface for making HTTP requests to servers and returns Promises.'
  },
  {
    id: 'js-28',
    question: 'What is a JavaScript module?',
    options: [
      'A separate HTML file',
      'A reusable piece of code that can be exported and imported',
      'A CSS framework',
      'A type of variable'
    ],
    correctAnswer: 1,
    explanation: 'A module is a file containing reusable code that can export functions, objects, or values for use in other files via import.'
  },
  {
    id: 'js-29',
    question: 'What does `Object.keys()` return?',
    options: [
      'An array of the object\'s values',
      'An array of the object\'s property names',
      'The number of properties',
      'A new object'
    ],
    correctAnswer: 1,
    explanation: 'Object.keys() returns an array of a given object\'s own enumerable property names.'
  },
  {
    id: 'js-30',
    question: 'What is optional chaining (`?.`) in JavaScript?',
    options: [
      'A way to create optional parameters',
      'Safely accesses nested object properties without error if a reference is nullish',
      'A ternary operator shorthand',
      'A way to chain promises'
    ],
    correctAnswer: 1,
    explanation: 'Optional chaining (?.) allows reading the value of a property deep in a chain of objects without having to check each reference.'
  },
  {
    id: 'js-31',
    question: 'What is the difference between `==` and `===`?',
    options: [
      'No difference',
      '`==` compares with type coercion, `===` compares without type coercion',
      '`===` compares with type coercion, `==` compares without',
      '`==` is for strings, `===` is for numbers'
    ],
    correctAnswer: 1,
    explanation: '`==` performs type coercion before comparison, while `===` (strict equality) compares both value and type without coercion.'
  },
  {
    id: 'js-32',
    question: 'What is `this` keyword in JavaScript?',
    options: [
      'Always refers to the global object',
      'Refers to the current function',
      'Refers to the object that is executing the current function',
      'Is always undefined'
    ],
    correctAnswer: 2,
    explanation: '`this` refers to the object that is executing the current function. Its value depends on how the function is called.'
  },
  {
    id: 'js-33',
    question: 'What is a template literal in JavaScript?',
    options: [
      'A string wrapped in single quotes',
      'A string wrapped in backticks that allows embedded expressions',
      'A predefined string template',
      'A way to create HTML templates'
    ],
    correctAnswer: 1,
    explanation: 'Template literals use backticks (`) and allow embedded expressions using ${expression} syntax, as well as multiline strings.'
  },
  {
    id: 'js-34',
    question: 'What does `Array.isArray()` do?',
    options: [
      'Creates a new array',
      'Checks if a value is an array',
      'Converts a value to an array',
      'Returns the array length'
    ],
    correctAnswer: 1,
    explanation: 'Array.isArray() determines whether the passed value is an Array, returning true or false.'
  },
  {
    id: 'js-35',
    question: 'What is the purpose of `try...catch` in JavaScript?',
    options: [
      'To loop through arrays',
      'To handle errors and exceptions gracefully',
      'To try different variable values',
      'To test code performance'
    ],
    correctAnswer: 1,
    explanation: 'try...catch allows you to handle errors gracefully by catching exceptions that occur in the try block.'
  },
  {
    id: 'js-36',
    question: 'What is the difference between `slice()` and `splice()`?',
    options: [
      'They are the same',
      '`slice()` returns a new array without modifying original; `splice()` modifies the original array',
      '`splice()` returns a new array; `slice()` modifies the original',
      '`slice()` is for strings, `splice()` is for arrays'
    ],
    correctAnswer: 1,
    explanation: 'slice() returns a shallow copy of a portion of an array without modifying it. splice() changes the original array by adding/removing elements.'
  },
  {
    id: 'js-37',
    question: 'What is the `Map` object in JavaScript?',
    options: [
      'Same as Array.map()',
      'A collection of key-value pairs where keys can be any type',
      'A function to create maps',
      'A CSS mapping tool'
    ],
    correctAnswer: 1,
    explanation: 'Map is a collection of key-value pairs where keys can be of any type (unlike objects where keys are strings/symbols).'
  },
  {
    id: 'js-38',
    question: 'What is the `Set` object in JavaScript?',
    options: [
      'A way to set variable values',
      'A collection of unique values',
      'A setter function',
      'A configuration object'
    ],
    correctAnswer: 1,
    explanation: 'Set is a collection that stores unique values of any type. Duplicate values are automatically removed.'
  },
  {
    id: 'js-39',
    question: 'What does `JSON.stringify()` do?',
    options: [
      'Parses a JSON string',
      'Converts a JavaScript object to a JSON string',
      'Validates JSON',
      'Creates a new JSON file'
    ],
    correctAnswer: 1,
    explanation: 'JSON.stringify() converts a JavaScript object or value to a JSON string.'
  },
  {
    id: 'js-40',
    question: 'What is the Nullish Coalescing Operator (??)?',
    options: [
      'Same as the OR operator (||)',
      'Returns the right operand when the left is null or undefined',
      'Checks if a value is NaN',
      'A bitwise operator'
    ],
    correctAnswer: 1,
    explanation: 'The ?? operator returns the right-hand operand when the left-hand operand is null or undefined (not for falsy values like 0 or "").'
  },
  {
    id: 'js-41',
    question: 'What is a Generator function in JavaScript?',
    options: [
      'A function that generates random numbers',
      'A function that can be paused and resumed using yield',
      'A function that creates objects',
      'A function that runs automatically'
    ],
    correctAnswer: 1,
    explanation: 'Generator functions (function*) can be paused and resumed, yielding multiple values on demand using the yield keyword.'
  },
  {
    id: 'js-42',
    question: 'What does `localStorage` do?',
    options: [
      'Stores data on the server',
      'Stores key-value pairs in the browser with no expiration',
      'Creates local variables',
      'Stores data in memory only'
    ],
    correctAnswer: 1,
    explanation: 'localStorage stores key-value pairs in the browser with no expiration date. Data persists even after the browser is closed.'
  },
  {
    id: 'js-43',
    question: 'What is the difference between `for...in` and `for...of`?',
    options: [
      'They are the same',
      '`for...in` iterates over keys/properties; `for...of` iterates over values',
      '`for...of` iterates over keys; `for...in` iterates over values',
      '`for...in` is for arrays only'
    ],
    correctAnswer: 1,
    explanation: '`for...in` iterates over enumerable property names (keys), while `for...of` iterates over iterable values.'
  },
  {
    id: 'js-44',
    question: 'What is `Symbol` in JavaScript?',
    options: [
      'A special character',
      'A unique and immutable primitive data type used as object property keys',
      'A mathematical operator',
      'A type of string'
    ],
    correctAnswer: 1,
    explanation: 'Symbol is a primitive data type that creates unique identifiers, often used as property keys to avoid naming conflicts.'
  },
  {
    id: 'js-45',
    question: 'What does the `new` keyword do in JavaScript?',
    options: [
      'Creates a new variable',
      'Creates an instance of an object from a constructor function',
      'Declares a new function',
      'Imports a new module'
    ],
    correctAnswer: 1,
    explanation: 'The `new` keyword creates an instance of an object, setting up the prototype chain and calling the constructor function.'
  },
  {
    id: 'js-46',
    question: 'What is `WeakMap` in JavaScript?',
    options: [
      'A Map with fewer features',
      'A Map where keys are weakly referenced and must be objects',
      'A Map that expires after time',
      'A slower version of Map'
    ],
    correctAnswer: 1,
    explanation: 'WeakMap holds weak references to key objects, allowing them to be garbage collected if there are no other references.'
  },
  {
    id: 'js-47',
    question: 'What is the `Proxy` object in JavaScript?',
    options: [
      'A network proxy configuration',
      'An object that wraps another object and intercepts operations like property access',
      'A copy of an object',
      'A type of Promise'
    ],
    correctAnswer: 1,
    explanation: 'Proxy allows you to create a wrapper for another object that can intercept and redefine fundamental operations.'
  },
  {
    id: 'js-48',
    question: 'What is `requestAnimationFrame` used for?',
    options: [
      'Loading images',
      'Scheduling a function to run before the next repaint for smooth animations',
      'Creating CSS animations',
      'Fetching animation data'
    ],
    correctAnswer: 1,
    explanation: 'requestAnimationFrame tells the browser to call a specified function before the next repaint, enabling smooth animations.'
  },
  {
    id: 'js-49',
    question: 'What is the `Intl` object used for?',
    options: [
      'Internet operations',
      'Internationalization: formatting numbers, dates, and strings per locale',
      'Internal JavaScript operations',
      'Intelligence/AI operations'
    ],
    correctAnswer: 1,
    explanation: 'The Intl object provides language-sensitive string comparison, number formatting, and date/time formatting.'
  },
  {
    id: 'js-50',
    question: 'What does `Object.assign()` do?',
    options: [
      'Compares two objects',
      'Copies properties from one or more source objects to a target object',
      'Creates a deep clone',
      'Deletes object properties'
    ],
    correctAnswer: 1,
    explanation: 'Object.assign() copies all enumerable own properties from one or more source objects to a target object and returns the target.'
  }
];
