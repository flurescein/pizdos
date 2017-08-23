// ---------------------------- Imports. ---------------------------------
const fs = require('fs')

class Pizdos {
    // Public.
    static startAttack(url, options) {
        fs.readFile('./config/standart-options.json',
                    'utf8',
                    (err, data) => {
            if (err) throw err
            
            const o = Object.assign(JSON.parse(data), options)
            console.log(o)
        })
    }

    // Private.
    static _attack(url) {
        console.log(url)
    }
}

Pizdos.startAttack("Hello World!", { processesCount: 10 })