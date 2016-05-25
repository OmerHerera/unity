import test from 'tape';
import simple from './../src/simple'

// For each unit test you write,
// answer these questions:

test('Testing Simple Component', assert => { // What component aspect are you testing?
    const actual = simple.create(); // What is the actual output?
    const expected = 'object';  // What is the expected output?'
    assert.equal(typeof actual, expected, 'What should the feature do? - the function should return an object');
    assert.end();
});

test('Assertions with tape.', (assert) => {
    const expected = 'something to test';
    const actual = 'something to test';
    assert.equal(actual, expected, 'Given two mismatched values, .equal() should produce a nice bug report');
    assert.end();
});