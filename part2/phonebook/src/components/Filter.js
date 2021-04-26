import React from 'react'

const Filter = ({val, handleChange }) => {
    return (
        <>
        <p>
        filter shown with: <input value = {val} onChange = {handleChange}/>
        </p>
        </>
    )
} 

export default Filter;