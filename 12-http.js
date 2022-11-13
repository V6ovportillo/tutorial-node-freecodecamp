const http = require('http')

const server = http.createServer((req,res)=>{
    //req info about request of the client
    //res info about the response that we will do to the client
    const data = {
        page : `
        <h1>Oops!</h1>
        <p>We can't seem to find the page you are looking for</p>
        <a href="/">Back home</a>
        `
    }
    if(req.url === '/'){
        data.page = 'Welcome to our home page'
    }
    if(req.url === '/about'){
        data.page = 'This is our about page'
    }
    res.end(data.page)
})

server.listen(5000)