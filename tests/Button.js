import React from 'react';
import { createRenderer } from 'react-addons-test-utils';
import createComponent from 'react-unit';
import tape from 'tape';
import addAssertions from 'extend-tape';
import jsxEquals from 'tape-jsx-equals';
const test = addAssertions(tape, {jsxEquals});

// Component to test
import Button from './../src/Button';

test('----- React Component Tests: Button -----', (t) => {

    // Shallow rendering: Render React element only *one* level deep
    const component = createComponent.shallow(<Button label="Button" />);
    // Test component props and content
    t.equal(component.props.className, 'button', 'ClassName props of component should equal "button"');
    t.equal(component.text, 'Button', 'Label props of component should be rendered as Button text "Button"');

    // Test rendered output
    const renderer = createRenderer();
    renderer.render(<Button label="Button" />);
    const result = renderer.getRenderOutput();
    t.jsxEquals(result, <div className="button">Button</div>);

    t.end();
});