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

        allCards += `
        <div class="column is-one-quarter-desktop">
            <div class="card">
                <div class="card-content">
                    <div class="media">
                        <div class="media-left">
                            ${newEntry.getIcon()}
                        </div>
                        <div class="media-content">
                            <p class="title is-4 has-text-black">${newEntry.getName()}</p>
                            <p class="subtitle is-6 has-text-black">${newEntry.getRole()}</p>
                        </div>
                    </div>
                    <div class="content">
                        <p>${newEntry.getEmail()}<br />
                        ${newEntry.getId()}<br />
                        ${info}</p>
                    </div>
                </div>
            </div>
        </div>`
    });
    return allCards;
};

const generateHTML = templateData => {
    return `
            <!DOCTYPE html>
            <html lang="en">
        
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta http-equiv="X-UA-Compatible" content="ie=edge">
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.9.1/css/bulma.min.css" />
                <title>Team Generator</title>
                <link rel="icon" href="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/socialmedia/apple/285/briefcase_1f4bc.png">
            </head>
            
            <body>
                <section class="hero is-info is-fullheight">
                    <div class="hero-body">
                        <div class="container">
                            <h1 class="title">The A Team</h1>
                        </div>
                    </div>
                </section>
                <main class="m-6">
                    <div class="columns is-flex is-flex-wrap-wrap is-flex-direction-row is-justify-content-center">
                        ${addEmployee(templateData)}
                    </div>
                </main>
            </body>
            </html>
            `;
        };
        
        module.exports = generateHTML;
                    