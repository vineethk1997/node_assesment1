const http = require("http");
http.createServer(function(request, response){
    response.write("HelloWorld");
    response.write("<h1>Good</h1>");
    let user = {name:"Tom", age:20}
    response.write(JSON.stringify(user))
    response.end();
}).listen(3000)




// Request Method: GET
// Status Code: 200 OK

// Request method decides that what type of API you are having
// CRUD APPLICATION 
// GET : Sending the data to the front end 
// POST : Receive the data from the front end 
// UPDATE : Receive the data and update in DB
// DELETE : Receive the data from front end and delete in DB


// Status Code : Is a code which helps front end to understand that if the API is working fine or not 
// 200 : Successful, API is running fine and it is sending correct response
// 400 : Client side error
// 500 : Server side error

                    // ...to be continued




// Different type of responses that you can share

// 1>. text response 
// 2>. json response
// 3>. html response
