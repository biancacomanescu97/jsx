import { func } from "prop-types";
import React from "react";
import ReactDOM from "react-dom";

function getButtonText() {
    return 'Click on me!'
}

const App = function() {
    const buttonText = {text: 'Click Me!'};
    const labelText = 'Enter name:';

    return ( 
        <div>
            <label className="label" htmlFor="name">
                {labelText}
            </label>
            <input id="name" type="text" />
            <button style={{backgroundColor: 'blue', color: 'white'}}>
                {buttonText.text}
            </button>
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);