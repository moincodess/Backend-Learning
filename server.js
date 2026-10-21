const http = require('http')
const server = http.createServer((req, res)=>{

    console.log('Created Server');


    console.log(req.url);
    console.log(req.method);

    if(req.url === "/"){
        res.end('Welcome to my Server')
    }
    else if(req.url === "/About"){
        res.end('This is the about page')
    }
   else if(req.url === "/Contact"){
        res.end('Contact us here')
    }
   else if(req.url === "/api/user"){
    let  object =  {
        "Name" : 'Moin',
        "Role" : 'Student',
        "Skills" : 'Backend'
       }

      const result =  JSON.stringify(object)
   res.setHeader('Content-Type', 'application/json')

       res.end(result)
    }

   else if(req.url === "/api/product"){
    let  product =  {
        "Name" : 'Table',
        "Price" : '3500',
        "id" : '1'
       }

      const result =  JSON.stringify(product)
   res.setHeader('Content-Type', 'application/json')

       res.end(result)
    }



    else{
       res.statusCode = 404;
         res.end('Page not found')
         
    }
    
    
})

server.listen(3000, ()=>{
    console.log('created server on local host 3000');
    
})