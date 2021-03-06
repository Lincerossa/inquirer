const { exec } = require('child_process');
const chalk = require('chalk');
var inquirer = require('inquirer');

const log = console.log

var questions = [
  {
    type: 'confirm',
    name: 'doYouLikeHim',
    message: 'Ti piace Marcello?',
    default: true
  },
  {
    type: 'input',
    name: 'howMuchDoYouLikeHim',
    message: "da uno a 10 quanto ti piace?",
    validate: function(value) {
      var pass = value.match(
        /^([1-9]|10)$/
      );
      if (pass) {
        return true;
      }
      return 'Inserisci un numero valido da 1 a 10';
    }
  },
  {
    type: 'list',
    name: 'size',
    message: 'Quanto è grosso',
    choices: ['Piccolo', 'Medio', 'Enorme'],
  },
  {
    type: 'expand',
    name: 'Food',
    message: 'Il Suo cibo preferito',
    choices: [
      {
        key: 'p',
        name: 'Pepperoni',
        value: 'Pepperoni'
      },
      {
        key: 'a',
        name: 'Tutto',
        value: 'all'
      },
      {
        key: 'w',
        name: 'Niente',
        value: null
      }
    ]
  },
];

inquirer.prompt(questions).then(answers => {
  const { doYouLikeHim, howMuchDoYouLikeHim, size } = answers

  console.log(JSON.stringify(answers, null, '  '));

  if(doYouLikeHim && howMuchDoYouLikeHim === "10" && size === "Enorme"){
    log(chalk.blue("tutte risposte esatte"))
    exec("npm install react")
    log(chalk.green("installato react"))
    return 
  }
  
  exec("npm install jquery") 
  log(chalk.red("tutte risposte brutte"))
  exec("npm install jquery")
  log(chalk.red("installato jquery"))
}); 