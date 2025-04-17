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
            case "/": res.end("Home Page");
                break;
            case "/about":
                const username = myUrl.query.myname; res.end(`Hi, ${username}`);
                break;
            case "/search":
                const search = myUrl.query.search_query;
                res.end(`Here are your results for ${search}`);
            default: res.end("404 Not Found");
        };
    });
});

const port = 3000;
server.listen(port, () => {
    console.log(`Server is running on the port : ${port}`);
});


// URL : https://www.youtube.com/watch?v=Nt-AsZh5woE&list=PLinedj3B30sDby4Al-i13hQJGQoRQDfPo&index=8