const http = require("http");

console.log("Hello there from v2!");

const port = process.env["PORT"];

http.createServer((req, res) => {
    res.write("Hello there v2!");
    res.end();
}).listen(port, () => console.log(`Started on port ${port}`));