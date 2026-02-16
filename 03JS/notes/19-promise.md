# Lecture 19: Promise in JS

The **`Promise`** object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

### First Principle: A Promise is a Placeholder

### Promise Characteristics:

1. **A Promise is an object** - You can store it in a variable
2. **Represents future value** - The value isn't available yet, but will be
3. **Has states** - It changes state over time
4. **One-time use** - Once settled, it never changes

---

## Promise States (First Principles)

A Promise can be in **exactly ONE** of three states at any time:

```jsx
┌─────────────────────────────────────────┐
│           PROMISE STATES                │
└─────────────────────────────────────────┘

1. PENDING (Initial state)
   ↓
   "I'm working on it..."
   ↓
   ├── Success → 2. FULFILLED (Resolved)
   │             "I got the result!"
   │
   └── Failure → 3. REJECTED
                 "Something went wrong!"

Once FULFILLED or REJECTED, the promise is SETTLED (final)

```

### Visual Example:

```jsx
// Create a promise
const myPromise = new Promise((resolve, reject) => {
    // At this moment: Promise is PENDING

    setTimeout(() => {
        const success = true;

        if (success) {
            resolve("Success!"); // → Promise becomes FULFILLED
        } else {
            reject("Failed!");   // → Promise becomes REJECTED
        }
    }, 2000);
});

// myPromise is PENDING for 2 seconds
// Then becomes FULFILLED with value "Success!"

```

### State Transitions:

```jsx
const promise = new Promise((resolve, reject) => {
    console.log("State: PENDING");

    setTimeout(() => {
        resolve("Done");
        console.log("State: FULFILLED");

        // ❌ This does nothing - promise is already settled!
        reject("Error"); // Ignored!
        resolve("Again"); // Ignored!
    }, 1000);
});

// Key Point: A promise can only settle ONCE

```

---

## Creating Promises

### Basic Syntax:

```jsx
const promise = new Promise((resolve, reject) => {
    // executor function
    // This runs IMMEDIATELY when promise is created
});

```

### The Executor Function:

```jsx
new Promise((resolve, reject) => {
    // Two parameters:
    // - resolve: function to call when operation succeeds
    // - reject: function to call when operation fails

    // Your async operation here
});

```

### Example 1: Simple Promise

```jsx
const simplePromise = new Promise((resolve, reject) => {
    resolve("Hello!");
});

// This promise immediately resolves with "Hello!"

```

### Example 2: Promise with setTimeout

```jsx
const delayedPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Done after 2 seconds");
    }, 2000);
});

```

### Example 3: Promise with Conditional Logic

```jsx
function checkAge(age) {
    return new Promise((resolve, reject) => {
        if (age >= 18) {
            resolve("Access granted");
        } else {
            reject("Access denied - Too young");
        }
    });
}

// Usage:
const ageCheck = checkAge(20); // Returns a promise

```

### Example 4: Real-World - Simulating API Call

```jsx
function fetchUserData(userId) {
    return new Promise((resolve, reject) => {
        console.log(`Fetching user ${userId}...`);

        setTimeout(() => {
            // Simulate successful API response
            const user = {
                id: userId,
                name: "John Doe",
                email: "john@example.com"
            };

            resolve(user);
        }, 2000);
    });
}

```

### Example 5: Promise with Error Handling

```jsx
function divideNumbers(a, b) {
    return new Promise((resolve, reject) => {
        if (b === 0) {
            reject("Cannot divide by zero!");
        } else {
            resolve(a / b);
        }
    });
}

```

---

## Consuming Promises

Once you have a promise, you need to **consume** it to get the result.

### Method 1: Using .then()

```jsx
promise.then((result) => {
    // This function runs when promise is FULFILLED
    console.log(result);
});

```

### Method 2: Using .catch()

```jsx
promise.catch((error) => {
    // This function runs when promise is REJECTED
    console.error(error);
});

```

### Method 3: Using .finally()

```jsx
promise.finally(() => {
    // This runs ALWAYS, whether fulfilled or rejected
    console.log("Promise settled");
});

```

### Complete Example:

```jsx
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = Math.random() > 0.5;

            if (success) {
                resolve({ data: "Some data" });
            } else {
                reject("Network error");
            }
        }, 1000);
    });
}

// Consuming the promise:
fetchData()
    .then((result) => {
        console.log("Success:", result);
    })
    .catch((error) => {
        console.error("Error:", error);
    })
    .finally(() => {
        console.log("Request completed");
    });

```

