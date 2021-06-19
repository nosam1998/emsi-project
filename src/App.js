import './App.css';
import {Component} from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import Overview from "./components/Overview";
import GraphView from "./components/GraphView";
import Summary from "./components/Summary";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            apiUrl: "",
            apiData: null,
            selectedFile: null
        };

        this.stateHandler = this.stateHandler.bind(this);
        this.getUrlResponseData = this.getUrlResponseData.bind(this);
    }

    stateHandler(stateName, stateValue) {
        this.setState({[stateName]: stateValue});
    }

    getUrlResponseData() {
        axios.get(this.state.apiUrl).then(response => {
            console.log(response)
            this.setState({apiData: response.data});
        });
    }

    formatGraph(trendComparisonJson) {
        let graphData = [];
        let tempGraphData = {};

        return graphData;
    }

    generateGraph() {
        if (this.state.apiData.length > 0) {
            let parsedApiData = JSON.parse(this.state.apiData);
            return <GraphView parsedApiData={parsedApiData.trend_comparison}/>;
        } else {
            return ""
        }
    }


    render() {
        return (
            <>
                <div className="row px-5">
                    <Overview stateHandler={this.stateHandler} apiUrl={this.state.apiUrl}
                              getUrlResponseData={this.getUrlResponseData}/>

                </div>

                <div className="row">
                    {this.state.apiData !== null
                    ? <Summary apiData={this.state.apiData}/>
                    : "Not Yet" }
                </div>
            </>
        )
    }
}

export default App;
