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
        };
    });
});

const port = 3000;
server.listen(port, () => {
    console.log(`Server is running on the port :${port}`);
})