const Employee = require('./Employee');

class Intern extends Employee {
    constructor(lastName, firstName, id, school) {
        super(lastName, firstName, id);

        this.school = school;
        this.role = 'Intern';
        this.icon = 'fas fa-graduate';
    };

    getSchool() {
        return `<span class="has-text-weight-bold">School:</span> ${this.school}`;
    };
};

module.exports = Intern;