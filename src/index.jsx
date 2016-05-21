import React from 'react';
import {render} from 'react-dom';
import Button from './Button.jsx';
require('./../assets/style.css');

class App extends React.Component {
    render () {
        return (
            <div>
                <p> Hello React!</p>
                <Button />
            </div>
        );
    }
}

render(<App/>, document.getElementById('app'));