const Manager = require ('../lib/manager');
const { expectToBe, expectStr, expectNum } = require('../utils/expect');

const manager = new Manager('Duncan', 'Tim', 1, 100);

test('creates a manager object', () => {
    expectToBe(manager.lastName,'Duncan');
    expectToBe(manager.firstName, 'Tim');
    expectStr(manager.email, '@');
    expectNum(manager.id);
    expectNum(manager.officeNumber);
    expectToBe(manager.role, 'Manager');
    expectToBe(manager.icon, 'fas fa-user-tie');
});

test('gets manager\'s email', () => {
    expectStr(manager.getEmail(), manager.email);
});

test('gets manager\'s ID', () => {
    expectStr(manager.getId(), `${manager.id}`);
});

test('gets manager\'s name', () => {
    expectStr(manager.getName(), `${manager.firstName} ${manager.lastName}`);
});

test('gets manager\'s office number', () => {
    expectStr(manager.getOfficeNumber(), `${manager.officeNumber}`);
});

test('gets manager\'s role', () => {
    expectStr(manager.getRole(), manager.role);
});

test('gets manager\'s icon', () => {
    expectStr(manager.getIcon(), manager.icon);
});