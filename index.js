//console.log('hi');
const chalk = require('chalk');
const randomColor = require('randomcolor');
const hueChoice = process.argv[2];
const lumChoice = process.argv[3];


const rows = process.argv[4];
const columns = process.argv[6]


if (hueChoice === 'red' || hueChoice === 'orange' || hueChoice === 'yellow' || hueChoice === 'green' || hueChoice === 'blue'
  || hueChoice === 'purple' || hueChoice === 'pink') {
  let color = randomColor(
    {
      hue: hueChoice,
      luminosity: lumChoice
    })

  const pattern = ` #################### \n ####################
 ##### ${color} ###### \n #################### \n #################### \n`


  console.log(chalk.hex(color)(pattern));


  let hashtag = "";
  for (let i = 1; i <= rows; i++) {
    if (i !== Math.ceil(rows / 2)) {

      for (let j = 1; j <= columns; j++) {
        hashtag += "#";
      }
    }
    if (i !== Math.ceil(rows / 2)) {
      hashtag += "\n";
    } else { hashtag += `##  ${color}  ## \n` }
  }
  console.log(chalk.hex(color)(hashtag));
}

else {
  const color = randomColor()

  const pattern = ` #################### \n ####################
 ##### ${color} ###### \n #################### \n #################### \n`

  console.log(chalk.hex(color)(pattern));
}