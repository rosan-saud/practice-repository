function nested_fun(val1,val2,val3){
var concatinated=val1(val2,val3)
return concatinated
}
function fullname(name,surname){
    return name.concat(surname)
}
var data={"firstname":"rosan","lastname":"saud"}
console.log(nested_fun(fullname,data.firstname,data.lastname))