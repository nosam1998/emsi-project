import {Component} from "react";
import {HorizontalGridLines, LineSeries, VerticalGridLines, XAxis, XYPlot, YAxis} from "react-vis";

class App extends Component {
    constructor(props) {
        super(props);
    }

    formatGraph(trendComparisonJson) {
        let graphData = [];
        let tempGraphData = {};

        return graphData;
    }

    render() {
        return (
            <div className="row">
                <XYPlot height={300} width= {300}>
                    {this.formatGraph(this.props.parsedApiData.trend_comparison).map(line => {
                        <LineSeries data={line} />
                    })}
                    <VerticalGridLines />
                    <HorizontalGridLines />
                    <XAxis />
                    <YAxis />
                </XYPlot>
            </div>
        );
    }
}

export default App;
