const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./source/template');
const formatName = require('./utils/helper');
const employeeRoster = [];

const prompts = [
    {
        type: 'list',
        name: 'role',
        message: 'What is the employee\'s role?',
        choices: // allows application to create only one manager
            () => {
            if (employeeRoster.some(employee => employee.role === 'Manager')) {
                return ['Engineer', 'Intern']    
            } else {
                return ['Manager', 'Engineer', 'Intern']
            }
        }
    },
    {
        type: 'input',
        name: 'firstName',
        message: ({ role }) => `What is the ${role.toLowerCase()}'s first name?`,
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Don\'t forget their first name!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'lastName',
        message: ({ firstName }) => `What is ${formatName(firstName)}'s last name?`,
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Don\'t forget their last name!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: ({ firstName }) => `What is ${formatName(firstName)}'s ID number?`,
        validate: idInput => {
            if (!isNaN(parseInt(idInput))) {
                return true;
            } else {
                console.log('Please enter a valid ID number!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'officeNumber',
        message:  ({ firstName }) => `What is ${formatName(firstName)}'s office number?`,
        when: ({ role }) => {
            if (role === 'Manager') {
                return true;
            } else {
                return false;
            }
        },
        validate: officeNumberInput => {
            if (!isNaN(parseInt(officeNumberInput))) {
                return true;
            } else {
                console.log('Please enter a valid number!');
                return false;
            }
        }
    }
