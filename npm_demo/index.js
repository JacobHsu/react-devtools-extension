const cliSpinners = require('cli-spinners');
const {dots} = require('cli-spinners');
const logUpdate = require('log-update');
var nullthrows = require('nullthrows').default;

console.log( nullthrows(123) )
 
console.log(cliSpinners.dots);
/*
{
    interval: 80,
    frames: ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏']
}
*/

// logUpdate
const {frames, interval} = dots;
//const frames = ['-', '\\', '|', '/'];
let i = 0;
 
setInterval(() => {
    const frame = frames[i = ++i % frames.length];
 
    logUpdate(
`
        ♥♥
   ${frame} unicorns ${frame}
        ♥♥
`
    );
}, 80);