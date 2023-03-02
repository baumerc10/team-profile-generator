const Manager = require('../lib/Manager');

test('Create a Manager object.', () => {
    const manager = new Manager('Cody', 10, 'baumerc10@gmail.com', officeNum);
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('Get Employee role.', () => {
    const manager = new Manager('Cody', 10, 'baumerc10@gmail.com', officeNum);
    expect(manager.getRole()).toEqual('Manager');
})

test('Get Manager office number.', () => {
    const officeNum = 1;
    const manager = new Manager('Cody', 10, 'baumerc10@gmail.com', officeNum);
    expect(manager.getOfficeNumber()).toEqual(officeNum);
})