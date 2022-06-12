let http = require('http');
let server = http.createServer(function(richieste, risposte){
    risposte.end('hello world!!');
})

server.listen(3000, 'localhost');
console.log('server attivo su http://localhost:3000')