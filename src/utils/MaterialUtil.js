import React from 'react'
import { MenuItem, FormControl, Select } from '@material-ui/core'
import "../component/Header.css"

export function dropDown(id, label = false, value, menuItem, handleChange) {
    console.log(menuItem)
    return (

        <FormControl>
            <Select
                labelId={label}
                id={id}
                value={value}
                onChange={handleChange}
            >
                {Object.keys(menuItem).map((key) => (
                    <option value={key}>{menuItem[key]}</option>
                ))}
            </Select>
        </FormControl >
    )
}