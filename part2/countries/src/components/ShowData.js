import React from 'react'
import DataToShow from './DataToShow'
const ShowData = ({data, handleClick, weather}) => {
    if( data.length > 10){
        return(
            <p>
            Too many matches, specify another filter
            </p>
        )
    }
    else if(data.length === 1){
        return(
            <DataToShow data = {data} weather = {weather}/> 
        )
        
    }
    else {
       return(
            data.map(data =>
            <p key = {data.name}>
            {data.name} <button value = {data.name} onClick = {handleClick}> show </button>
            </p>)
            )
    }
    
}

export default ShowData;