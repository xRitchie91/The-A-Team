const Intern = require('../lib/intern');
const { expectToBe, expectStr, expectNum } = require('../utils/expect');

const intern = new Intern('Gronkowski', 'Rob', 48, 'Arizona');

test('creates an intern object', () => {
    expectToBe(intern.lastName, 'Gronkowski');
    expectToBe(intern.firstName, 'Rob');
    expectStr(intern.email, '@');
    expectNum(intern.id);
    expectToBe(intern.role, 'Intern');
    expectToBe(intern.school, 'Arizona');
    expectToBe(intern.icon, 'fas fa-user-graduate');
});

test('email', () => {
    expectStr(intern.getEmail(), intern.email);
});

test('ID', () => {
    expectStr(intern.getId(), `${intern.id}`);
});

test('name', () => {
    expectStr(intern.getName(), `${intern.firstName} ${intern.lastName}`);
});

test('role', () => {
    expectStr(intern.getRole(), intern.role);
});

test('school', () => {
    expectStr(intern.getSchool(), intern.school);
});

test('icon', () => {
    expectStr(intern.getIcon(), intern.icon);
});