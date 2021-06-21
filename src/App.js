import './App.css';
import {Component} from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import Overview from "./components/Overview";
import GraphView from "./components/GraphView";
import Summary from "./components/Summary";
// import FileHandler from "./components/FileHandler";
import FileDragDropHandler from "./components/FileDragDropHandler";

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
    //
    // formatGraph(trendComparisonJson) {
    //     let graphData = [];
    //     let tempGraphData = {};
    //
    //     return graphData;
    // }

    // generateGraph() {
    //     let result = "";
    //     if (this.state.apiData) {
    //         result = <GraphView graphData={this.state.apiData}>
    //     }
    //
    // }


    render() {
        // let result = "";
        // if (this.state.apiData) {
        //     result = <GraphView graphData={this.state.apiData}>
        // }

        return (
            <>
                <div className="container">
                    <div className="row px-5">
                        <Overview stateHandler={this.stateHandler} apiUrl={this.state.apiUrl}
                                  getUrlResponseData={this.getUrlResponseData}/>
                        {/*<FileHandler stateHandler={this.stateHandler} />*/}
                        <FileDragDropHandler stateHandler={this.stateHandler} />
                    </div>

                    {this.state.apiData !== null &&
                        <div className="row">
                            <Summary apiData={this.state.apiData}/>
                        </div>
                    }

                    {this.state.apiData !== null &&
                        <div className="row">
                            <GraphView graphData={this.state.apiData.trend_comparison} />
                        </div>
                    }
                </div>
            </>
        )
    }
}

export default App;
