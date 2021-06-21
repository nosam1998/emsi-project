import {Component} from "react";
import {Button, FormControl, InputGroup} from "react-bootstrap";
import Form from 'react-bootstrap/Form';


class Overview extends Component {
    constructor(props) {
        super(props);
    }

    isValidURL(string) {
        let res = string.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
        return (res !== null);
    }

    render() {
        return (
            <InputGroup className="mb-3 py-3">
                <Form.Control placeholder="Please enter a URL for the API" type="text" value={this.props.apiUrl}
                              onChange={e => this.props.stateHandler("apiUrl", e.target.value)}/>
                <InputGroup.Append>
                    <Button variant="primary" className="px-4" disabled={!this.isValidURL(this.props.apiUrl)} onClick={e => this.props.getUrlResponseData()}>Submit</Button>
                </InputGroup.Append>
            </InputGroup>
        );
    }
}

export default Overview;
