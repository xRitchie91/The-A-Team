const Employee = require ('.lib/employee');
const { expectToBe, expectStr, expectNum } = require('..utils/expect');

const employee = new Employee('Steve', 'Jobs', 7);

test('creates employee', () => {
    expectToBe(employee.lastName,'Jobs');
    expectToBe(employee.firstName, 'Steve');
    expectStr(employee.email, '@');
    expectNum(employee.id);
    expectToBe(employee.role, 'Employee');
    expectToBe(employee.icon, 'fas fa-user-friends');
});

test('email', () => {
    expectStr(employee.getEmail(), employee.email);
});

test('icon', () => {
    expectStr(employee.getIcon(), employee.icon);
});

test('IDs', () => {
    expectStr(employee.getId(), `${employee.id}`);
});

test('names', () => {
    expectStr(employee.getName(), `${employee.lastName} ${employee.firstName}`);
});

test('roles', () => {
    expectStr(employee.getRole(), employee.role);
});