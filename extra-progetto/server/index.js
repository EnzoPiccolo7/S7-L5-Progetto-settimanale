/* let http = require('http');
let server = http.createServer(function(richieste, risposte){
    risposte.end('hello world!!');
})

server.listen(3000, 'localhost');
console.log('server attivo su http://localhost:3000') */

const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

let utenti = [
    { name: '', cognome: '', citta: '', eta:''}
    { name: '', cognome: '', citta: '', eta:''}
    { name: '', cognome: '', citta: '', eta:''}
    { name: '', cognome: '', citta: '', eta:''}
]