//console.log('hi');
const chalk = require('chalk');
let randomColor = require('randomcolor'); 
let hueChoice = process.argv[2];
let lumChoice = process.argv[3];


 let rows = process.argv[4];
 let columns = process.argv[6]


if (hueChoice === 'red' || hueChoice === 'orange' || hueChoice === 'yellow' || hueChoice === 'green' || hueChoice === 'blue' 
|| hueChoice === 'purple' || hueChoice === 'pink')
{
let color = randomColor(
    {hue: hueChoice,
     luminosity: lumChoice
})
 
let pattern = ` #################### \n #################### 
 ##### ${color} ###### \n #################### \n ####################`

 let stretch 

 console.log(chalk.hex(color)(pattern));
 



  let star = "";
for(let i=1; i<=rows; i++) {
  
  for(let j=1; j<=columns; j++) {
    star += "#";
  }
  star += "\n";
}
console.log(chalk.hex(color)(star));}

else {console.log('Invalid color, please choose one of the following: red, orange, yellow, green, blue, purple, pink')}