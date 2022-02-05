import { createReadStream } from "fs";
import http from 'http';



const server = http.createServer((req, res)=>{
    const fileStream = createReadStream('./content/big.txt',);
    fileStream.on('open',()=>{
        fileStream.pipe(res);
    });

    fileStream.on('error', (err)=>{
        console.log(err)
    });

    fileStream.on('end', ()=>{
        res.end();
    });
});


server.listen(5000);
