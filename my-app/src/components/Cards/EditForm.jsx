import axios from 'axios';
import React, {useState} from 'react';
import Css from './Cards.module.css';

function editForm() {

    const url = 'http://localhost:8080/'

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [state, setState] = useState({
        date: "",
        state: "",
        cases: "",
        deaths: "",
    });

    const handleChange = (e) => {
        const value = e.target.value;
        setState({
            ...state,
            [e.target.name]: value,
        });
    };

    const OnSubmmit = (e) => {

        const covidData = {
            date: state.date,
            state: state.state,
            cases: state.cases,
            deaths: state.deaths
        }
        axios.put(url + "update", covidData)
            .then(res => 
                console.log(res.data));
    }

    function refreshWindow() {
        window.location.reload(false);
    }

    return (
        <div className={Css.container}>
            <div className={Css.containerForm}>
                <h2>Input new Covid Data</h2>
                    <form onSubmit={OnSubmmit} method="PUT" action="/update"> 
                        <input onChange={handleChange} name="date" value={state.date} autoComplete="off" placeholder="date"></input>        
                        <input onChange={handleChange} name="state" value={state.state} autoComplete="off" placeholder="state"></input>        
                        <input onChange={handleChange} name="cases" value={state.cases} autoComplete="off" placeholder="cases"></input>        
                        <input onChange={handleChange} name="deaths" value={state.deaths} autoComplete="off" placeholder="deaths"></input>        
                        <input type="submit" value="Update this Data" onClick={refreshWindow}></input>
                    </form>
            </div>
            
        </div>
    )
}

export default editForm;
