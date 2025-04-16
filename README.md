# NodeJS-PiyushGarg

This repository contains Node.js examples demonstrating basic concepts and features.

## Table of Contents

1. [Hello World Example](#hello-world-example)
2. [Modules Example](#modules-example)
3. [File Handling Example](#file-handling-example)

## Hello World Example

This is a simple Node.js program that demonstrates basic console output.

### Code

```javascript
console.log("Hello World from the node js");
console.log("Hey there ! i am javascript");
```

### Running the Program

1. Navigate to the `01_helloWorld` directory
2. Run the program using:
   ```bash
   node hello.js
   ```

### Expected Output

```
Hello World from the node js
Hey there ! i am javascript
```

## Modules Example

This example demonstrates how to create and use modules in Node.js. It includes a math module with basic arithmetic functions.

### Project Structure

- `math.js` - Contains the math module with add and subtract functions
- `app.js` - Main application file that uses the math module

### Code Examples

#### math.js

```javascript
exports.add = (a, b) => a + b;
exports.sub = (a, b) => a - b;
```

#### app.js

```javascript
const { add, sub } = require("./math");

console.log("AddFn", add(34, 9));
console.log("SubFn", sub(34, 8));
```

### Running the Program

1. Navigate to the `02_modules` directory
2. Run the program using:
   ```bash
   node app.js
   ```

### Expected Output

```
AddFn 43
SubFn 26
```

## File Handling Example

This example demonstrates various file operations in Node.js using the built-in `fs` (File System) module.

### Project Structure

- `file.js` - Main file containing file operations examples
- `test.txt` - Sample text file
- `contact.txt` - Sample contact information file
- `my-docs/` - Directory created through file operations

### Features Demonstrated

1. **File Writing**

   - Synchronous writing using `writeFileSync`
   - Asynchronous writing using `writeFile`

2. **File Reading**

   - Synchronous reading using `readFileSync`
   - Asynchronous reading using `readFile`

3. **File Appending**

   - Appending content to files using `appendFileSync`

4. **File Operations**

   - Copying files using `cpSync`
   - Deleting files using `unlinkSync`
   - Getting file statistics using `statSync`

5. **Directory Operations**
   - Creating directories using `mkdirSync`
   - Creating nested directories using `mkdirSync` with `recursive` option

### Code Examples

#### Writing to a File

```javascript
// Synchronous
fs.writeFileSync("./test.txt", "Do Something Great...");

// Asynchronous
fs.writeFile("./test.txt", "Created via Async", (error) => {});
```

#### Reading from a File

```javascript
// Synchronous
const result = fs.readFileSync("./contact.txt", "utf-8");
console.log(result);

// Asynchronous
fs.readFile("./contact.txt", "utf-8", (error, result) => {
  if (error) {
    console.log("Error:", error);
  } else {
    console.log(result);
  }
});
```

#### Appending to a File

```javascript
fs.appendFileSync("./test.txt", `${Date.now()}Hello Everyone!\n`);
```

#### Directory Operations

```javascript
// Create a single directory
fs.mkdirSync("my-docs");

// Create nested directories
fs.mkdirSync("my-docs/a/b", { recursive: true });
```

### Running the Program

1. Navigate to the `03_fileHandling` directory
2. Run the program using:
   ```bash
   node file.js
   ```

### Expected Output

The program demonstrates various file operations. You can observe:

- New files being created
- Content being written to files
- Directories being created
- Files being copied and deleted

## Prerequisites

- **Node.js and npm (or yarn):** You need to have Node.js and its package manager (npm is included with Node.js, or you can use yarn) installed on your system. You can download them from the official Node.js website: [https://nodejs.org/](https://nodejs.org/)

# Hello World Node.js Program

This is my very first program written using Node.js! It's a simple application that prints two messages to the console.

## Getting Started

These instructions will help you run the program on your local machine.

### Prerequisites

- **Node.js and npm (or yarn):** You need to have Node.js and its package manager (npm is included with Node.js, or you can use yarn) installed on your system. You can download them from the official Node.js website: [https://nodejs.org/](https://nodejs.org/)

### Running the Program

1.  **Save the code:** Create a new file named `app.js` (or any other name you prefer with a `.js` extension) and paste the following code into it:

    ```javascript
    console.log("Hello World from the node js");

    console.log("Hey there ! i am javascript");
    ```

2.  **Open your terminal or command prompt:** Navigate to the directory where you saved the `app.js` file.

3.  **Run the program:** Execute the following command in your terminal:

    ```bash
    node app.js
    ```

    or if you are using yarn:

    ```bash
    yarn start app.js
    ```

### Expected Output

After running the command, you should see the following output in your terminal:
