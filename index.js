const inquirer = require('inquirer');
const fs = require('fs');
const Shape = require('./lib/shapes');

inquirer 
    .prompt([
        {
            type: 'input',
            name: 'text',
            message: "enter three characters for your logo text:",
            validate: function(value) {
                return value.lenth = 3 ?
                true : 'Please enter three characters.';
            },
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter the color you want as text (color keyword or hexadecimal number):',
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Pick a shape for your logo:',
            choices: ['circle', 'triangle', 'square'],
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter the background color of your shape (color keyword or hexadecimal number):',
        },
    ])
    .then((answers) => {
        const 
    })