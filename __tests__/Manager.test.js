const Manager = require('../lib/Manager');

test('Create a Manager object.', () => {
    const manager = new Manager('Cody', 10, 'baumerc10@gmail.com', 1);
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('Get Employee role.', () => {
    const manager = new Manager('Cody', 10, 'baumerc10@gmail.com');
    expect(manager.getRole()).toEqual('Manager');
})

test('Get Manager office number.', () => {
    const officeNumber = 1;
    const manager = new Manager('Cody', 10, 'baumerc10@gmail.com', officeNumber);
    expect(manager.getOfficeNumber()).toEqual(officeNumber);
})