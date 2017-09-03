#!/usr/bin/env node
const pizdos = require(__dirname + '/../src/pizdos')

let options = {
    "attackDuration": process.argv[3],
    "requestsFrequency": process.argv[4]  
}

for (parameter in options) {
    if (!options[parameter]) {
        delete options[parameter]
    }
}

pizdos.attack(process.argv[2], options)