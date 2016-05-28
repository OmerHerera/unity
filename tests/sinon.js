import test from 'tape';
import sinon  from 'sinon';
import PubSub from './../src/PubSub';
import Depends from './../src/Depends'

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


function createPubSubObjStub () {
    return {
        subscribe: sinon.stub(),
        publishSync: sinon.stub(),
        getJSONData: sinon.stub(),
        fetch: sinon.stub().withArgs(null).yields('Must Pass URL'),
        fetch: sinon.stub().withArgs('URL').yields(null, 'All Good')
    }
}
test('Test control how the sinon.stub() will behave based on how it’s called', assert => { // What component aspect are you testing?
    const pubSubObj = createPubSubObjStub();
    const DependsObj = Depends.create(pubSubObj);

    // DependsObj.fetch(null, function (err, result) {
    //     assert.equal(err, 'Must Pass URL', 'the callback function must return Error');
    //     assert.end();
    // });

    DependsObj.fetch('URL', function (err, result) {
        assert.equal(err, null, 'the callback function must return null in error params');
        assert.end();
    });
});

test('Test Using Mocks', assert => {
    const pubSubObj = PubSub.create();
    const callback = sinon.mock().withExactArgs().once();

    pubSubObj.subscribe("event", callback);
    pubSubObj.publishSync("event");
    callback.verify();
    assert.end();
    
});