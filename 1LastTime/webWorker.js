const Event  = require('events')
let event  =  new Event()
const worker =  new Worker("worker.js")
event.on("hello",()=>{
    console.log("hemloooooooooooooooooooooooooooooooooo")
    worker.postMessage("add")
})


event.emit("hello")