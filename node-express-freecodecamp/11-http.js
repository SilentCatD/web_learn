import http from 'http';

const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.end("Homepage");
    }
    else if(req.url === '/about'){
        res.end("History");
    }else{
        res.end("no");
    }
});

server.listen(5000);