import {Component} from "react";
// import {HorizontalGridLines, LineSeries, VerticalGridLines, XAxis, XYPlot, YAxis} from "react-vis";
import {Line} from 'react-chartjs-2';
import GraphFooter from "./GraphFooter";

class GraphView extends Component {
    constructor(props) {
        super(props);
        this.formatGraphData = this.formatGraphData.bind(this);
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

    formatTableData() {
        let data = this.props.graphData;
        let newDataFormatted = {
            start_year: data.start_year,
            end_year: data.end_year,
            yearsArr: this.generateRange(data.start_year, data.end_year),
            regional: {
                numbers: data.regional,
                percentages: this.convertToPercentages(data.regional)
            },
            state: {
                numbers: data.state,
                percentages: this.convertToPercentages(data.state)
            },
            nation: {
                numbers: data.nation,
                percentages: this.convertToPercentages(data.nation)
            }
        };

        // console.log(newDataFormatted)
        return newDataFormatted;
    }

    formatGraphData() {
        let data = this.props.graphData;
        let newDataFormatted = {
            labels: this.generateRange(this.props.graphData.start_year, this.props.graphData.end_year),
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

        // console.log(newDataFormatted)
        return newDataFormatted;
    }

    render() {
        return (
            <>
                <Line data={this.formatGraphData()} type="line"/>
                <GraphFooter tableData={this.formatTableData()}/>
            </>
        );
    }
}

export default GraphView;
