const http = require("http");
const fs = require("fs");
const url = require("url");

// Sample data store (in-memory database)
let users = [
    { id: 1, name: "Raza Ali", email: "raza@example.com" },
    { id: 2, name: "Amir Ali", email: "amir@example.com" }
];

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;
    const method = req.method;

    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Handle preflight requests
    if (method === 'OPTIONS') {
        res.writeHead(204);
        res.end();
        return;
    }

    // Set content type to JSON
    res.setHeader('Content-Type', 'application/json');

    // Handle different HTTP methods
    switch (method) {
        case 'GET':
            handleGetRequest(req, res, path, parsedUrl);
            break;
        case 'POST':
            handlePostRequest(req, res, path);
            break;
        case 'PUT':
            handlePutRequest(req, res, path);
            break;
        case 'PATCH':
            handlePatchRequest(req, res, path);
            break;
        case 'DELETE':
            handleDeleteRequest(req, res, path);
            break;
        default:
            res.writeHead(405, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'Method Not Allowed' }));
    }
});

// GET request handler
function handleGetRequest(req, res, path, parsedUrl) {
    if (path === '/users') {
        // Get all users
        res.writeHead(200);
        res.end(JSON.stringify(users));
    } else if (path.startsWith('/users/')) {
        // Get specific user
        const userId = parseInt(path.split('/')[2]);
        const user = users.find(u => u.id === userId);

        if (user) {
            res.writeHead(200);
            res.end(JSON.stringify(user));
        } else {
            res.writeHead(404);
            res.end(JSON.stringify({ error: 'User not found' }));
        }
    } else {
        res.writeHead(404);
        res.end(JSON.stringify({ error: 'Not Found' }));
    }
}

// POST request handler
function handlePostRequest(req, res, path) {
    if (path === '/users') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });

        req.on('end', () => {
            try {
                const newUser = JSON.parse(body);
                newUser.id = users.length + 1;
                users.push(newUser);

                res.writeHead(201);
                res.end(JSON.stringify(newUser));
            } catch (error) {
                res.writeHead(400);
                res.end(JSON.stringify({ error: 'Invalid JSON' }));
            }
        });
    } else {
        res.writeHead(404);
        res.end(JSON.stringify({ error: 'Not Found' }));
    }
}

// PUT request handler
function handlePutRequest(req, res, path) {
    if (path.startsWith('/users/')) {
        const userId = parseInt(path.split('/')[2]);
        let body = '';

        req.on('data', chunk => {
            body += chunk.toString();
        });

        req.on('end', () => {
            try {
                const updatedUser = JSON.parse(body);
                const index = users.findIndex(u => u.id === userId);

                if (index !== -1) {
                    users[index] = { ...users[index], ...updatedUser, id: userId };
                    res.writeHead(200);
                    res.end(JSON.stringify(users[index]));
                } else {
                    res.writeHead(404);
                    res.end(JSON.stringify({ error: 'User not found' }));
                }
            } catch (error) {
                res.writeHead(400);
                res.end(JSON.stringify({ error: 'Invalid JSON' }));
            }
        });
    } else {
        res.writeHead(404);
        res.end(JSON.stringify({ error: 'Not Found' }));
    }
}

// PATCH request handler
function handlePatchRequest(req, res, path) {
    if (path.startsWith('/users/')) {
        const userId = parseInt(path.split('/')[2]);
        let body = '';

        req.on('data', chunk => {
            body += chunk.toString();
        });

        req.on('end', () => {
            try {
                const updates = JSON.parse(body);
                const index = users.findIndex(u => u.id === userId);

                if (index !== -1) {
                    users[index] = { ...users[index], ...updates };
                    res.writeHead(200);
                    res.end(JSON.stringify(users[index]));
                } else {
                    res.writeHead(404);
                    res.end(JSON.stringify({ error: 'User not found' }));
                }
            } catch (error) {
                res.writeHead(400);
                res.end(JSON.stringify({ error: 'Invalid JSON' }));
            }
        });
    } else {
        res.writeHead(404);
        res.end(JSON.stringify({ error: 'Not Found' }));
    }
}

// DELETE request handler
function handleDeleteRequest(req, res, path) {
    if (path.startsWith('/users/')) {
        const userId = parseInt(path.split('/')[2]);
        const index = users.findIndex(u => u.id === userId);

        if (index !== -1) {
            users.splice(index, 1);
            res.writeHead(204);
            res.end();
        } else {
            res.writeHead(404);
            res.end(JSON.stringify({ error: 'User not found' }));
        }
    } else {
        res.writeHead(404);
        res.end(JSON.stringify({ error: 'Not Found' }));
    }
}

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log('Available endpoints:');
    console.log('GET    /users          - Get all users');
    console.log('GET    /users/:id      - Get specific user');
    console.log('POST   /users          - Create new user');
    console.log('PUT    /users/:id      - Update entire user');
    console.log('PATCH  /users/:id      - Partially update user');
    console.log('DELETE /users/:id      - Delete user');
}); 