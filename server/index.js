const http = require('http');

const host = 'localhost'
const port = 8000
const requirestListener = function (req,res){
    res.writeHead(200)
    res.end('My fiest server!')
}
const server = http.createServer(requirestListener)
    server.listen(port,host,()=>
        console.log('Server is runing on http://${host}:{prot}')
    )
