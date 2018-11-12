#!/usr/bin/env node

const pizdos = require(__dirname + '/../src/pizdos')

if (!process.argv[2]) {
  throw 'URL is missing.'
}

let options = {
  duration: process.argv[3],
  frequency: process.argv[4]
}

for (parameter in options) {
  if (!options[parameter]) {
    delete options[parameter]
  }
}

pizdos.attack(process.argv[2], options)