### Understanding .then() Parameters:

`.then()` can actually take TWO functions:

```jsx
promise.then(
    (result) => {
        // Success handler
        console.log("Success:", result);
    },
    (error) => {
        // Error handler (optional)
        console.error("Error:", error);
    }
);

// But it's better to use .catch() for errors:
promise
    .then((result) => {
        console.log("Success:", result);
    })
    .catch((error) => {
        console.error("Error:", error);
    });

```

---

## Promise Chaining (The Power of Promises!)

This is where Promises truly shine - **flat, sequential async operations**.

### First Principle: .then() Returns a New Promise

```jsx
promise
    .then((result) => {
        // Whatever you return here becomes the value
        // of the NEXT .then()
        return result * 2;
    })
    .then((doubledResult) => {
        console.log(doubledResult);
    });

```

### Example 1: Basic Chaining

```jsx
Promise.resolve(5)
    .then((value) => {
        console.log(value); // 5
        return value * 2;
    })
    .then((value) => {
        console.log(value); // 10
        return value + 3;
    })
    .then((value) => {
        console.log(value); // 13
    });

```

### Example 2: Chaining Async Operations

```jsx
function step1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Step 1 complete");
            resolve("Result from step 1");
        }, 1000);
    });
}

function step2(previousResult) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Step 2 complete, got:", previousResult);
            resolve("Result from step 2");
        }, 1000);
    });
}

function step3(previousResult) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Step 3 complete, got:", previousResult);
            resolve("Final result");
        }, 1000);
    });
}

// ✅ Clean chain (no nesting!)
step1()
    .then((result1) => {
        return step2(result1);
    })
    .then((result2) => {
        return step3(result2);
    })
    .then((finalResult) => {
        console.log("All done:", finalResult);
    })
    .catch((error) => {
        console.error("Something failed:", error);
    });

// Even cleaner (shorthand):
step1()
    .then(step2)
    .then(step3)
    .then((finalResult) => {
        console.log("All done:", finalResult);
    })
    .catch((error) => {
        console.error("Something failed:", error);
    });

```

### 

## The .finally() Method

`.finally()` runs **regardless** of whether the promise succeeds or fails.

### When to Use .finally()

Use `.finally()` for **cleanup code** that must always run:

- Hide loading spinners
- Close database connections
- Re-enable buttons
- Stop timers
- Release resources

### Example 1: Loading Spinner

```jsx
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = Math.random() > 0.5;
            if (success) {
                resolve({ data: "Data loaded" });
            } else {
                reject("Failed to load");
            }
        }, 2000);
    });
}

// Show spinner
console.log("🔄 Loading...");
let isLoading = true;

fetchData()
    .then((result) => {
        console.log("✅ Success:", result);
    })
    .catch((error) => {
        console.error("❌ Error:", error);
    })
    .finally(() => {
        // Always runs - hide spinner
        isLoading = false;
        console.log("⏹️ Loading stopped");
    });

```

### Example 2: Database Connection

```jsx
function queryDatabase(query) {
    let connection;

    return connectToDatabase()
        .then((conn) => {
            connection = conn;
            return connection.execute(query);
        })
        .then((results) => {
            console.log("Query results:", results);
            return results;
        })
        .catch((error) => {
            console.error("Query failed:", error);
            throw error;
        })
        .finally(() => {
            // Always close connection
            if (connection) {
                connection.close();
                console.log("Connection closed");
            }
        });
}

```

### Key Characteristics of .finally()

1. **Doesn't receive any arguments**

```jsx
promise
    .then((result) => {
        console.log("Result:", result); // Has result
    })
    .catch((error) => {
        console.log("Error:", error); // Has error
    })
    .finally(() => {
        // No arguments!
        console.log("Done");
    });

```

1. **Doesn't change the promise value**

```jsx
Promise.resolve("Original")
    .finally(() => {
        return "Modified"; // Ignored!
    })
    .then((value) => {
        console.log(value); // Still "Original"
    });

```

1. **But if .finally() throws, that error propagates**

```jsx
Promise.resolve("Success")
    .finally(() => {
        throw new Error("Cleanup failed");
    })
    .then((value) => {
        console.log(value); // SKIPPED
    })
    .catch((error) => {
        console.error(error.message); // "Cleanup failed"
    });

```