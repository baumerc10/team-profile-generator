const Engineer = require('../lib/Engineer');

test('Create an Engineer object.', () => {
    const engineer = new Engineer('Cody', 10, 'baumerc10@gmail.com');
    expect(engineer.github).toEqual(expect.any(String));
});

test('Get GitHub user.', () => {
    const engineer = new Engineer('Cody', 10, 'baumerc10@gmail.com');
    expect(engineer.getGithub()).toEqual(expect.stringContaining(e.github.toString()));
});

test('Get employee role.', () => {
    const engineer = new Engineer('Cody', 10, 'baumerc10@gmail.com');
    expect(engineer.getRole()).toEqual('Engineer');
});