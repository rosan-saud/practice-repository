import express from "express"
import all_movies from './FetchMovies';
var app = express(); //Initialize our App with Express
var port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

console.log(all_movies)

// app.post("/profile", function(req, res) {
// if(req.body.name === 'santo'){
//     res.send("You are a valid user")
// } else{
//     return res.status(404).send({"message":"You are not authorized"});
// }
//  res.send("Ready")
// });

// app.get("/", function(request, response) {
    
//   response.send('I am only available at "/" route');
// });

// app.get("/user", function(req, res) {
//   res.send("I am some user");
// });

// app.get("/all", function(req, res) {
//   res.send("All the  data is here");
// });

app.listen(port, function() {
  console.log("Server is running at port 3000");
});



//   function Movies(){
//       return {
//           "name": "Lord of the rings",
//           "start": function(){
//               return "I've have begun"
//           }
//       }
//   }

//   var new_movie = Movies()

//  new_movie.start()
