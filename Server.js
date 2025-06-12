const http = require("http");
const fs = require("fs");
const path = require("path");


const HOSTNAME = 'localhost'
const PORT = '3000'


function requestHandler(req, res) {
if (req.url === '/index.html'){
    fs.readFile('./index.html', (err,data)=>{
        if (err) {
            res.writeHead(500);
            return res.end('Server Error');

        }
        res.writeHead(200,
            { 'Content-Type': 'text/html' });
        res.end(data);
    });
}    else if
(req.url.endsWith('.html')) {
    res.end('<h1>404 - Page Not Found </h1>');
}else {
    res.writeHead(400);
    res.end('Bad Requst');
}
}


const server = http.createServer(requestHandler)

server.listen(PORT, HOSTNAME, () => {
    console.log('server started succesfully at http://localhost:3000')
})