import test from 'tape';
import sinon  from 'sinon';
import PubSub from './../src/PubSub';

test('Test should call subscribers on publish', assert => { // What component aspect are you testing?
    let callback = sinon.spy();
    const pubSubObj = PubSub.create();
    pubSubObj.subscribe("event", callback);
    pubSubObj.publishSync("event");
    const actual = callback.called; // What is the actual output?
    const expected = true;  // What is the expected output?'
    assert.equal(actual, expected, 'the callback function should be called'); // What should the feature do?
    assert.end();
});

test('Test should inspect pubSubObj.getJSONData\'s usage', assert => {
    const pubSubObj = PubSub.create();
    sinon.spy(pubSubObj, "getJSONData");
    pubSubObj.getJSONData(0);
    const actual = pubSubObj.getJSONData.calledOnce;
    const expected = true;
    assert.equal(actual, expected, 'the function should be called once');
    assert.equal(0, pubSubObj.getJSONData.getCall(0).args[0], 'the function should be with arg equal 1');
    pubSubObj.getJSONData.restore(); // Unwraps the spy
    assert.end();
});