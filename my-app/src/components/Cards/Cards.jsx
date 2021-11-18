import React from 'react';

import Css from './Cards.module.css';
import CountUp from 'react-countup';
import cx from 'classnames';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';

export const Cards = (props) => {
    return (
        <div className={Css.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className={cx(Css.card, Css.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography varaint="h5">REAL DATA</Typography>
                        <Typography color="textSecondary" gutterBottom>REAL DATE</Typography>
                        <Typography varaint="body2">Number of active cases of COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(Css.card, Css.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography varaint="h5">REAL DATA</Typography>
                        <Typography color="textSecondary" gutterBottom>REAL DATE</Typography>
                        <Typography varaint="body2">Number of recovered people of COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(Css.card, Css.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography varaint="h5">REAL DATA</Typography>
                        <Typography color="textSecondary" gutterBottom>REAL DATE</Typography>
                        <Typography varaint="body2">Number of deaths of COVID-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards;
