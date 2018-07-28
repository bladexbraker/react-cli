"use strict";
const StartInquirer = require('../inquirers/start.inquirer');

exports.command = '$0'; 
exports.des = 'What Would you like to do?';
exports.builder = yargs => {}; 
exports.handler = argv => {
    StartInquirer.init();
};