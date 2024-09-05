const http = require('http');
const fs = require('fs');
const path = require('path');
const minimist = require('minimist');

const args = minimist(process.argv.slice(2));
const port = args.port || 3000;

const server = http.createServer((req, res) => {
    if (req.url === '/' || req.url === '/home') {
        fs.readFile(path.join(__dirname, 'home.html'), (err, data) => {
            if (err) throw err;
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            res.end();
        });
    } else if (req.url === '/project') {
        fs.readFile(path.join(__dirname, 'project.html'), (err, data) => {
            if (err) throw err;
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            res.end();
        });
    } else if (req.url === '/registration') {
        fs.readFile(path.join(__dirname, 'registration.html'), (err, data) => {
            if (err) throw err;
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            res.end();
        });
    }
    // Serve CSS file
    else if (req.url === '/index.css') {
        fs.readFile(path.join(__dirname, 'index.css'), (err, data) => {
            if (err) throw err;
            res.writeHead(200, { 'Content-Type': 'text/css' });
            res.write(data);
            res.end();
        });
    }
    // Serve JS file
    else if (req.url === '/formValidation.js') {
        fs.readFile(path.join(__dirname, 'formValidation.js'), (err, data) => {
            if (err) throw err;
            res.writeHead(200, { 'Content-Type': 'application/javascript' });
            res.write(data);
            res.end();
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>404 Not Found</h1>');
    }
});

server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
