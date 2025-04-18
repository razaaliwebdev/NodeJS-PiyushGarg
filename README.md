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
9. [REST API Concepts](#rest-api-concepts)
10. [Project 1: REST API Implementation](#project-1-rest-api-implementation)
11. [Middlewares Example](#middlewares-example)

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

## REST API Concepts

This example provides a comprehensive overview of REST API concepts and related web development principles. It covers everything from basic HTTP methods to advanced rendering techniques.

### Project Structure

- `notes.txt` - Detailed explanations of REST API concepts with practical examples
- `package.json` - Project configuration

### Topics Covered

1. **REST API Fundamentals**

   - Definition and purpose of REST
   - Stateless architecture principles
   - HTTP methods and their characteristics
     - GET: Safe, idempotent operations
     - POST: Resource creation
     - PUT/PATCH: Resource updates
     - DELETE: Resource removal
   - Request/response cycle
   - Status codes and their meanings

2. **Data Formats and Interchange**

   - JSON: Modern API standard
     - Structure and syntax
     - Parsing and serialization
     - Best practices
   - XML: Legacy system support
     - Structure and validation
     - XSD and DTD
   - HTML: Web content delivery
   - Plain Text: Simple data exchange
   - Format selection criteria
     - Performance considerations
     - Compatibility requirements
     - Use case suitability

3. **Rendering Methods**

   - Server-Side Rendering (SSR)
     - Complete HTML generation
     - SEO optimization
     - Performance characteristics
     - Use cases and examples
   - Client-Side Rendering (CSR)
     - Dynamic content updates
     - Performance optimization
     - SEO challenges
     - Modern framework examples
   - Hybrid Approaches
     - Static Site Generation
     - Incremental Static Regeneration
     - Edge-side rendering

4. **Response Handling**
   - Response Methods
     - send(): Flexible content delivery
     - render(): Template-based HTML
     - json(): API responses
     - redirect(): Navigation control
   - Content Negotiation
   - Error Handling
   - Caching Strategies
   - Security Considerations

### Key Features

- Comprehensive coverage of REST concepts
- Practical examples and use cases
- Clear explanations of complex topics
- Best practices and recommendations
- Performance considerations
- Security implications

### Learning Resources

- REST API documentation
- HTTP protocol specifications
- Web development best practices
- Modern web architecture patterns
- Performance optimization guides
- Security best practices

### Running the Program

1. Navigate to the `09_whatIsRestApi` directory
2. Review the `notes.txt` file for detailed explanations
3. Experiment with different concepts
4. Implement examples in your projects

### Best Practices

1. **API Design**

   - Use consistent naming conventions
   - Implement proper error handling
   - Version your APIs
   - Document thoroughly

2. **Performance**

   - Implement caching where appropriate
   - Optimize payload sizes
   - Use compression
   - Monitor response times

3. **Security**

   - Implement authentication
   - Use HTTPS
   - Validate input
   - Handle errors securely

4. **Maintenance**
   - Keep documentation updated
   - Monitor API usage
   - Plan for scalability
   - Regular security audits

## Prerequisites

- **Node.js and npm (or yarn):** You need to have Node.js and its package manager (npm is included with Node.js, or you can use yarn) installed on your system. You can download them from the official Node.js website: [https://nodejs.org/](https://nodejs.org/)

## Project 1: REST API Implementation

This project demonstrates a practical implementation of a REST API using Express.js, showcasing various HTTP methods and response types.

### Project Structure

- `server.js` - Main Express.js server implementation
- `MOCK_DATA.json` - Sample user data
- `package.json` - Project dependencies
- `task.txt` - Project requirements and tasks

### Features

1. **User Management API**

   - List all users
   - Get specific user by ID
   - Create new users
   - Update existing users
   - Delete users

2. **Response Types**
   - JSON responses for API endpoints
   - HTML rendering for web interface
   - Status codes for different operations

### API Endpoints

1. **GET /users**

   - Returns HTML list of all users
   - Renders user names in an unordered list

2. **GET /api/users**

   - Returns JSON array of all users
   - Complete user data in JSON format

3. **GET /api/users/:id**

   - Returns specific user by ID
   - Dynamic path parameter handling
   - JSON response with user details

4. **POST /api/users**

   - Creates new user
   - Returns status of operation
   - (Implementation pending)

5. **PATCH /api/users/:id**

   - Updates existing user
   - Returns status of operation
   - (Implementation pending)

6. **DELETE /api/users/:id**
   - Removes user by ID
   - Returns status of operation
   - (Implementation pending)

### Technical Details

1. **Server Setup**

   - Express.js framework
   - Port 3000
   - JSON data handling
   - Route parameter parsing

2. **Data Source**

   - Mock data from mockaroo.com
   - JSON format
   - Sample user information

3. **Implementation Status**
   - ✅ GET endpoints implemented
   - ⏳ POST/PATCH/DELETE pending
   - ✅ HTML rendering working
   - ✅ JSON responses working

### Running the Project

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the server:

   ```bash
   node server.js
   ```

3. Access endpoints:
   - Web interface: http://localhost:3000/users
   - API endpoints: http://localhost:3000/api/users

### Development Notes

- Uses Express.js for routing
- Implements both API and web interface
- Demonstrates REST principles
- Shows different response types
- Pending implementations marked

### Next Steps

1. Implement POST endpoint
2. Complete PATCH functionality
3. Add DELETE operation
4. Add input validation
5. Implement error handling
6. Add data persistence

# REST API Project Documentation

## Overview

This is a simple REST API project built with Express.js that demonstrates CRUD operations on user data.

## Features

- List all users (GET)
- Get user by ID (GET)
- Create new user (POST)
- Update user (PATCH)
- Delete user (DELETE)
- HTML view of users
- JSON API endpoints
- File-based data storage

## Project Structure

```
10_project-1-restApi/
├── server.js          # Main server file
├── MOCK_DATA.json     # User data file
├── package.json       # Project config
└── .gitignore        # Git ignore file
```

## API Endpoints

### 1. HTML View

- **GET** `/users`
  - Shows list of all users
  - Returns HTML with user names

### 2. JSON API

#### Get All Users

- **GET** `/api/users`
  - Returns all users in JSON
  - Status: 200 OK

#### Get Single User

- **GET** `/api/users/:id`
  - Get user by ID
  - Status: 200 OK
  - Error: 404 if not found

#### Create User

- **POST** `/api/users`
  - Create new user
  - Status: 201 Created
  - Body: user data

#### Update User

- **PATCH** `/api/users/:id`
  - Update user by ID
  - Status: 200 OK
  - Error: 404 if not found

#### Delete User

- **DELETE** `/api/users/:id`
  - Delete user by ID
  - Status: 200 OK
  - Error: 404 if not found

## How to Use

1. Install dependencies:

```bash
npm install
```

2. Start server:

```bash
node server.js
```

3. Access API:

- Web view: http://localhost:3000/users
- API: http://localhost:3000/api/users

## Example Requests

### Create User

```bash
curl -X POST http://localhost:3000/api/users \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "first_name=John&last_name=Doe&email=john@example.com"
```

### Get User

```bash
curl http://localhost:3000/api/users/1
```

### Update User

```bash
curl -X PATCH http://localhost:3000/api/users/1 \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "email=newemail@example.com"
```

### Delete User

```bash
curl -X DELETE http://localhost:3000/api/users/1
```

## Technical Details

- Uses Express.js
- File-based data storage
- Error handling included
- Automatic ID generation
- Data persistence on changes

## Future Plans

- Add input validation
- Implement authentication
- Add data validation
- Improve error handling
- Add pagination
- Add search
- Add logging
- Add rate limiting

## Prerequisites

- **Node.js and npm (or yarn):** You need to have Node.js and its package manager (npm is included with Node.js, or you can use yarn) installed on your system. You can download them from the official Node.js website: [https://nodejs.org/](https://nodejs.org/)

## Middlewares Example

This example demonstrates how to use Express.js middlewares to handle requests, log activities, and process data in a Node.js application.

### Project Structure

- `server.js` - Express.js server with middleware implementation
- `log.txt` - Request logging file
- `MOCK_DATA.json` - Sample user data
- `package.json` - Project configuration

### Features Demonstrated

1. **Express Middleware**

   - Built-in middleware (express.urlencoded)
   - Custom middleware for logging
   - Middleware chaining
   - Request/response modification

2. **Request Logging**

   - Timestamp-based logging
   - IP address tracking
   - HTTP method logging
   - Path tracking
   - File-based logging

3. **Data Processing**
   - URL-encoded data handling
   - JSON data serving
   - Request body parsing

### Code Examples

#### Express Server with Middleware (server.js)

```javascript
const express = require("express");
const users = require("./MOCK_DATA.json");
const fs = require("fs");

const app = express();

// Middlewares
app.use(express.urlencoded({ extended: false }));

// Global Middleware for logging
app.use((req, res, next) => {
  fs.appendFile(
    "log.txt",
    `\n${Date.now()}:${req.ip}: ${req.method}: ${req.path}\n`,
    (error, data) => {
      next();
    }
  );
});

// Routes
app.get("/", (req, res) => {
  return res.send("Hello World from the express app");
});

app.get("/users", (req, res) => {
  return res.json(users);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on the PORT:${PORT}`);
});
```

### Middleware Types

1. **Built-in Middleware**

   ```javascript
   app.use(express.urlencoded({ extended: false }));
   ```

   - Handles URL-encoded form data
   - Parses request bodies
   - Makes form data available in `req.body`

2. **Custom Middleware**
   ```javascript
   app.use((req, res, next) => {
     // Logging logic
     next();
   });
   ```
   - Custom request processing
   - Logging functionality
   - Request modification

### Log File Format

The `log.txt` file contains entries in the following format:

```
[timestamp]:[ip_address]: [http_method]: [path]
```

Example:

```
1745082907204:::ffff:127.0.0.1: GET: /users
```

### Running the Program

1. Navigate to the `11_middlewares` directory
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   node server.js
   ```

### API Endpoints

1. **Home Page**

   ```
   GET http://localhost:3000/
   ```

   Response:

   ```
   Hello World from the express app
   ```

2. **Users List**
   ```
   GET http://localhost:3000/users
   ```
   Response:
   ```json
   [
     {
       "id": 1,
       "first_name": "John",
       "last_name": "Doe",
       "email": "john@example.com"
     }
     // ... more users
   ]
   ```

### Key Features

1. **Request Logging**

   - Automatic logging of all requests
   - Timestamp and IP tracking
   - Method and path logging
   - Persistent log storage

2. **Data Handling**

   - URL-encoded form support
   - JSON data serving
   - Request body parsing

3. **Middleware Chain**
   - Sequential processing
   - Request modification
   - Response handling
   - Error handling

### Best Practices

1. **Middleware Order**

   - Place logging middleware early
   - Order matters in middleware chain
   - Use next() appropriately

2. **Error Handling**

   - Handle file system errors
   - Implement error middleware
   - Log errors appropriately

3. **Performance**
   - Use async operations
   - Implement proper error handling
   - Monitor middleware performance

## Prerequisites

// ... existing code ...
