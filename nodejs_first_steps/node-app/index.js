// console.log("hello world 🤫")
// console.log(global.LuckyNum)

// global.LuckyNum = '23';
// console.log(global.LuckyNum)

// console.log(process.platform) // access to current node process

// // events

// process.on('exit', 
//     function() {
//         // callback
//         console.log("\nexiting...")
//     }
// )
// // custom event
// const { EventEmitter } = require("events");
// const eventEmitter = new EventEmitter();

// // setting and event 'lunch'
// eventEmitter.on("lunch", function callback(){
//     console.log ( 'yummy 🍣\n' )
// })

// // fire the event - triggers callback
// eventEmitter.emit('lunch');
// eventEmitter.emit('lunch');

// // file system - allows both blocking and non-blocking operations


// var {
//     readFile, readFileSync
// } = require('fs')

// function doReadFileSync() {
//     const txt = readFileSync('./hello.txt', 'utf8')
//     console.log("\nsynchronous file sync:\n")
//     console.log(txt)
// }

// doReadFileSync()
// console.log('do this ASAP')
//     // this won't run until after the file has been read
//     // since this code is synchronous
//     // let's send the callback!

// readFile('./hello.txt', 'utf8', 
//     function callback(err, text){
//         console.log("\ncallback (err, text):")
//         console.log(text)
//         // imagine the callback chain tho...
//             // NOTE: this is the dreaded 'callback hell'
//     })

// console.log("Doing this important SYNCHRONOUS code BEFORE text reading")
// console.log("1 - synchroonous code, 2 - microtask callbacks, 3 - event callbacks\n")


// // Promises - callback chain, but much more readable
// var { readFile } = require('fs').promises; // promise ≈ coroutine in python

// async function hello(){
//     const file = await readFile('./hello.txt', 'utf8');
//     console.log("\nasync function hello:")
//     console.log(file)
// }

// hello()



// // ..................... modules ..............
// // 😻 😻 😻  hop on to my-module.mjs

// const myModule = require("./my-module")

// ------------- EXPRESS JS ----------------

const  express  = require('express')
// const { readFile } = require('fs')
const { readFile } = require('fs').promises;

const app = express();

app.get('/', async (request, response) => {
        // readFile('./home.html', 'utf8', 
        //     (err, html) => {
        //         if (err){
        //             response.status(500).send('sorry...')
        //         }
        //         response.send(html)
        response.send(await readFile('./home.html', 'utf-8'))
    });

app.listen(
    process.env.PORT || 3030,
    () => console.log("App available on http://localhost:3030"))
