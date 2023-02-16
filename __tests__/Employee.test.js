const Employee = require ('../lib/Employee');

test('Creates an employee object instance', () => {
    const employee = new Employee('Cody', 10, 'baumerc10@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test('Get employee name', () => {
    const employee = new Employee('Cody', 10, 'baumerc10@gmail.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

test('Get employee ID', () => {
    const employee = new Employee('Cody', 10, 'baumerc10@gmail.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

test('Get employee email', () => {
    const employee = new Employee('Cody', 10, 'baumerc10@gmail.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

test('Get employee role', () => {
    const employee = new Employee('Cody', 10, 'baumerc10@gmail.com');

    expect(employee.getRole()).toEqual("Employee");
}); 