const Employee = require('./Employee');

class Manager extends Employee {
    constructor(lastName, firstName, id, officeNumber) {
        super(lastName, firstName, id);
        
        this.officeNumber = officeNumber;
        this.role = 'Manager';
        this.icon = 'fas fa-user-tie';
    };

    getOfficeNumber() {
        return `<span class="has-text-weight-bold">Office Number:</span> ${this.officeNumber}`;
    };
};

module.exports = Manager;