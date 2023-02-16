const Manager = require('../lib/Manager');

test('Create a Manager object.', () => {
    const manager = new Manager('Cody', 10, 'baumerc10@gmail.com', 1);
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('Get Employee role.', () => {
    const manager = new Manager('Cody', 10, 'baumerc10@gmail.com', 1);
    expect(manager.getRole()).toEqual('Manager');
})