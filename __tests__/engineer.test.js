const Engineer = require('../lib/engineer');
const { expectToBe, expectStr, expectNum } = require('../utils/expect');

const engineer = new Engineer('Jones', 'Julio', 2, 'stevewoz');

test('creates an engineer object', () => {
    expectToBe(engineer.lastName, 'Jones');
    expectToBe(engineer.firstName, 'Julio');
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
    expectStr(engineer.getName(), `${engineer.firstName} ${engineer.lastName}`);
});

test('role', () => {
    expectStr(engineer.getRole(), engineer.role);
});

test('icon', () => {
    expectStr(engineer.getIcon(), engineer.icon);
});