import React from 'react';
import axios from 'axios'
import Css from './Cards.module.css';
import cx from 'classnames';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';

class Cards extends React.Component {

    state = {
        posts: []
        }
        
        componentDidMount = () => {
            this.getCovidData();
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
        
        displayDeaths = (posts) => {
        
            if (!posts.length) return null;
        
            return posts.map((post, index) => (
            <div key={index}>
                <div>{post.TotalDeaths}</div>
            </div>
            ));
        }

        displayCases = (posts) => {
        
            if (!posts.length) return null;
        
            return posts.map((post, index) => (
            <div key={index}>
                <div>{post.TotalCases}</div>
            </div>
            ));
        }



    render() {
        return (
        <div className={Css.container}>
            <Grid container spacing={3}>
                <Grid item component={Card} xs={12} md={6} className={cx(Css.card, Css.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography varaint="h5">{this.displayCases(this.state.posts)}</Typography>
                        <Typography varaint="body2">Number of active cases of COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={6} className={cx(Css.card, Css.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography varaint="h5">{this.displayDeaths(this.state.posts)}</Typography>
                        <Typography varaint="body2">Number of active deaths of COVID-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
    }
}

export default Cards;
