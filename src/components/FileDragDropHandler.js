import React, { Component } from 'react';

class FileDragDropHandler extends Component {
    constructor(props) {
        super(props);
    }

    handleDragEnter = e => {
        e.preventDefault();
        e.stopPropagation();
    };

    handleDragLeave = e => {
        e.preventDefault();
        e.stopPropagation();
    };

    handleDragOver = e => {
        e.preventDefault();
        e.stopPropagation();
    };

    handleDrop = async (e) => {
        e.preventDefault();
        try {
            const reader = new FileReader();
            reader.onload = async (e) => {
                const text = (e.target.result);
                // console.log(text);
                this.props.stateHandler("apiData", JSON.parse(text));
            };

            reader.readAsText(e.dataTransfer.files[0]);
        } catch (err) {}

        e.stopPropagation();
        e.dataTransfer.clearData();
    }

    render() {
        return (
            <div className='drag-drop-zone'
                 onDrop={e => this.handleDrop(e)}
                 onDragOver={e => this.handleDragOver(e)}
                 onDragEnter={e => this.handleDragEnter(e)}
                 onDragLeave={e => this.handleDragLeave(e)}>
                <p>Drag A JSON File here to visualize data</p>
            </div>
        )
    }
}

export default FileDragDropHandler;