# pizdos
The stupid-simple library/utility for DoS.
## Using
### Library-way
Require it and use `attack` method.
It takes 2 arguments: `url` and `options`.
For example:
```
const pizdos = require('pizdos')
pizdos.attack('https://google.com', { attackDuration: 100000 })
```
`options` is object with attack parameters. By default it looks like this:
```
{
    "attackDuration": 60000,
    "processesCount": 10,
    "requestsFrequency": 1
}
```
You can change any parameters by passing your object to the `attack` method.
### Utility-way
1. Install it using command `npm i pizdos -g`.
2. Start attack using command `pizdos *url* *attackDuration* *processesCount* *requestsFrequency*`
3. ???
4. PROFIT

