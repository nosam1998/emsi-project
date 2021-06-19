import {Component} from "react";

class Summary extends Component {
    constructor(props) {
        super(props);
    }

    colorCode(regional, national_avg) {
        let color;
        let word;

        if (regional > national_avg) {
            color = "green";
            word = "above"
        } else if (regional < national_avg) {
            color = "red";
            word = "below";
        } else {
            color = "black";
            word = "equal to";
        }

        return [color, word];
    }

    floatToPercentage(num, accuracy) {
        let n = num * 100
        return `${n.toFixed(2)}%`
    }

    render() {
        let {
            jobsColor,
            jobsWord
        } = this.colorCode(this.props.apiData.summary.jobs.regional, this.props.apiData.summary.jobs.national_avg);

        return (
            <>
                <div className="col-4">
                    <div className="text-center">
                        <h2>{this.props.apiData.summary.jobs.regional}</h2>
                        <h6>Jobs ({this.props.apiData.summary.jobs.year}</h6>
                        <h6>{this.floatToPercentage(this.props.apiData.summary.jobs.regional / this.props.apiData.summary.jobs.national_avg)}
                            <span style={{color: jobsColor}}> {jobsWord} </span> National average</h6>
                    </div>
                </div>

                <div className="col-4">
                    <div className="text-center">
                        <h2><span style={{color: "green"}}>+{this.props.apiData.summary.jobs_growth.regional}%</span></h2>
                        <h6>% Change ({this.props.apiData.summary.jobs_growth.start_year} - {this.props.apiData.summary.jobs_growth.end_year})</h6>
                        <h6>Nation: <span style={{color: this.props.apiData.summary.jobs_growth.regional > this.props.apiData.summary.jobs_growth.national_avg ? "green" : "red"}}>+{this.props.apiData.summary.jobs_growth.national_avg}%</span></h6>
                    </div>
                </div>

                <div className="col-4">
                    <div className="text-center">
                        <h2>${this.props.apiData.summary.earnings.regional}/hr</h2>
                        <h6>Median Hourly Earnings</h6>
                        <h6>Nation: ${this.props.apiData.summary.earnings.national_avg}/hr</h6>
                    </div>
                </div>
            </>
        );
    }
}

export default Summary;
