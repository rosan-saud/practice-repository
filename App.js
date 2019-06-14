//Primitive types

///Objects

// Functions, Arrays, Object

// function SaveData(name, age, address){ //FUnction Def
//     console.log(name, age, address)
//     if(age > 23){
//         console.log("Adult")
//     }

//     //Function body
// }


// var data = [] //array int


// var req = ["Santosh", 24,"G22A"] // array int/dec

// var new_obj = {} //obj int

// req.pop()
// req.push("Blob")


// var req_obj = {"my_name":"santosh", "age":24, "address":"G22A"}
// console.log(req_obj.my_name)

// console.log(req_obj["my_name"]);

// var age = 17
// name = "simo"


// if(age > 18  && name.includes("s")){
//     console.log("Inside the IF")
// } else{
//     console.log("Failed")
// }

// var name = "santosh"
// var eee = {"name":"ss", "age":"22"}  //


// var nested_objs = {
//     "users" : {
//         "names" : ["santo", "aakash", "vish", "himo"],
//         "ages" : [22, 28, 22, 20],
//         "addresses": {
//             "cities" : ["Delhi", {"Lukhnow" :{
//                 "pincode": 10111,
//                 "address": "sdfsf"
//             }}]
//         }
//     }
// }

// var age = 24
// age.toString()


// // console.log(nested_objs.users.addresses.cities[1].Lukhnow.pincode)

// function Add(num1, num2, num3){
//     let sum = num1(num2, num3)
//     return sum
// }



// var result = Add(function Test(val1, val2){
//     return val1 + val2 
// }, "vishal", "himo")
// // let result2 = Add(44, 88)

console.log(result)


let new_array = [ 11, 22, 9, 55, 1]

new_array.sort(function (num1, num2){
    return num1 - num2
}) //
console.log(new_array)



{
    "batchcomplete": "",
    "continue": {
        "sroffset": 10,
        "continue": "-||"
    },
    "query": {
        "searchinfo": {
            "totalhits": 112637
        },
        "search": [
            {
                "ns": 0,
                "title": "Photograph",
                "pageid": 25080,
                "size": 17228,
                "wordcount": 2143,
                "snippet": "A <span class=\"searchmatch\">photograph</span> (also known as a photo) is an image created by light falling on a photosensitive surface, usually photographic film or an electronic image",
                "timestamp": "2019-05-24T13:27:52Z"
            },
            {
                "ns": 0,
                "title": "Photograph (film)",
                "pageid": 59769114,
                "size": 12962,
                "wordcount": 1182,
                "snippet": "<span class=\"searchmatch\">Photograph</span> is a 2019 Indian coming-of-age romantic drama film written, co-produced and directed by Ritesh Batra. It stars Nawazuddin Siddiqui and Sanya",
                "timestamp": "2019-06-07T09:13:15Z"
            },
            {
                "ns": 0,
                "title": "The Photograph",
                "pageid": 12392195,
                "size": 2141,
                "wordcount": 115,
                "snippet": "The <span class=\"searchmatch\">Photograph</span> is an Indonesian feature film directed by Nan Achnas. The film won the 2008 Special Jury Prize at the 43rd Karlovy Vary International Film",
                "timestamp": "2019-04-26T14:33:11Z"
            },
            {
                "ns": 0,
                "title": "Photograph (disambiguation)",
                "pageid": 4919643,
                "size": 3127,
                "wordcount": 297,
                "snippet": "A <span class=\"searchmatch\">photograph</span> is an image created by the effect of light on a light-sensitive material. <span class=\"searchmatch\">Photograph</span> or photo may also refer to: The <span class=\"searchmatch\">Photograph</span>, a 2007 Indonesian",
                "timestamp": "2019-05-02T22:23:43Z"
            },
            {
                "ns": 0,
                "title": "Grace (photograph)",
                "pageid": 8443316,
                "size": 4835,
                "wordcount": 501,
                "snippet": "Grace is a <span class=\"searchmatch\">photograph</span> by Eric Enstrom. It depicts an elderly man with hands folded, saying a prayer over a table with a simple meal. In 2002, an act of",
                "timestamp": "2019-06-10T09:23:35Z"
            },
            {
                "ns": 0,
                "title": "Photo manipulation",
                "pageid": 577742,
                "size": 47467,
                "wordcount": 4976,
                "snippet": "Photo manipulation involves transforming or altering a <span class=\"searchmatch\">photograph</span> using various methods and techniques to achieve desired results. Some photo manipulations",
                "timestamp": "2019-05-20T22:07:40Z"
            },
            {
                "ns": 0,
                "title": "Photograph (Ed Sheeran song)",
                "pageid": 43175225,
                "size": 60426,
                "wordcount": 5410,
                "snippet": "&quot;<span class=\"searchmatch\">Photograph</span>&quot; is a song recorded by the English singer-songwriter, Ed Sheeran, for his second studio album, × (2014). Sheeran wrote the song with Snow Patrol",
                "timestamp": "2019-04-15T01:31:43Z"
            },
            {
                "ns": 0,
                "title": "Mug shot",
                "pageid": 343261,
                "size": 10809,
                "wordcount": 1114,
                "snippet": "A mug shot or mugshot (an informal term for police <span class=\"searchmatch\">photograph</span> or booking <span class=\"searchmatch\">photograph</span>) is a photographic portrait of a person from the waist up, typically",
                "timestamp": "2019-05-16T21:10:59Z"
            },
            {
                "ns": 0,
                "title": "Loch Ness Monster",
                "pageid": 17877,
                "size": 72019,
                "wordcount": 8790,
                "snippet": "in 1933. Evidence of its existence is anecdotal, with a few disputed <span class=\"searchmatch\">photographs</span> and sonar readings. The scientific community regards the Loch Ness Monster",
                "timestamp": "2019-06-06T17:48:37Z"
            },
            {
                "ns": 0,
                "title": "Zack Snyder",
                "pageid": 2825163,
                "size": 22444,
                "wordcount": 1467,
                "snippet": "death of his daughter. As of March 2016, Snyder was working on The Last <span class=\"searchmatch\">Photograph</span>, a drama about a war photographer in Afghanistan. He is also currently",
                "timestamp": "2019-06-06T16:52:21Z"
            }
        ]
    }
}



// console.log(nested_objs.users["ages"])


// var find_name = function name(my_name = "santo"){
//     my_name.toString()
//     console.log(my_name)
// }



// find_name("test")


// console.log(req[0]) //syntax to access valses using their keys//

// SaveData(req[0], req[1], req[2])// Function Invocation