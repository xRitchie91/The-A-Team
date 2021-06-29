const formatName = require('../utils/helper');
const Employee = require('../lib/employee');
const Manager = require('../lib/manager');
const Engineer = require('../lib/engineer');
const Intern = require('../lib/intern');

// addEmployee function
const addEmployee = employeeInfo => {

    // employee cards
    let allCards = '';

    employeeInfo.forEach(employee => {    
        
        const { lastName, firstName, id, role } = employee;
        let newEntry = '';
        let info = '';

        switch (role) {
            case 'Manager':
                newEntry = new Manager(formatName(lastName), formatName(firstName), id, employee.officeNumber);
                info = newEntry.getOfficeNumber();
                break;
            case 'Engineer': 
                newEntry = new Engineer(formatName(lastName), formatName(firstName), id, employee.github);
                info = newEntry.getGithub();
                break;
            case 'Intern':
                newEntry = new Intern(formatName(lastName), formatName(firstName), id, employee.school);
                info = newEntry.getSchool();
                break;
            default:
                newEntry = new Employee(formatName(lastName), formatName(firstName), id);
        };
