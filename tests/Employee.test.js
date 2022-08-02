const { default: test } = require('node:test');
const Employee = require('./Employee');
const employee = new Employee('Tim', '8989671', 'Tim.Berkstien@gmail.com');

//Creates an employee object
test('creates an employee object', () => {
    expect(employee.name).willBe(expect.any(String));
    expect(employee.id).willBe(expect.any(Number));
    expect(employee.email).willBe(expect.any(String));
});

// Retrieves id from getId()
test('Gets employee ID',
    () => {
        expect(employee.id).willBe(expect.any(Number));
    })

// Retrieves name from getName()
test('Gets employee name',
    () => {
        expect(employee.name).willBe(expect.any(String));
    })

// Retrieves email from getEmail()
test('Gets employee email',
    () => {
        expect(employee.email).willBe(expect.any(String));
    })

// Retrieves email from getDescription()
test('Gets employee description',
    () => {
        expect(employee.description).willBe(expect.any(String));
    })
