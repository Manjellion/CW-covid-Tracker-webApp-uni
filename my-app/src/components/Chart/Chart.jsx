import React from 'react';
import Css from './Chart.module.css';
import { Bar } from 'react-chartjs-2';
class Charts extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            chartData: {
                labels: ['Total Cases', 'Total Deaths'],
                datasets: [
                    {
                        label: ['Population'],
                        data: [
                            72088,
                            3667
                        ],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.6',
                        ]
                    }
                ]
            }
        }
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