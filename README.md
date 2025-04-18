# NodeJS-PiyushGarg

This repository contains Node.js examples demonstrating basic concepts and features.

## Table of Contents

1. [Hello World Example](#hello-world-example)
2. [Modules Example](#modules-example)
3. [File Handling Example](#file-handling-example)
4. [HTTP Server Example](#http-server-example)
5. [URL Handling Example](#url-handling-example)
6. [HTTP Methods Example](#http-methods-example)
7. [Express.js Example](#expressjs-example)
8. [Versioning Example](#versioning-example)

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
      case "/":
        res.end("Home Page");
        break;
      case "/about":
        res.end("I am Raza Ali");
        break;
      default:
        res.end("404 Not Found..");
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

## URL Handling Example

This example demonstrates how to handle and parse URLs in a Node.js HTTP server, including query parameters and path-based routing.

### Project Structure

- `url.js` - HTTP server with URL parsing and handling
- `urls.txt` - Log file containing URL request history
- `package.json` - Project configuration

### Features Demonstrated

1. **URL Parsing**

   - Using Node.js built-in `url` module
   - Parsing URL components (pathname, query parameters)
   - Handling different URL formats

2. **Query Parameter Handling**

   - Extracting query parameters from URLs
   - Using query parameters in responses
   - Handling multiple query parameters

3. **Path-based Routing**

   - Implementing different routes based on URL pathname
   - Handling root path (/)
   - Handling about page with dynamic content
   - Implementing search functionality
   - Handling 404 cases

4. **Request Logging**
   - Logging URL requests with timestamps
   - Storing request history in a file
   - Filtering out favicon requests

### Code Examples

#### URL Handling Server (url.js)

```javascript
const http = require("http");
const fs = require("fs");
const url = require("url");

const server = http.createServer((req, res) => {
  if (req.url === "/favicon.ico") {
    return res.end();
  }
  const log = `${Date.now()}:/${req.url} : New REQ Received.\n`;
  const myUrl = url.parse(req.url, true);
  console.log(myUrl);
  fs.appendFile("urls.txt", log, (error, data) => {
    switch (myUrl.pathname) {
      case "/":
        res.end("Home Page");
        break;
      case "/about":
        const username = myUrl.query.myname;
        res.end(`Hi, ${username}`);
        break;
      case "/search":
        const search = myUrl.query.search_query;
        res.end(`Here are your results for ${search}`);
      default:
        res.end("404 Not Found");
    }
  });
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server is running on the port : ${port}`);
});
```

### Running the Program

1. Navigate to the `05_url` directory
2. Run the server using:
   ```bash
   node url.js
   ```

### Expected Output

1. **Server Response Examples**

   - Root path (`/`) → "Home Page"
   - About page with name (`/about?myname=raza`) → "Hi, raza"
   - Search page (`/search?search_query=javascript`) → "Here are your results for javascript"
   - Invalid paths → "404 Not Found"

2. **URL Logging**
   The `urls.txt` file contains entries in the following format:
   ```
   [timestamp]:/[url] : New REQ Received.
   ```
   Example entries:
   ```
   1744910826739://about?myname=raza : New REQ Received.
   1744911213473://search?search_query=javaScript+mastery+by+piyush : New REQ Received.
   ```

### URL Examples

1. **Home Page**

   ```
   http://localhost:3000/
   ```

2. **About Page with Name**

   ```
   http://localhost:3000/about?myname=raza
   ```

3. **Search Page**
   ```
   http://localhost:3000/search?search_query=javascript+mastery
   ```

## Prerequisites

- **Node.js and npm (or yarn):** You need to have Node.js and its package manager (npm is included with Node.js, or you can use yarn) installed on your system. You can download them from the official Node.js website: [https://nodejs.org/](https://nodejs.org/)

## HTTP Methods Example

This example demonstrates how to implement a RESTful API using different HTTP methods (GET, POST, PUT, PATCH, DELETE) in Node.js, including proper error handling and CORS support.

### Project Structure

- `methods.js` - RESTful API implementation with all HTTP methods
- `package.json` - Project configuration

### Features Demonstrated

1. **RESTful API Implementation**

   - GET: Retrieve resources
   - POST: Create new resources
   - PUT: Update entire resources
   - PATCH: Partially update resources
   - DELETE: Remove resources
   - OPTIONS: Handle CORS preflight requests

2. **Data Management**

   - In-memory database for user management
   - JSON data handling
   - Proper error handling and status codes

3. **Security Features**

   - CORS headers implementation
   - Input validation
   - Error handling for invalid requests

4. **API Endpoints**
   - User management endpoints
   - Resource identification through URLs
   - Query parameter handling

### Code Examples

#### RESTful API Server (methods.js)

```javascript
const http = require("http");
const fs = require("fs");
const url = require("url");

// Sample data store
let users = [
  { id: 1, name: "Raza Ali", email: "raza@example.com" },
  { id: 2, name: "Amir Ali", email: "amir@example.com" },
];

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;
  const method = req.method;

  // Set CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE, OPTIONS"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Handle different HTTP methods
  switch (method) {
    case "GET":
      handleGetRequest(req, res, path, parsedUrl);
      break;
    case "POST":
      handlePostRequest(req, res, path);
      break;
    case "PUT":
      handlePutRequest(req, res, path);
      break;
    case "PATCH":
      handlePatchRequest(req, res, path);
      break;
    case "DELETE":
      handleDeleteRequest(req, res, path);
      break;
    default:
      res.writeHead(405);
      res.end(JSON.stringify({ error: "Method Not Allowed" }));
  }
});
```

### Running the Program

1. Navigate to the `06_httpMethods` directory
2. Run the server using:
   ```bash
   node methods.js
   ```

### API Endpoints

1. **GET Requests**

   ```bash
   # Get all users
   curl http://localhost:3000/users

   # Get specific user
   curl http://localhost:3000/users/1
   ```

2. **POST Request**

   ```bash
   curl -X POST -H "Content-Type: application/json" -d '{"name":"New User","email":"new@example.com"}' http://localhost:3000/users
   ```

3. **PUT Request**

   ```bash
   curl -X PUT -H "Content-Type: application/json" -d '{"name":"Updated User","email":"updated@example.com"}' http://localhost:3000/users/1
   ```

4. **PATCH Request**

   ```bash
   curl -X PATCH -H "Content-Type: application/json" -d '{"email":"newemail@example.com"}' http://localhost:3000/users/1
   ```

5. **DELETE Request**
   ```bash
   curl -X DELETE http://localhost:3000/users/1
   ```

### Expected Output

1. **GET /users**

   ```json
   [
     { "id": 1, "name": "Raza Ali", "email": "raza@example.com" },
     { "id": 2, "name": "Amir Ali", "email": "amir@example.com" }
   ]
   ```

2. **GET /users/1**

   ```json
   { "id": 1, "name": "Raza Ali", "email": "raza@example.com" }
   ```

3. **POST /users**

   ```json
   { "id": 3, "name": "New User", "email": "new@example.com" }
   ```

4. **PUT /users/1**

   ```json
   { "id": 1, "name": "Updated User", "email": "updated@example.com" }
   ```

5. **PATCH /users/1**

   ```json
   { "id": 1, "name": "Raza Ali", "email": "newemail@example.com" }
   ```

6. **DELETE /users/1**
   - Status Code: 204 No Content

### Error Handling

The API includes proper error handling for:

- Invalid JSON data (400 Bad Request)
- Resource not found (404 Not Found)
- Method not allowed (405 Method Not Allowed)
- Invalid request paths (404 Not Found)

## Prerequisites

- **Node.js and npm (or yarn):** You need to have Node.js and its package manager (npm is included with Node.js, or you can use yarn) installed on your system. You can download them from the official Node.js website: [https://nodejs.org/](https://nodejs.org/)

## Express.js Example

This example demonstrates how to create a basic web server using Express.js, a popular web framework for Node.js. It shows how to handle routes and query parameters in a more elegant way compared to the native HTTP module.

### Project Structure

- `server.js` - Express.js server implementation
- `package.json` - Project configuration with Express.js dependency
- `node_modules/` - Dependencies directory

### Features Demonstrated

1. **Express.js Setup**

   - Installing and requiring Express.js
   - Creating an Express application
   - Setting up basic routes

2. **Route Handling**

   - Handling GET requests
   - Using route parameters
   - Working with query parameters
   - Sending responses

3. **Query Parameters**
   - Accessing query parameters using `req.query`
   - Using query parameters in responses
   - Dynamic content generation

### Code Examples

#### Express.js Server (server.js)

```javascript
const express = require("express");

const app = express();

// Home route
app.get("/", (req, res) => {
  return res.send("Hello from Home Page");
});

// About route with query parameters
app.get("/about", (req, res) => {
  return res.send(
    `Hello world from about page, hey ${req.query.name} and you are ${req.query.age} years old.`
  );
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on the port:${port}`);
});
```

### Running the Program

1. Navigate to the `07_express` directory
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   npm start
   ```
   or
   ```bash
   node server.js
   ```

### API Endpoints

1. **Home Page**

   ```
   http://localhost:3000/
   ```

   Response:

   ```
   Hello from Home Page
   ```

2. **About Page with Query Parameters**
   ```
   http://localhost:3000/about?name=Raza&age=25
   ```
   Response:
   ```
   Hello world from about page, hey Raza and you are 25 years old.
   ```

### Expected Output

When you run the server, you should see:

```
Server is running on the port:3000
```

### Key Features

1. **Simplified Routing**

   - Clean and intuitive route definitions
   - Easy parameter handling
   - Built-in response methods

2. **Query Parameter Handling**

   - Automatic parsing of query parameters
   - Access via `req.query` object
   - Type-safe parameter access

3. **Response Handling**
   - Simple response sending with `res.send()`
   - Automatic content-type setting
   - Built-in status code handling

### Dependencies

- **express**: ^5.1.0
  - A fast, unopinionated, minimalist web framework for Node.js
  - Provides a robust set of features for web and mobile applications

## Prerequisites

- **Node.js and npm (or yarn):** You need to have Node.js and its package manager (npm is included with Node.js, or you can use yarn) installed on your system. You can download them from the official Node.js website: [https://nodejs.org/](https://nodejs.org/)

## Versioning Example

This example demonstrates how to manage package versions in Node.js projects, specifically focusing on Express.js versioning and the semantic versioning (semver) system.

### Project Structure

- `server.js` - Basic Express.js server implementation
- `package.json` - Project configuration with version specifications
- `notes.txt` - Versioning documentation and examples
- `node_modules/` - Dependencies directory

### Features Demonstrated

1. **Semantic Versioning (Semver)**

   - Understanding version numbers (Major.Minor.Patch)
   - Version number components and their meanings
   - Version range specifications

2. **Package Version Management**

   - Installing specific package versions
   - Using version range operators
   - Understanding version compatibility

3. **Express.js Versioning**
   - Current Express.js version (^5.1.0)
   - Version compatibility rules
   - Update strategies

### Version Number Components

1. **Major Version (First Number)**

   - Example: `5` in `5.1.0`
   - Represents major/breaking updates
   - May include backward-incompatible changes
   - Requires careful consideration before updating

2. **Minor Version (Second Number)**

   - Example: `1` in `5.1.0`
   - Represents recommended bug fixes and security updates
   - Backward-compatible new features
   - Should be updated regularly

3. **Patch Version (Third Number)**
   - Example: `0` in `5.1.0`
   - Represents minor fixes and optional updates
   - Backward-compatible bug fixes
   - Can be updated safely

### Version Range Operators

1. **Caret (^) Operator**

   ```json
   "express": "^5.1.0"
   ```

   - Allows updates to any version compatible with 5.1.0
   - Will install versions: 5.1.0 to < 6.0.0
   - Automatically installs recommended and minor fixes
   - Example compatible versions: 5.1.1, 5.1.2, 5.1.3

2. **Tilde (~) Operator**
   ```json
   "express": "~5.1.1"
   ```
   - Allows updates to patch versions only
   - More restrictive than caret operator
   - Example compatible versions: 5.1.1, 5.1.2, 5.1.3

### Installing Specific Versions

To install a specific version of a package:

```bash
npm install express@4.17.2
```

### Code Examples

#### Basic Express Server (server.js)

```javascript
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World from the server");
});

app.get("/about", (req, res) => {
  res.send("Hello word from the ABOUT Page...");
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on the port : ${port}`);
});
```

### Running the Program

1. Navigate to the `08_versioning` directory
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   node server.js
   ```

### Best Practices

1. **Version Updates**

   - Regularly update patch versions
   - Review minor version updates
   - Test thoroughly before major version updates

2. **Version Locking**

   - Use exact versions for production
   - Document version requirements
   - Test with different versions

3. **Dependency Management**
   - Keep dependencies up to date
   - Monitor for security updates
   - Use version ranges appropriately

### Dependencies

- **express**: ^5.1.0
  - Current major version: 5
  - Minor version: 1
  - Patch version: 0
  - Compatible with versions: 5.1.0 to < 6.0.0

## Prerequisites

- **Node.js and npm (or yarn):** You need to have Node.js and its package manager (npm is included with Node.js, or you can use yarn) installed on your system. You can download them from the official Node.js website: [https://nodejs.org/](https://nodejs.org/)
