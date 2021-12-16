import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Edit = (props) => {

    const [state, setState] = useState({
        date:"",
        state: "",
        cases: "",
        deaths: ""
    });

    const url = "http://localhost:8080";

    useEffect(() => {
        axios.get(url + "/get-data/" + props.match.params.id)
            .then(res => {
                console.log("Update " + res.data);
                setState(res.data)
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    const handleChange = (e) => {
        const value = e.target.value;
        setState({
            ...state,
            [e.target.name] : value,
        });
    };

    const OnSubmit= (e) => {
        e.preventDefault();
        const covidData = {
            date: state.date,
            state: state.state,
            cases: state.cases,
            deaths: state.deaths
        }

        axios.post(url + "/update-data/" + props.match.params.id, covidData)
        .then(res => console.log(res.data))
    }

    return (
        <div style={{marginTop: 10}}>
      <h3> Update Covid Data: {state.date}</h3>
      <form onSubmit={OnSubmit} method="Post">
      <div className="form-group"> 
          <label>Data Date: </label>
          <input  className="form-control" type="text" name="date"
            value={state.date}
            onChange={handleChange}
          />
      </div>
      <div className="form-group"> 
          <label>Data State: </label>
          <input  className="form-control" type="text" name="state"
            value={state.state}
            onChange={handleChange}
          />
      </div>
      <div className="form-group"> 
          <label>Data Cases: </label>
          <input  className="form-control" type="text" name="cases"
            value={state.cases}
            onChange={handleChange}
          />
      </div>
      <div className="form-group"> 
          <label>Data Deaths: </label>
          <input  className="form-control" type="text" name="deaths"
            value={state.deaths}
            onChange={handleChange}
          />
      </div>
        <center>
        <div className="form-group">
            <input type="submit" value="UpDate" className="btn btn-primary" />
        </div>
        </center>            
      </form>
    </div>
    )
}

export default Edit

