const net = require("net");

const client = net.createConnection({port:3000}, ()=>{
   console.log("Client ready and sending data");
   client.write("Hello !! this is client ....");
});

client.on('data', data=>{
    console.log(data.toString());
    client.end();
});

client.on('end', ()=>{
    console.log("Client is disconnected from the server");
});