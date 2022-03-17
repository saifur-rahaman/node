const http = require('http');
const server = http.createServer((req, res) => {
    //console.log(req);
    if(req.url === '/'){
        res.end('Welcome to my server')
    }
    if(req.url === '/about'){
        res.end('Welcome to about page')
    }
    res.end(`<h1>Opps! Webpage is unavailable</h1><a href="/">Back</a>`);
});

server.listen(5000);