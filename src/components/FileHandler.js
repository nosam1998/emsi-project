import React, { Component } from 'react';

class App extends Component {

    constructor(props) {
        super(props);
    }

    handleFileUpload = async (e) => {
        e.preventDefault();
        const reader = new FileReader();
        reader.onload = async (e) => {
            const text = (e.target.result);
            this.props.stateHandler("apiData", JSON.parse(text));
        };

        try {
            reader.readAsText(e.target.files[0]);
        } catch (e) {}
    }

    render() {
        return (
            <div>
                <input type="file" accept=".json,.txt" onChange={(e) => this.handleFileUpload(e)} />
            </div>
        )
    }
}

export default App;