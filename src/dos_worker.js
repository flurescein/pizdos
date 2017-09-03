const request = require('request')

setInterval(() => {
    request(process.argv[2])
}, process.argv[4])

setTimeout(() => {
    console.log(`${process.argv[5]} process is complete.`)
    process.abort()
}, process.argv[3])