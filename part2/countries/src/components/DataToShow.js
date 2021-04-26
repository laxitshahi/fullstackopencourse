import React from 'react'

const DataToShow = ({data, weather}) => {
    if(weather.length === 0){
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
                    </div>
            )
        )
    }
   else {
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
            <h2><b>Weather in {weather.location.name}</b></h2>
            <p> temperature: {weather.current.temperature} Celcius</p>
            <img src = {weather.current.weather_icons} width = '100' alt = 'weather?'/>
            <p>wing: {weather.current.wind_speed} mph direction {weather.current.wind_dir}</p>
        </div>
    )
    )
   }
    
}

export default DataToShow;