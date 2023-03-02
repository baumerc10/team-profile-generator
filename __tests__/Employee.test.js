const Employee = require ('../lib/Employee');

test('Creates an employee object instance', () => {
    const employee = new Employee();
    expect(typeof(employee).toEqual('object'));
});

test('Get employee name', () => {
    const name = 'Cody';
    const employee = new Employee(name);
    expect(employee.getName()).toEqual(name);
});

test('Get employee ID', () => {
    const id = 10;
    const employee = new Employee('Cody', id);
    expect(employee.getId()).toEqual(id);
});

test('Get employee email', () => {
    const email = 'baumerc10@gmail.com';
    const employee = new Employee('Cody', 10, 'baumerc10@gmail.com');
    expect(employee.getEmail()).toEqual(email);
});

test('Get employee role', () => {
    const role = 'Employee';
    const employee = new Employee('Cody', 10, 'baumerc10@gmail.com');
    expect(employee.getRole()).toEqual(role);
}); 