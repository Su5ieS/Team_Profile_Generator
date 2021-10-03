const Employee = require('../lib/Employee');

test('can make a new employee', () => {
    const emp = new Employee();
    expect(typeof(emp)).toBe('object');
});