//console.log('hi');
const chalk = require('chalk');
let randomColor = require('randomcolor'); 
let hueChoice = process.argv[2];
let lumChoice = process.argv[3];

if (hueChoice === 'red' || hueChoice === 'orange' || hueChoice === 'yellow' || hueChoice === 'green' || hueChoice === 'blue' 
|| hueChoice === 'purple' || hueChoice === 'pink')
{
let color = randomColor(
    {hue: hueChoice,
     luminosity: lumChoice
})
 
let pattern = ` #################### \n #################### 
 ##### ${color} ###### \n #################### \n ####################`

 console.log(chalk.hex(color)(pattern));}
 else {console.log('Invalid color, please choose one of the following: red, orange, yellow, green, blue, purple, pink')}
