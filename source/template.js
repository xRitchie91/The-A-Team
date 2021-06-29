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
        
        const { firstName, lastName, id, role } = employee;
        let newEmployee = '';
        let extraInfo = '';

        switch (role) {
            case 'Manager':
                newEmployee = new Manager(formatName(lastName), formatName(firstName), id, employee.officeNumber);
                extraInfo = newEmployee.getOfficeNumber();
                break;
            case 'Engineer': 
                newEmployee = new Engineer(formatName(lastName), formatName(firstName), id, employee.github);
                extraInfo = newEmployee.getGithub();
                break;
            case 'Intern':
                newEmployee = new Intern(formatName(lastName), formatName(firstName), id, employee.school);
                extraInfo = newEmployee.getSchool();
                break;
            default:
                newEmployee = new Employee(formatName(lastName), formatName(firstName), id);
        };

       