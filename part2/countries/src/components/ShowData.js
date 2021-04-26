import React from 'react'
import DataToShow from './DataToShow'
const ShowData = ({weather, searchBox, dataToShow, handleClick }) => {
    if (dataToShow.length === 0 ){
        return(
        <p>please input a country (no spaces)</p>
        )
    }
    else if( dataToShow.length > 10){
        if(searchBox === ''){
            return (
                <p> please input a country (no spaces) </p>
            )
        }
        else{
            return(
                <p>
                Too many matches, specify another filter
                </p>
            )
        }
       
    }
    else if(dataToShow.length === 1){
        return (
            <DataToShow data = {dataToShow} weather = {weather}/>
        )
    }
    else {
       return(
            dataToShow.map(data =>
            <p key = {data.name}>
            {data.name} <button value = {data.name} onClick = {handleClick}> show </button>
            </p>)
            )
    }
    
}

export default ShowData;