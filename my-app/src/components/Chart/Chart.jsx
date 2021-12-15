import React from 'react';
import axios from 'axios';
import Css from './Chart.module.css';
import { Bar } from 'react-chartjs-2';
class Charts extends React.Component {

    state = {
        reports: ""
    }

    constructor(props) {
        super(props);
        this.state = {
            chartData: {
                labels: ['Total Reports'],
                datasets: [
                    {
                        label: ['Total Reports'],
                        data: [
                            719
                        ],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.6',
                        ]
                    }
                ]
            }
        }
    }   

    componentDidMount = () => {
        this.getCovidReport();
    }

    getCovidReport = () => {
        axios.get('http://localhost:8080/total-reports')
        .then((response) => {
            const data = response.data;
            const Total = data.toString();
            this.setState({ reports: Total });
            console.log(`Total Reports made: ${Total}`);
        })
        .catch(() => {
            console.log('Error retrieving report data');
        })
    }

    display = () => {
        console.log(this.state.reports);
    }

    render() {
        return (
            <div className={Css.container}>
                <Bar 
                    data={this.state.chartData}
                    width={600}
                    height={400}
                    options={{}}
                    />
            </div>
        )
    }
}

export default Charts;