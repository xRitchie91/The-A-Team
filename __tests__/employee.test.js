const Employee = require ('../lib/employee');
const { expectToBe, expectStr, expectNum } = require('../utils/expect');

const employee = new Employee('Steve', 'Poop', 7);

test('creates employee', () => {
    expectToBe(employee.firstName, 'Poop');
    expectToBe(employee.lastName, 'Steve');
    expectStr(employee.email, '@');
    expectToBe(employee.icon, 'fas fa-user-friends');
    expectNum(employee.id);
    expectToBe(employee.role, 'Employee');
});

test('email', () => {
    expectStr(employee.getEmail(), employee.email);
});

test('icon', () => {
    expectStr(employee.getIcon(), employee.icon);
});``

test('IDs', () => {
    expectStr(employee.getId(), `${employee.id}`);
});

test('names', () => {
    expectStr(employee.getName(), `${employee.firstName} ${employee.lastName}`);
});

test('roles', () => {
    expectStr(employee.getRole(), employee.role);
});