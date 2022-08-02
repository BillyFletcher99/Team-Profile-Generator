const Manager = require('./Employee');

//Manager Object
test('creates an Manager object', () => {
    const manager = new Manager('Tim', '8989671', 'Tim.Berkstien@gmail.com', 2);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

// gets role description from getDescripition()
test('gets role of employee', () => {
    const manager = new Manager('Tim', '8989671', 'Tim.Berkstien@gmail.com');

    expect(manager.getRole()).toEqual("Manager");
}); 