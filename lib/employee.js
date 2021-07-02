class Employee {
    constructor(lastName, firstName, id) {
        this.lastName = lastName;
        this.firstName = firstName;
        this.id = id;
        this.email = `${lastName}.${firstName}@ateam.com`;
        this.role = 'Employee';
        this.icon = 'fas fa-user-friends'
    };

    getEmail() {
        return `<span class="has-text-weight-bold">Email:</span> <a href="mailto:${
            this.email}" class="has-text-primary">${this.email}</a>`;
    };

    getId() {
        return `<span class="has-text-weight-bold">ID:</span> ${this.id}`;
    };

    getName() {
        return `${this.firstName} ${this.lastName}`;
    };

    getRole() {  
        return this.role;
    };
    
    getIcon() {
        return `<i class="${this.icon} fa-3x"></i>`
    };
};

module.exports = Employee;