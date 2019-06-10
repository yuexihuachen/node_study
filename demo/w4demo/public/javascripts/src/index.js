import React from 'react';
import ReactDOM from 'react-dom';

class Index extends React.Component {
    render() {
        return (
            <div className="App">
                <h1> Hello, World! </h1>
            </div>
        );
    }
}

ReactDOM.render(<Index />, document.getElementById('index'));



