import axios from 'axios';
import React, {useState} from 'react';
import Css from './update.module.css';

function update() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [input, setInput] = useState({
        date: '',
        state: '',
        cases: '',
        deaths: ''
    });
    

    function handleChange(event) {
        const {name, value} = event.target;
    
        setInput(prevInput => {
            return {
                ...prevInput,
                [name]: value
            }
        })
    }
    
    function handleClick(event) {
        event.preventDefault();
        const newData = {
            date: input.date,
            state: input.state,
            cases: input.cases,
            deaths: input.deaths
        }
    
        axios.post('http://localhost:8080/all-covid-Data', newData)
    }
    return (
        <div className={Css.container}>
            <div className={Css.containerForm}>
                <h2>Input new Covid Data</h2>
                    <form post="/all-covid-Data" method="POST"> 
                        <input onChange={handleChange} name="date" value={input.date} autoComplete="off" placeholder="date"></input>        
                        <input onChange={handleChange} name="state" value={input.state} autoComplete="off" placeholder="state"></input>        
                        <input onChange={handleChange} name="cases" value={input.cases} autoComplete="off" placeholder="cases"></input>        
                        <input onChange={handleChange} name="deaths" value={input.deaths} autoComplete="off" placeholder="deaths"></input>        
                        <button onClick={handleClick}>Add Covid Data</button>
                    </form>
            </div>
            
        </div>
    )
}

export default update;
