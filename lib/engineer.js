const Employee = require('./employee');

class Engineer extends Employee {
    constructor(lastName, firstName, id, github) {
        super(lastName, firstName, id);

        this.github = github;
        this.role = 'Engineer';
        this.icon = 'fas fa-id-badge';
    };

    getGithub() {
        return `<span class="has-text-weight-bold">GitHub:</span> <a href="https://github.com/${
            this.github}" target="_blank" class="has-text-primary">${this.github}</a>`
    };
};

module.exports = Engineer;