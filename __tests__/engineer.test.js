const Engineer = require('../lib/Engineer');
const { expectToBe, expectStr, expectNum } = require('../utils/expect');

const engineer = new Engineer('Steve', 'Woz', 11, 'stevewoz');

test('creates an engineer object', () => {
    expectToBe(engineer.lastName, 'Woz');
    expectToBe(engineer.firstName, 'Steve');
    expectStr(engineer.email, '@');
    expectNum(engineer.id);
    expectToBe(engineer.role, 'Engineer');
    expectToBe(engineer.icon, 'fas fa-id-badge');
});

test('email', () => {
    expectStr(engineer.getEmail(), engineer.email);
});

test('github', () => {
    expectStr(engineer.getGithub(), engineer.github);
});

test('ID', () => {
    expectStr(engineer.getId(), `${engineer.id}`);
});

test('name', () => {
    expectStr(engineer.getName(), `${engineer.lastName} ${engineer.firstName}`);
});

test('role', () => {
    expectStr(engineer.getRole(), engineer.role);
});

test('icon', () => {
    expectStr(engineer.getIcon(), engineer.icon);
});