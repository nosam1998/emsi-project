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

    convertToPercentages(arr) {
        let first = arr[0];
        let percentagesArr = [0];
        let tempNum;

        for (let i = 1; i < arr.length; i++) {
            tempNum = ((arr[i] / first) * 100) - 100
            percentagesArr.push(tempNum)
        }

        return percentagesArr;
    }

    buildDict(arr, start, end) {
        let d = [];
        let range = this.generateRange(this.props.graphData.start_year, this.props.graphData.end_year);
        let percentageArr = this.convertToPercentages(arr);

        for (let i = 0; i < arr.length; i++) {
            d.push({x: range[i], vals: { originalNum: arr[i], percentage: percentageArr[i] }});
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
                data: this.convertToPercentages(data.nation)
            }, {
                borderColor: '#3855dd',
                label: "Regional",
                data: this.convertToPercentages(data.regional)
            }, {
                borderColor: '#789ecd',
                label: "State",
                data: this.convertToPercentages(data.state)
            }],
            plugins: {
                tooltip: {
                    // Disable the on-canvas tooltip
                    enabled: true
                }
            },
            options: {
                scales: {
                    xAxes: [{
                        scaleLabel: {
                            display: true,
                            labelString: 'Percent Change'
                        }
                    }],
                    yAxes: [{
                        scaleLabel: {
                            display: true,
                            labelString: 'Percent Change'
                        }
                    }]
                }
            }

        };
        console.log([data.nation, data.regional, data.state])
        console.log(newDataFormatted)
        return newDataFormatted;
    }

    render() {
        return (
            <Line data={this.formatData()} type="line"/>
        );
    }
}

export default GraphView;
