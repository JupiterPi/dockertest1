const http = require("http");

console.log("Hello there from v2.2!");

const port = process.env["PORT"];

http.createServer((req, res) => {
    res.write(`Hello there v2.2 (called on ${req.url})`);
    res.end();
}).listen(port, () => console.log(`Started on port ${port}`));