import React, {Component} from 'react';
import Css from './Chart.module.css';
import { Line, Bar } from 'react-chartjs-2';
import axios from 'axios';
class Charts extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            chartData: {
                labels: ['Total Cases', 'Total Deaths'],
                datasets: [
                    {
                        label: ['Total Cases'],
                        data: [
                            72088,
                            3667
                        ],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.6',
                            'rgba(54, 162, 235, 06'
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
                    options={{}}
                    />
            </div>
        )
    }
}

export default Charts;