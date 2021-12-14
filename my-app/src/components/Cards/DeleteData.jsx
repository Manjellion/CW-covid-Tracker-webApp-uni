import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { AiOutlineClose } from 'react-icons/ai'
import { responsiveFontSizes } from '@material-ui/core';

const deleteData = (props) => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [state, setState] = useState([]);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        console.log('Delete', props.match.params.id);
        axios.post('http://localhost:8080/delete-data/' + props.match.params.id)
        .then(response => {
            axios.get('http://localhost:8080/total-reports')
            .then(response => {
                setState(response.data)
                console.log('Data set in the state and state length ' + state.length);
            })
            .catch(err => {
                console.log(err);
            })
        })
        .catch(err => {
            console.log(err);
        })
    }, [props.match.params.id]) 
    return (
        <div>
            <AiOutlineClose />
        </div>
    )
}

export default deleteData;
