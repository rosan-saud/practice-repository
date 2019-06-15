var express = require("express") //Import Express

var app = express(); //Initialize our App with Express

var port = 3000;
    
    app.get('/', function(request, response){
        response.send('I am only available at "/" route');
    });

    app.get('/user', function(req, res){
        res.send('I am some user');
    });


    app.get('/all', function(req, res){
        res.send('All the  data is here');
    });



  app.listen(port, function(){
      console.log("Server is running at port 3000")
  })
  