const http = require("http");

const server = http.createServer((req, res) => {
    // console.log("New REQ Res..");
    console.log(req);
    // console.log(req.headers);
    res.end("Hello World from the HTTP Server.");
});

const port = 3000;
server.listen(port, () => {
    console.log(`Server is running on the port : ${port}`);
});
