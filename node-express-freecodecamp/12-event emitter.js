import EventEmitter from "events";

const emitter = new EventEmitter();

emitter.on('response', (name, id)=>{
    console.log(`data received ${name}, ${id}`);
});


emitter.on('response', ()=>{
    console.log(`data received 2 `);
});


emitter.emit('response', 'join', 34);