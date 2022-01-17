const Manager = require('../lib/manager');

test('creates an Manager object', () => {
    const manager = new Manager('Bob', 30, 'bob123@gmail.com', 10);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('gets role of employee', () => {
    const manager = new Manager('Bob', 30, 'bob123@gmail.com');

    expect(manager.getRole()).toEqual("Manager");
}); 