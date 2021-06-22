import React, {Component} from 'react';
import {Table} from "react-bootstrap";

class HorizontalBarChart extends Component {
    constructor(props) {
        super(props);
    }

    getChartLabels(data) {
        let newLabels = [];

        data.industries.map(industry => {
            newLabels.push(industry.title);
        });

        return newLabels;
    }

    getIndustryNameData(data) {
        let chartData = [];

        data.map(industry => {
            chartData.push(industry.jobs);
        });

        return chartData;
    }

    generateChartData() {
        let data = this.props.barChartData;
        console.log(data)
        let final_data = {
            labels: this.getChartLabels(data),
            datasets: [{
                axis: 'x',
                barPercentage: 0.5,
                barThickness: 6,
                maxBarThickness: 8,
                minBarLength: 2,
                data: this.extractChartData(data.industries)
            }]
        }
        console.log(final_data)
        return final_data;
    }

    render() {
        let data = this.props.barChartData;
        let occupationPercentage;
        let totalJobsPercentage;
        let leftSideGradientPercentage;
        let rightSideGradientPercentage;

        return (
            <>
                <Table style={{width: "100%"}} className="mt-5">
                    <colgroup>
                        <col span="1" style={{width: "60%"}}/>
                    </colgroup>
                    <thead>
                    <tr>
                        <th>Industry</th>
                        <th>Occupation Jobs In Industry ({data.year})</th>
                        <th>% of Occupation in Industry ({data.year})</th>
                        <th>% of Total Jobs in Industry ({data.year})</th>
                    </tr>
                    </thead>

                    <tbody>
                    {data.industries.map(item => {
                        occupationPercentage = ((item.in_occupation_jobs / data.jobs) * 100).toFixed(3);
                        totalJobsPercentage = ((item.in_occupation_jobs / item.jobs) * 100).toFixed(3);

                        return (
                            <tr style={{background: `linear-gradient(90deg, #ADD8E6 ${occupationPercentage}%, #FFF ${occupationPercentage}% 100%)`}}>
                            {/*<tr style={{background: "linear-gradient(90deg, #FF11FF 50%, #FFF 50%)"}}>*/}
                                <td>{item.title}</td>
                                <td>{item.in_occupation_jobs}</td>
                                <td>{occupationPercentage}%</td>
                                <td>{totalJobsPercentage}%</td>
                            </tr>
                        )
                    })}
                    </tbody>
                </Table>
            </>
        )
    }

    // render() {
    //     return (
    //         <Bar type={"horizontal"} data={this.generateChartData()} />
    //     )
    // }
}

export default HorizontalBarChart;