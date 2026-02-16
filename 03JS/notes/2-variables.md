# Lecture 02: Data Type

## Variable in Javascript

### const

const declares a block-scoped variable with a constant reference.

1. **Scope:** **Block Scope**. A const variable is only accessible within the block ({ ... }) in which it is defined.
2. **Reassignment:** **Not allowed**. A const variable cannot be reassigned a new value after its initial assignment. This will throw a TypeError.
3. **Initialization:** **Mandatory**. A const variable must be initialized at the time of its declaration. Failure to do so results in a SyntaxError.
4. **Hoisting:** const variables are hoisted to the top of their block but are not initialized. They are in a "Temporal Dead Zone" (TDZ) from the start of the block until the declaration is encountered. Accessing a const variable before its declaration results in a ReferenceError.
5. **Mutability:** const only ensures the variable's reference is immutable, not the value it points to. If a const variable holds an object or an array, the properties or elements of that object/array can be modified.

**Example:**

```jsx
// Block Scope
if (true) {
  const PI = 3.14159;
}
// console.log(PI); // ReferenceError: PI is not defined

// Reassignment
const GREETING = "Hello";
// GREETING = "Hi"; // TypeError: Assignment to constant variable.

// Mutability
const CONFIG = { port: 8080 };
CONFIG.port = 3000; // This is allowed. CONFIG still points to the same object.

// Temporal Dead Zone
// console.log(MY_CONST); // ReferenceError: Cannot access 'MY_CONST' before initialization
const MY_CONST = 100;
```

---

### let

let declares a block-scoped variable that can be reassigned.

1. **Scope:** **Block Scope**. A let variable is only accessible within the block ({ ... }) in which it is defined.
2. **Reassignment:** **Allowed**. The value of a let variable can be updated or reassigned within its scope.
3. **Initialization:** **Optional**. A let variable can be declared without being initialized. If not initialized, it defaults to the value undefined.
4. **Hoisting:** let variables are hoisted to the top of their block but are not initialized. They are in the Temporal Dead Zone (TDZ) until their declaration is encountered. Accessing a let variable before its declaration results in a ReferenceError.

**Example:**

```jsx
// Block Scope
for (let i = 0; i < 3; i++) {
  // i is only visible here
}
// console.log(i); // ReferenceError: i is not defined

// Reassignment
let counter = 0;
counter = 1; // This is allowed.

// Initialization
let name; // Allowed. 'name' is now undefined.
name = "Alice";

// Temporal Dead Zone
// console.log(myLetVar); // ReferenceError: Cannot access 'myLetVar' before initialization
let myLetVar = "test";
```

---

### var

var declares a function-scoped or globally-scoped variable that can be reassigned and redeclared. Its use is discouraged in modern JavaScript (ES6+).

1. **Scope:** **Function Scope**. A var variable is accessible throughout the entire function in which it is defined, regardless of block boundaries. If defined outside any function, it has global scope.
2. **Reassignment & Redeclaration:** **Allowed**. A var variable can be reassigned and even redeclared within the same scope without error.
3. **Initialization:** **Optional**. If not initialized, it defaults to the value undefined.
4. **Hoisting:** var declarations are hoisted to the top of their function scope and are initialized with the value undefined. This means they can be accessed before their declaration without a ReferenceError.

**Example:**

```jsx
// Function Scope (not Block Scope)
if (true) {
  var leak = "I am visible outside the if-block";
}
console.log(leak); // Outputs: "I am visible outside the if-block"

// Hoisting Behavior
console.log(myVar); // Outputs: undefined (no error)
var myVar = "Hello";
console.log(myVar); // Outputs: "Hello"

// Redeclaration
var x = 10;
var x = 20; // Allowed. x is now 20.
```

### Summary of Key Differences

| Feature | var | let | const |
| --- | --- | --- | --- |
| **Scope** | Function | Block | Block |
| **Reassignable** | Yes | Yes | No |
| **Redeclarable** | Yes | No | No |
| **Hoisted Value** | undefined | Uninitialized (TDZ) | Uninitialized (TDZ) |
| **Global Object** | Attaches to window | Does not attach | Does not attach |
| **Modern Practice** | Avoid | Use for reassignable variables | Use as default |

## Data Types in Javascript

### Primitive Types

Primitives are fundamental, immutable data types. "Immutable" means that their value cannot be changed once created. Operations that appear to modify a primitive actually create a new one. A variable holding a primitive stores the primitive's value directly.

There are seven primitive types:

### string

- **Purpose:** Represents textual data.
- **Syntax:** A sequence of characters enclosed in single quotes ('...'), double quotes ("..."), or backticks (`...`).

