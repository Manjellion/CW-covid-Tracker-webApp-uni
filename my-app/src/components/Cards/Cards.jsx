import React from 'react';
import axios from 'axios'
import Css from './Cards.module.css';
import cx from 'classnames';
import Edit from '../updateCovid/Edit';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import { AiOutlineCloseSquare } from 'react-icons/ai';

class Cards extends React.Component {

    state = {
        posts: [],
        reports: ""
        }
        
        componentDidMount = () => {
            this.getCovidData();
            this.getCovidReport();
        }
        
        getCovidData = () => {
            axios.get('http://localhost:8080/all-covid-Data')
            .then((response) => {
                const data = response.data;
                this.setState({ posts: data });
                console.log("Data has been recieved");
                console.log(data);
            }) 
            .catch(() => {
                console.log("Error retrieving data");
            })
        }
        
        getCovidReport = () => {
            axios.get('http://localhost:8080/total-reports')
            .then((response) => {
                const data = response.data;
                this.setState({ reports: data });
                console.log(`Total Reports made: ${data}`);
            })
            .catch(() => {
                console.log('Error retrieving report data');
            })
        }

        displayReport = (reports) => {

            if (!reports.length) return null;

            return reports.map((report, index) => (
                <div key={index}>
                    <div>{report}</div>
                </div>
            ))
        }

        displayDeaths = (posts) => {
        
            if (!posts.length) return null;
        
            return posts.map((post, index) => (
            <div key={index}>
                <div>{post.Totaldeaths}</div>
            </div>
            ));
        }

        displayCases = (posts) => {
        
            if (!posts.length) return null;
        
            return posts.map((post, index) => (
            <div key={index}>
                <div>{post.Totalcases}</div>
            </div>
            ));
        }

        displayStates = (posts) => {

            if (!posts.length) return null;

            return posts.map((post, index) => (
                <div key={index}>
                    <div>{post.state}</div>
                </div>
            )
        )}

        displayUserForStates = (state) => {
                axios.get(`http://localhost:8080/get-data/${state}`)
                .then((response) => {
                    alert(`States with more then ${response.body.UserInput} cases`);
                    this.displayStates();
                })
        }

        displayAll = (posts) => {

            function onDelete(id) {
                axios.delete(`http://localhost:8080/delete/${id}`)
                .then((response) => {
                    alert("Deleted successfully");
                    window.location.reload(false);
                })
            }

            if (!posts.length) return null;

            return posts.map((post, index) => (
                <div key={index}>
                    <div className={cx(Css.list)}>| {post.date} | {post.state} | {post.cases} | {post.deaths} | 
                                <button
                                    style={{ border: '10px' }}
                                    >Edit
                                </button> 
                    <AiOutlineCloseSquare 
                    style={{ cursor: "pointer", fontSize: '1.5rem', marginTop: '15px', position: 'absolute' }}
                    onClick={() => {
                        onDelete(post._id)
                    }}
                    /></div>
                </div>
            ))
        }

    render() {
        return (
        <div className={Css.container}>
            <Grid container spacing={3} className={cx(Css.Grid)}>
                <Grid item component={Card} xs={12} md={5} className={cx(Css.card, Css.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography varaint="h5">{this.displayCases(this.state.posts)}</Typography>
                        <Typography varaint="body2">Number of active cases of COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={5} className={cx(Css.card, Css.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography varaint="h5">{this.displayDeaths(this.state.posts)}</Typography>
                        <Typography varaint="body2">Number of active deaths of COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={5} className={cx(Css.card, Css.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Total Reports</Typography>
                        <Typography varaint="h5">{this.state.reports}</Typography>
                        <Typography varaint="body2">Number of reports made for COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={5} className={cx(Css.card, Css.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Input number to see states with more cases </Typography>
                        <input type="text" value="UserInput"></input>
                        <input type="submit" onClick={this.displayUserForStates}></input>
                    </CardContent>
                </Grid>
            </Grid>
            <Grid container spacing={3} className={cx(Css.Grid)}>
                <Grid item component={Card} xs={12} md={8}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>List: Date / State / Cases / Deaths</Typography>
                        <Typography varaint="h5">{this.displayAll(this.state.posts)}</Typography>
                        <Typography varaint="body2">All Data</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
    }
}

export default Cards;
