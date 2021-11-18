import React from 'react'
import Css from './Chart.module.css'
import cx from 'classnames'
import chart from './images/chart.png'

export const Chart = () => {
    return (
        <div className={Css.container}>
            <img src={chart} className={cx(Css.chartImg)}></img>
        </div>
    )
}

export default Chart;