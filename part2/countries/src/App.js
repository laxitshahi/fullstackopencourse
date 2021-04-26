import { useEffect, useState} from 'react'
import axios from 'axios'
import ShowData from './components/ShowData'
import DataToShow from './components/DataToShow'

const App = () =>{
const [ data, setData ] = useState([])
const [ newSearch, setNewSearch ] = useState('') //Why do I need '' to make the component controlled
const [ buttonData, setButtonData]  = useState([])
// const [ weatherData, setWeatherData ] = useState(null)


useEffect(() => { 
  axios
    .get('https://restcountries.eu/rest/v2/all')
    .then(response => {
      setData(response.data)
    })

}, [])
/* useEffect takes two parameters
  1. The effect that is occuring
  2. The varible(s) inside the array, when changed, causes the effect to occur (runs the code inside useEffect)
*/



const dataToShow = data.filter(data => data.name.toLowerCase().includes(newSearch.toLowerCase()))

// useEffect(() =>{
//   const access_key = process.env.REACT_APP_API_KEY;
//      axios
//     .get(`http://api.weatherstack.com/current?access_key=${access_key}&query=${dataToShow[0].capital}`)
//     .then(response => {
//         setWeatherData(response.data)

//     })
// },[data])




// console.log('button data ', buttonData)
// console.log('button data length', buttonData.length)
// console.log('data to show',dataToShow)
// if(buttonData.length === 1){
//   console.log('data captial button', buttonData[0].capital)
// }
// if(dataToShow.length === 1){
//   console.log('data capital toShow', dataToShow[0].capital)
// }

// console.log('data to show length', dataToShow.length)
// console.log('weather data',weatherData)



const handleClick = (event) => {
  event.preventDefault();
  const d = data.filter(data => data.name.toLowerCase().includes(event.target.value.toLowerCase()))
  setButtonData(d)
}

const handleSearch = (event) => {
  setNewSearch(event.target.value); 
  setButtonData([]);
}


return (
  <>
  <div>
  <h2>find countries: </h2>
    find countries: <input value = {newSearch} onChange = {handleSearch}/>
  </div>
  <div>
    {/* {dataToShow.length === 1 ?  
    <ShowData data = {dataToShow} handleClick = {handleClick} weather ={weatherData}/> : 
    <ShowData data = {dataToShow} handleClick = {handleClick}/>} */}
    <ShowData data = {dataToShow} handleClick = {handleClick}/>

    {/* {buttonData.length === 1 ? <DataToShow data = {buttonData} weather = {weatherData}/>:
    <DataToShow data = {buttonData}/>} */}
     <DataToShow data = {buttonData}/>
  </div>     
</>

)
}

export default App;