```jsx
let name = "Alice";
let greeting = 'Hello, World!';
let template = `User: ${name}`; // Template literals can embed expressions
```

### number

- **Purpose:** Represents both integer and floating-point numbers.
- **Syntax:** A numeric literal. There is no distinction between int and float.
- **Special Values:** Includes Infinity, -Infinity, and NaN (Not a Number).

```jsx
let integerValue = 100;
let floatValue = 3.14;
let notANumber = NaN; // Result of an invalid math operation like 0 / 0
let infinity = Infinity;
```

### boolean

- **Purpose:** Represents a logical entity with two possible values.
- **Syntax:** The keywords true or false.

```jsx
let isActive = true;
let isComplete = false;
```

### undefined

- **Purpose:** Represents the unintentional absence of a value. A variable that has been declared but not assigned a value is automatically undefined.

```jsx
let user;
console.log(user); // Outputs: undefined
```

### null

- **Purpose:** Represents the intentional absence of any object value. It is a primitive value that is explicitly assigned by a developer to indicate "no value."

```jsx
let data = null; // Intentionally set to have no value
```

- **null vs. undefined:** undefined is the default when nothing is assigned. null is an explicit assignment of "nothing."

### bigint

- **Purpose:** Represents whole numbers larger than the maximum safe integer value that the number type can represent.
- **Syntax:** An integer literal followed by the n suffix.

code JavaScript

```jsx
const veryLargeNumber = 9007199254740991n; // The 'n' makes it a BigInt
const anotherBigInt = BigInt(9007199254740992);
```

### symbol

- **Purpose:** Represents a unique, anonymous identifier. Symbols are primarily used as unique property keys for objects to avoid naming collisions.
- **Syntax:** Created using the Symbol() factory function.

```jsx
const id1 = Symbol('id');
const id2 = Symbol('id');

console.log(id1 === id2); // Outputs: false (every symbol is unique)
```

---

## The Object Type (Non-Primitive)

An object is a mutable collection of key-value pairs (or properties). Unlike primitives, variables assigned to an object do not store the object itself, but rather a **reference** (or a pointer) to the object's location in memory.

- **Object Literals:** The most common way to create an object. code JavaScript
    
    
    ```jsx
    let person = {
      firstName: "John",
      lastName: "Doe",
      age: 30
    };
    ```
    
- **Arrays:** A specialized type of object used for ordered collections. code JavaScript
    
    
    ```jsx
    let numbers = [10, 20, 30, 40];
    ```
    
- **Functions:** In JavaScript, functions are also a special type of object. code JavaScript
    
    
    ```jsx
    function greet() {
      console.log("Hello");
    }
    ```
    
- Other built-in objects include Date, RegExp, Map, Set, etc.

---

### Key Difference: Value vs. Reference

This is the most critical distinction between primitive and object types.

### Primitives are Passed/Assigned by Value

When you assign a primitive from one variable to another, the value is **copied**.

```jsx
let a = 10;
let b = a; // The value 10 is copied into b

b = 20; // This only changes b

console.log(a); // Outputs: 10 (a is unaffected)
console.log(b); // Outputs: 20
```

### Objects are Passed/Assigned by Reference

When you assign an object from one variable to another, the **reference (memory address)** is copied, not the object itself. Both variables point to the same object.

```jsx
let obj1 = { value: 10 };
let obj2 = obj1; // The reference to the object is copied into obj2

// Both obj1 and obj2 now point to the exact same object in memory
obj2.value = 20; // We are modifying the object through obj2

console.log(obj1.value); // Outputs: 20 (obj1 is affected because it points to the same object)
console.log(obj2.value); // Outputs: 20
```

---

### The typeof Operator

To determine the data type of a variable at runtime, you use the typeof operator.

```jsx
typeof "Hello"      // "string"
typeof 42           // "number"
typeof true         // "boolean"
typeof undefined    // "undefined"
typeof 10n          // "bigint"
typeof Symbol('id') // "symbol"

typeof { a: 1 }     // "object"
typeof [1, 2, 3]    // "object"
typeof function(){} // "function" (a special case for functions)
typeof null         // "object" (this is a long-standing, well-known bug in JavaScript)
```

## Where the Data is actually stored?

### The Two Memory Regions in V8

When your JavaScript code runs, the V8 engine manages two primary areas of memory:

1. **The Call Stack:** A highly organized region for managing function execution. It's fast and stores **fixed-size** data. On a 32-bit system, the "slots" on the stack are 32 bits (4 bytes) each.
2. **The Heap:** A large, less organized region for storing data that can change in size or has a longer lifetime. This is where objects, arrays, and other complex data live.

---

### How Primitive Data is Stored (The V8 Reality)

