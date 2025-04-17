# NodeJS-PiyushGarg

This repository contains Node.js examples demonstrating basic concepts and features.

## Table of Contents

1. [Hello World Example](#hello-world-example)
2. [Modules Example](#modules-example)
3. [File Handling Example](#file-handling-example)
4. [HTTP Server Example](#http-server-example)

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

This example demonstrates various file operations in Node.js using the built-in `fs` (File System) module and OS operations using the `os` module.

### Project Structure

- `file.js` - Main file containing file operations examples
- `test.txt` - Sample text file
- `contact.txt` - Sample contact information file
- `my-docs/` - Directory created through file operations

### Features Demonstrated

1. **OS Operations**

   - Getting CPU information using `os.cpus()`
   - Understanding thread pool size (default: 4, max: 8 for 8-core CPU)

2. **File Writing**

   - Synchronous writing using `writeFileSync`
   - Asynchronous writing using `writeFile`

3. **File Reading**

   - Synchronous reading using `readFileSync`
   - Asynchronous reading using `readFile`

4. **File Appending**

   - Appending content to files using `appendFileSync`

5. **File Operations**

   - Copying files using `cpSync`
   - Deleting files using `unlinkSync`
   - Getting file statistics using `statSync`

6. **Directory Operations**

   - Creating directories using `mkdirSync`
   - Creating nested directories using `mkdirSync` with `recursive` option

7. **Blocking vs Non-Blocking Operations**
   - Demonstrating synchronous (blocking) operations
   - Demonstrating asynchronous (non-blocking) operations

### Code Examples

#### OS Operations

```javascript
const os = require("os");
console.log(os.cpus().length); // Get number of CPU cores
```

#### Blocking vs Non-Blocking Operations

```javascript
// Blocking (Synchronous) Example
console.log(1);
const result = fs.readFileSync("contact.txt", "utf-8");
console.log(result);
console.log(2);
// Output will be in order: 1, file content, 2

// Non-Blocking (Asynchronous) Example
fs.readFile("contact.txt", "utf-8", (error, result) => {
  console.log(result);
});
console.log(1);
console.log(2);
console.log(3);
// Output order may vary: 1, 2, 3, file content
```

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

The program demonstrates various file operations and system information. You can observe:

- CPU core count
- New files being created
- Content being written to files
- Directories being created
- Files being copied and deleted
- Different behavior between blocking and non-blocking operations

### Important Notes

- The default thread pool size in Node.js is 4
- The maximum thread pool size depends on your CPU cores (e.g., 8 for an 8-core CPU)
- Blocking operations can impact performance as they wait for completion
- Non-blocking operations are generally preferred for better performance

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

```
Hello World from the node js
Hey there ! i am javascript
```

## HTTP Server Example

This example demonstrates how to create a basic HTTP server in Node.js using the built-in `http` module, including request handling and logging.

### Project Structure
- `index.js` - Basic HTTP server implementation
- `log.js` - HTTP server with request logging
- `log.txt` - Log file containing request history
- `package.json` - Project configuration

### Features Demonstrated
1. **Basic HTTP Server**
   - Creating an HTTP server using `http.createServer()`
   - Handling incoming requests
   - Sending responses
   - Server listening on a specific port

2. **Request Logging**
   - Logging request details to a file
   - Using timestamps for request tracking
   - Handling different URL routes
   - File system integration for logging

3. **Route Handling**
   - Handling different URL paths
   - Implementing a simple routing system
   - Sending appropriate responses for different routes
   - Handling 404 cases

### Code Examples

#### Basic HTTP Server (index.js)
```javascript
const http = require("http");

const server = http.createServer((req, res) => {
    console.log(req);
    res.end("Hello World from the HTTP Server.");
});

const port = 3000;
server.listen(port, () => {
    console.log(`Server is running on the port : ${port}`);
});
```

#### HTTP Server with Logging (log.js)
```javascript
const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    const log = `${Date.now()}:${req.url}: New REQ Received\n`;
    fs.appendFile("log.txt", log, (error, data) => {
        switch (req.url) {
            case "/": res.end("Home Page");
                break;
            case "/about": res.end("I am Raza Ali");
                break;
            default: res.end("404 Not Found..");
        }
    });
});

const port = 3000;
server.listen(port, () => {
    console.log(`Server is running on the port :${port}`);
});
```

### Running the Program
1. Navigate to the `04_httpServer` directory
2. Run either server using:
   ```bash
   # For basic server
   node index.js
   
   # For server with logging
   node log.js
   ```

### Expected Output
1. **Basic Server**
   - Server starts and listens on port 3000
   - Console shows request details when accessed
   - Browser shows "Hello World from the HTTP Server" message

2. **Server with Logging**
   - Server starts and listens on port 3000
   - Requests are logged to `log.txt` with timestamp and URL
   - Different responses based on URL:
     - `/` → "Home Page"
     - `/about` → "I am Raza Ali"
     - Other URLs → "404 Not Found.."

### Log File Format
The `log.txt` file contains entries in the following format:
```
[timestamp]:[url]: New REQ Received
```
Example:
```
1744907012419:/: New REQ Received
1744907017888:/about: New REQ Received
```

## Prerequisites

- **Node.js and npm (or yarn):** You need to have Node.js and its package manager (npm is included with Node.js, or you can use yarn) installed on your system. You can download them from the official Node.js website: [https://nodejs.org/](https://nodejs.org/)
