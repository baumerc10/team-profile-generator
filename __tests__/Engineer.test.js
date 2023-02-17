const Engineer = require('../lib/Engineer');

test('Create an Engineer object.', () => {
    const testGH = "baumerc10";
    const engineer = new Engineer('Cody', 10, 'baumerc10@gmail.com', testGH);
    expect(engineer.github).toEqual(testGH);
});

test('Get GitHub user.', () => {
    const testGH = "baumerc10";
    const engineer = new Engineer('Cody', 10, 'baumerc10@gmail.com', testGH);
    expect(engineer.getGithub()).toEqual(testGH);
});

test('Get employee role.', () => {
    const testGH = "baumerc10";
    const engineer = new Engineer('Cody', 10, 'baumerc10@gmail.com', testGH);
    expect(engineer.getRole()).toEqual('Engineer');
});