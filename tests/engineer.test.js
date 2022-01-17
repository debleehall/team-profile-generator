const Engineer = require('../lib/engineer');

test('creates an Engineer object', () => {
    const engineer = new Engineer('Bob', 30, 'bob123@gmail.com', 'bobbq123');
    
    expect(engineer.github) .toEqual(expect.any(String));
});

test('gets engineer github value', () => {
    const engineer = new Engineer('Bob', 30, 'bob123@gmail.com', 'bobbq123');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

test('gets role of employee', () => {
    const engineer = new Engineer('Bob', 30, 'bob123@gmail.com', 'bobbq123');

    expect(engineer.getRole()).toEqual("Engineer");
});