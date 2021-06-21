import {Component} from "react";
// import {HorizontalGridLines, LineSeries, VerticalGridLines, XAxis, XYPlot, YAxis} from "react-vis";
import { Line } from 'react-chartjs-2';

class GraphView extends Component {
    constructor(props) {
        super(props);
    }

    generateRange(start, end) {
        let range = [];

        for (let i = start; i <= end; i++) {
            range.push(i);
        }

        return range;
    }

    buildDict(arr, start, end) {
        let d = [];
        let range = this.generateRange(this.props.graphData.start_year, this.props.graphData.end_year);

        for (let i = 0; i < arr.length; i++) {
            d.push({x: range[i], y: arr[i]});
        }

        return d
    }

    formatData() {
        let data = this.props.graphData;
        let newDataFormatted = {
            labels: this.generateRange(this.props.graphData.start_year, this.props.graphData.end_year),
            // datasets: [{ data: this.buildDict(data.nation) }, { data: this.buildDict(data.regional) }, { data: this.buildDict(data.state) }]
            datasets: [{
                borderColor: '#0539a2',
                label: "Nation",
                data: data.nation
            }, {
                borderColor: '#3855dd',
                label: "Regional",
                data: data.regional
            }, {
                borderColor: '#789ecd',
                label: "State",
                data: data.state
            }],
            plugins: {
                tooltip: {
                    // Disable the on-canvas tooltip
                    enabled: true
                }
            }
        };
        console.log(newDataFormatted)
        return newDataFormatted;
    }

    // formatGraph(trendComparisonJson) {
    //     let graphData = [];
    //     let tempGraphData = {};
    //
    //     return graphData;
    // }

    render() {
        return (
            <Line data={this.formatData()} type="line"/>
        );
    }

    // render() {
    //     return (
    //         <div className="row">
    //             <XYPlot height={300} width= {300}>
    //                 {this.formatGraph(this.props.parsedApiData.trend_comparison).map(line => {
    //                     <LineSeries data={line} />
    //                 })}
    //                 <VerticalGridLines />
    //                 <HorizontalGridLines />
    //                 <XAxis />
    //                 <YAxis />
    //             </XYPlot>
    //         </div>
    //     );
    // }
}

export default GraphView;
