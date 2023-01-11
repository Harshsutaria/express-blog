const Event =  require("events")
const event1 =  new Event()
const event2 = new Event()

// console.log("event 1 is eve",event1)
function hello(){
    console.log("hello hahahah")
}

function hey(){
    console.log("holla ")
}

event1.once("hello",hello)
event2.addListener("pique" , hello)
event2.on("hey",hey)

// event1.emit("hello")
// event1.emit("hello")
// event2.emit("pique")
// event2.removeAllListeners()
// event2.emit("pique")
console.log("wweflmflk",event2.eventNames())