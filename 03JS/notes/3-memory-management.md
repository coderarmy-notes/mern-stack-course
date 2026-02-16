# Lecture 03: V8 Engine (Memory Allocation)

Memory Ram architecture

Fixed Size data: Stack, dynamic size: Heap

4 bit architecture

Garbage Collector

Chart table

| Unit | Symbol | Conversion | In Bytes |
| --- | --- | --- | --- |
| **Byte** | B | Base unit | 1 B |
| **Kilobyte** | KB | 1 KB = 1024 B | 2¹⁰ B |
| **Megabyte** | MB | 1 MB = 1024 KB | 2²⁰ B = 1,048,576 B |
| **Gigabyte** | GB | 1 GB = 1024 MB | 2³⁰ B = 1,073,741,824 B |
| **Terabyte** | TB | 1 TB = 1024 GB | 2⁴⁰ B ≈ 1.1 trillion B |
| **Petabyte** | PB | 1 PB = 1024 TB | 2⁵⁰ B ≈ 1.13 quadrillion B |
| **Exabyte** | EB | 1 EB = 1024 PB | 2⁶⁰ B ≈ 1.15 quintillion B |
| **Zettabyte** | ZB | 1 ZB = 1024 EB | 2⁷⁰ B ≈ 1.18 sextillion B |
| **Yottabyte** | YB | 1 YB = 1024 ZB | 2⁸⁰ B ≈ 1.21 septillion B |

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
| number (small integer) | Stack (as a Smi) |
| number (float/large int) | Heap (variable on Stack holds a pointer) |
| string | Heap (variable on Stack holds a pointer) |
| boolean | Heap (variable on Stack holds a pointer to a singleton) |
| null | Heap (variable on Stack holds a pointer to a singleton) |
| undefined | Heap (variable on Stack holds a pointer to a singleton) |
| symbol / bigint | Heap (variable on Stack holds a pointer) |
| object / array | Heap (variable on Stack holds a pointer) |