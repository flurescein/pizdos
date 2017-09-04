# pizdos
The stupid-simple library/utility for DoS.
## Using
### Library-way
Require pizdos and use `attack` method. It takes 2 arguments: `url` and `options`.
For example:
```js
const pizdos = require('pizdos')
pizdos.attack('https://google.com', { duration: 100000 })
```
`options` is an object with attack parameters. By default it looks like this:
```json
{
    "duration": 60000,
    "frequency": 100
}
```
You can change any parameters by passing your object to the `attack` method.
### Utility-way
1. Install it using command `npm i pizdos -g`.
2. Start attack using command `pizdos *url* *duration* *frequency*`
3. ???
4. PROFIT

For example: `pizdos https://google.com 100000`