'use strict';
var inquirer = require('inquirer');
var fileSystem = require('fs');
const Choices = require('inquirer/lib/objects/choices');
const { type } = require('os');

console.log('Hi, welcome to ReadmeWriteMe');

inquirer.prompt([

    {
        name: 'title',
        message: 'What is the title of your project?',
        type: 'input'
    },
    {
        name: 'description',
        message: 'What is the purpose of your project?',
        type: 'input'
    },
    {
        name: 'installation',
        message: 'What are the installation instructions for your project?',
        type: 'input'
    },
    {
        name: 'usage',
        message: 'What is the usage information of your project?',
        type: 'input'
    },
    {
        name: 'licenses',
        message: 'What license is your project using?',
        type: 'list',
        choices: ['Community', 'MIT', 'GNU GPLv3'],
    },
    {
        name: 'contributing',
        message: 'Who helped create this project?',
        type: 'input'
    },
    {
        name: 'tests',
        message: 'What are the testing instructions for your project?',
        type: 'input'
    },
    {
        name: 'questions',
        message: 'Please enter email/github contact information here, for users who have questions or need to make contact.',
        type: 'input'
    }


]).then(function (answer) {
    console.log(answer);
    
    //open or create your README.md
    fileSystem.appendFile('README.md', 

'<h1>Title</h1><p>' + answer.title + '</p>' + '<h1>Description</h1><p>' + answer.description + '</p>' + '<h1>Table of Contents:</h1><p><a href="#h_902144058131612368984008">Installation</a></p><p><a href="#h_789794063171612369087348">Usage</a></p><p><a href="#h_992274396251612369107550">Licenses</a></p><p><a href="#h_14487602321612369128728">Contributing</a></p><p><a href="#h_607443461381612369138493">Tests</a></p><p><a href="#h_371752051431612369147755">Questions</a></p><h1>Installation</h1><p>' + answer.installation + '</p>' + '<h1>Usage</h1><p>' + answer.usage + '</p>' + '<h1>Contributing</h1><p>' + answer.contributing + '</p>' + '<h1>Tests</h1><p>' + answer.tests + '</p>' + '<h1>Questions</h1><p>' + answer.questions + '</p>' + '<h1>Licenses</h1><p>' + answer.liscenses + '</p>'
, function (err) {
        if (err) throw err;

    });
});