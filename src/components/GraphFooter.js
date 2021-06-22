import {Component} from "react";
import {Table} from "react-bootstrap";

class GraphFooter extends Component {
    constructor(props) {
        super(props);
    }

    getMaxIndex(arr) {
        // This function needs a 2D array
        let smallestLength = arr[0].length;
        let tempLength;
        for (let i = 1; i < arr.length; i++) {
            tempLength = arr[i].length;

            if (tempLength < smallestLength) {
                smallestLength = tempLength
            }
        }

        return smallestLength
    }

    render() {
        let data = this.props.tableData;
        let smallestArrLength = this.getMaxIndex([data.regional.numbers, data.state.numbers, data.nation.numbers]) - 1
        let accuracy = 3;
        return (
            <Table className={"mt-4"} striped bordered hover>
                <thead>
                    <tr>
                        <th>Region</th>
                        <th>{data.start_year} Jobs</th>
                        <th>{data.yearsArr[smallestArrLength]} Jobs</th>
                        <th>Change</th>
                        <th>% Change</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Region</td>
                        <td>{data.regional.numbers[0]}</td>
                        <td>{data.regional.numbers[smallestArrLength]}</td>
                        <td>{data.regional.numbers[smallestArrLength] - data.regional.numbers[0]}</td>
                        <td>{(((data.regional.numbers[smallestArrLength] / data.regional.numbers[0]) * 100) - 100).toFixed(accuracy)}</td>
                    </tr>

                    <tr>
                        <td>State</td>
                        <td>{data.state.numbers[0]}</td>
                        <td>{data.state.numbers[smallestArrLength]}</td>
                        <td>{data.state.numbers[smallestArrLength] - data.state.numbers[0]}</td>
                        <td>{(((data.state.numbers[smallestArrLength] / data.state.numbers[0]) * 100) - 100).toFixed(accuracy)}</td>
                    </tr>

                    <tr>
                        <td>Nation</td>
                        <td>{data.nation.numbers[0]}</td>
                        <td>{data.nation.numbers[smallestArrLength]}</td>
                        <td>{data.nation.numbers[smallestArrLength] - data.nation.numbers[0]}</td>
                        <td>{(((data.nation.numbers[smallestArrLength] / data.nation.numbers[0]) * 100) - 100).toFixed(accuracy)}</td>
                    </tr>
                </tbody>
            </Table>
        );
    }
}

export default GraphFooter;