This is where V8's optimizations are critical. It does **not** follow a simple "all primitives on the stack" rule.

### number (The Hybrid Approach)

V8 splits numbers into two types to maximize performance:

1. **Smi (Small Integer):** code JavaScript
    - **What it is:** A 31-bit signed integer. This covers most numbers you use daily (from approx. -1 billion to +1 billion).
    - **How it's stored:** V8 uses a technique called **Pointer Tagging**. A 32-bit slot on the stack is used. The very last bit is a "tag." If this bit is 0, V8 knows the other 31 bits are an actual integer value.
    - **Where it's stored:** **Directly on the Stack.** A Smi is a true primitive in the classic sense. It is never allocated on the heap. This makes integer arithmetic extremely fast.
    
    ```rust
        let loopCounter = 100; // This is a Smi. Its value lives on the stack.
    ```
    
2. **HeapNumber:** code JavaScript
    - **What it is:** Any number that is **not** a Smi. This includes all floating-point numbers (e.g., 19.5) and integers too large to be a Smi.
    - **How it's stored:** The value is "boxed" into a special object on the **Heap**. This object holds the full 64-bit (8-byte) representation of the number.
    - The variable on the **Stack** holds a 32-bit **pointer** (a memory address) to this object on the Heap. The tag bit for this pointer will be 1.
    
    ```jsx
        let price = 19.99; // This is a HeapNumber. 'price' on the stack is a pointer to an object on the heap.
    ```
    

### string

- **How it's stored:** The actual character data of a string is **always on the Heap**. A string can be any length, so it's not suitable for the fixed-size stack.
- **Where it's stored:** The variable on the **Stack** holds a 32-bit **pointer** to the string object on the Heap.

### boolean, null, undefined (The Singleton Objects)

- **How it's stored:** V8 creates **one, single, permanent object for true**, one for false, one for null, and one for undefined when the engine starts. These are called "Oddball" singletons and they live in a read-only part of the **Heap**.
- **Where it's stored:** When you declare let isActive = true;, the isActive variable on the **Stack** simply holds a 32-bit **pointer** to that one global true object on the Heap. This is highly efficient for memory and comparisons.

### symbol and bigint

- **How it's stored:** These are complex types and are always allocated as objects on the **Heap**.
- **Where it's stored:** The variable on the **Stack** holds a 32-bit **pointer** to their object representation on the Heap.

---

### How Non-Primitive Data (Objects) are Stored

This is simpler and more consistent.

- **How it's stored:** An object (or array) and all of its properties and values are allocated on the **Heap**. This is because objects are dynamic; their size can change as you add or remove properties.
- **Where it's stored:** The variable you declare on the **Stack** **always** holds a 32-bit **pointer** to the object's location on the Heap.

---

### Visual Summary: The Complete Picture

Let's trace this code on a 32-bit system:

```jsx
let counter = 10;                // Smi number
let price = 29.99;               // HeapNumber
let name = "Alice";                // String
let isActive = true;             // Boolean
let user = { id: counter };      // Object
```

**Memory Layout:**

```jsx
    [ THE CALL STACK ]                                [ THE HEAP ]
      (Fixed-size, 32-bit slots)                     (Dynamic-size data)
      
      ...
      ---------------------------
      | user:     <ptr 0x50A1>  | -----------------> 0x50A1: { id: 10 }
      |-------------------------|
      | isActive: <ptr 0x0110>  | ------\
      |-------------------------|       |
      | name:     <ptr 0x44B2>  | ----\ |
      |-------------------------|     | |
      | price:    <ptr 0x33C3>  | --\ | |
      |-------------------------|   | | |
      | counter:  10 (as Smi)   |   | | |        (Read-Only Singletons)
      ---------------------------   | | |
                                    | | |----> 0x0110: [ The one 'true' object ]
                                    | |
                                    | \------> 0x44B2: [ String object: "Alice" ]
                                    |
                                    \--------> 0x33C3: [ HeapNumber object: 29.99 ]
```

### Final Conclusion

| Data Type | Stack or Heap? (32-bit V8) |
| --- | --- |
| number (small integer) | **Stack** (as a Smi) |
| number (float/large int) | **Heap** (variable on Stack holds a pointer) |
| string | **Heap** (variable on Stack holds a pointer) |
| boolean | **Heap** (variable on Stack holds a pointer to a singleton) |
| null | **Heap** (variable on Stack holds a pointer to a singleton) |
| undefined | **Heap** (variable on Stack holds a pointer to a singleton) |
| symbol / bigint | **Heap** (variable on Stack holds a pointer) |
| object / array | **Heap** (variable on Stack holds a pointer) |