import React from 'react'
import { NativeSelect, FormControl } from '@material-ui/core';
import Css from './CountryPicker.module.css'

export const CountryPicker = () => {
    return (
        <FormControl className={Css.formControl}>
            <NativeSelect>
                <option value="global">Global</option>
                <option value="global">Global</option>
                <option value="global">Global</option>
                <option value="global">Global</option>
                <option value="global">Global</option>
                <option value="global">Global</option>
                <option value="global">Global</option>
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker;