import React from 'react'

const DataToShow = ({data, weather}) => {
    return(
        data.map(data =>
        <div key = {data.name}>
            <h2><b> {data.name} </b></h2>
            <p>capital {data.capital}</p>
            <p>population {data.population}</p>
            <h3><b>languages</b></h3>
            <ul>
            {data.languages.map(x => 
                <li key = {x.name}>
                {x.name}
                </li>)}
            </ul>
            <img src = {data.flag} width = '200' alt = 'flag?'/>
            {/* <h2><b>Weather in {weather[0].location.region}</b></h2>
            <p> temperature: {weather[0].current.temperature} Celcius</p>
            <img src = {weather[0].current.weather_icons[0]} width = '100' alt = 'weather?'/>
            <p>wing: {weather[0].current.wind_speed} mph direction {weather[0].current.wind_dir}</p> */}
        </div>
    )
    )
}

export default DataToShow;