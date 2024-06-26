const express = require('express')

const webserver = express()
 .use((req, res) =>
   res.sendFile('/ws-client.html', { root: __dirname })
 )
 .listen(5173, () => console.log(`Listening on ${5173}`))

const { WebSocketServer } = require('ws')
const sockserver = new WebSocketServer({ port: 2048 })

sockserver.on('connection', ws => {
    console.log('New client connected!')
    
    ws.send('connection established')
    
    ws.on('close', () => console.log('Client has disconnected!'))
    
    ws.on('message', data => {
        sockserver.clients.forEach(client => {
        console.log(`distributing message: ${data}`)
        client.send(`${data}`)
        })
    })
    
    ws.onerror = function () {
        console.log('websocket error')
    }
}
)