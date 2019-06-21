// function nested_fun(val1,val2,val3){
// var concatinated=val1(val2,val3)
// return concatinated
// }
// function fullname(name,surname){
//     return name.concat(surname)
// }
// var data={"firstname":"rosan","lastname":"saud"}
// console.log(nested_fun(fullname,data.firstname,data.lastname))

var express = require("express")
var app = express();
var port = 3000
app.get('/', function (request, response) {
    response.send("i dont know what to do at'/'");

      });
       app.listen(port, function () {
        console.log('i am all dizzy')
        console .log("the first commit in my repo was cool");
    })
