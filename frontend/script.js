/* 
console.log(a)
console.log(c)
*/
/* 
console.log("Hello!")
console.log('Sima')
console.log(`back
tick`)

*/
/* 
console.log(typeof 2)
console.log(typeof NaN)
console.log(0/0)
console.log(2.14)

console.log(true)
console.log(false)

console.log(undefined)
console.log(null)

console.log(typeof undefined)
console.log(typeof null)

*/
/* 
console.log({
    "title": "Start Coding",
    "type": "Solo",
    "difficulty": 4.1,
    "usefulness": 4.2,
    "enjoyability": 3.7,
    "materials": 3.4,
    "tasks": [
        {
            "title": "Bank accounts",
            "description": ""
        },
        {
            "title": "100 doors",
            "description": ""
        },
        {
            "title": "Word filter",
            "description": ""
        }
    ]
})
*/
/* 
var a = "Hello1"
let b = "Hello2"
const c = "Hello3"

console.log(a)
console.log(b)
console.log(c)
*/
/* 
function d(){
    if(1+1 === 2){
    }
    var a = "Hello1"
    let b = "Hello2"
    const c = "Hello3"
    console.log(a)
    console.log(b)
    console.log(c)
}
d()
*/
/* 
let e = 1
console.log(e)
e = 2
console.log(e)
e = e*2
console.log(e)

*/
/* 
function multiplyByTwo(num){
    console.log(num)
    return num*2
}
let f = multiplyByTwo(1)
console.log(f)
console.log(multiplyByTwo(1))

*/
/* 
let g = {
    myMethod: function() {
        console.log("Hello")
    }
}
g.myMethod()

*/
/* 
let window = {
    addEventListener: function (eventName, eventFunction) {
        if (eventName === "load") {
            eventFunction()
        }
    }
}
window.addEventListener("load", loadEvent)

*/
/* 
let h = {
    anotherMethod: function(text) {
        return `You sent the following argument to this method: ${text}`
    }
}
// let i = h.anotherMethod("argument")
console.log(h.anotherMethod("argument"))

*/
/* 
let myString = "mikkamakka";

let mySecondString = myString;

let myThirdString = "mikkamakka"

console.log(myString);
console.log(mySecondString);
console.log(myString === mySecondString);
console.log(myString === myThirdString);

*/
/* 
let myObject = {
    myString: "mikkamakka"
};

let = mySecondObject = myObject;

let myThirdObject = {
    myString: "mikkamakka"
}

mySecondObject.myString = "domdodom";

let myFourthObject = {...myObject};

myFourthObject.myString = "Vacskamati";

console.log(myObject.myString);
console.log(myFourthObject.myString);

console.log(myObject === myThirdObject)

console.log("" === "");
console.log({} === {});

*/
/* 
window.addEventListener("load", function() {
    console.log("My first function")
})

*/

function loadEvent() {
    console.log("My second function")
}
window.addEventListener("load", loadEvent);


