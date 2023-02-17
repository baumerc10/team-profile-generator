const Intern = require('../lib/Intern');

test('Create an Intern object.', () => {
    const testSchool = "UConn";
    const intern = new Intern('Cody', 10, 'baumerc10@gmail.com', testSchool);
    expect(intern.school).toEqual(testSchool);
});

test ('Get Employee school.', () => {
    const testSchool = "UConn";
    const intern = new Intern('Cody', 10,'baumerc10@gmail.com', testSchool);
    expect(intern.school).toEqual(intern.school);
});

test('Get Employee role.', () => {
    const testSchool = "UConn";
    const intern = new Intern('Cody', 10,'baumerc10@gmail.com', testSchool);
    expect(intern.getRole()).toEqual('Intern');
});