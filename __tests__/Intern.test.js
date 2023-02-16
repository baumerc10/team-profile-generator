const Intern = require('../lib/Intern');

test('Create an Intern object.', () => {
    const intern = new Intern('Cody', 10, 'UConn');
    expect(intern.school).toEqual(expect.any(String));
});

test ('Get Employee school.', () => {
    const intern = new Intern('Cody', 10, 'UConn');
    expect(intern.school).toEqual(expect.stringContaining(intern.school.toString()));
});

test('Get Employee role.', () => {
    const intern = new Intern('Cody', 10, 'UConn');
    expect(intern.getRole()).toEqual('Intern');
});