import { useEffect, useState} from 'react'
import axios from 'axios'
import ShowData from './components/ShowData'
// import DataToShow from './components/DataToShow'

const App = () =>{
const [ data, setData ] = useState([]);
const [ country, setCountry ] = useState('')//Why do I need '' to make the component controlled
const [ search, setSearch ] = useState(''); 
const [ weatherData, setWeatherData ] = useState([])


let dataToShow =  data.filter(d=> d.name.toLowerCase().includes(search.toLowerCase()))


useEffect(() => {  //everything outside effects run first 
  if (dataToShow.length === 1){
    setCountry(dataToShow[0].name)
  }
  else{
    axios
    .get('https://restcountries.eu/rest/v2/all')
    .then(response => {
      setData(response.data)
    })
  }
    
}, [search])

/* useEffect takes two parameters
  1. The effect that is occuring
  2. The varible(s) inside the array, when changed, causes the effect to occur (runs the code inside useEffect)
*/


useEffect(() =>{
  const access_key = process.env.REACT_APP_API_KEY;
  const filter = data.filter(d => d.name.toLowerCase().includes(country.toLowerCase()))
  if(country !== ''){
    axios
    .get(`http://api.weatherstack.com/current?access_key=${access_key}&query=${filter[0].name}`)
    .then(response => {
        setWeatherData(response.data)

    })
  }
},[country])


const handleClick = (event) => {
  console.log(event.target)
  setSearch(event.target.value)
  setCountry(event.target.value)
}


const handleSearch = (event) => {
  setSearch(event.target.value);
}

return (
  <>
  <div>
  <h2>Countries</h2>
    Search: <input value = {search} onChange = {handleSearch}/>
  </div>
  <div>
  <ShowData weather = {weatherData} searchBox = {search} dataToShow = {dataToShow} handleClick = {handleClick}/>
  </div>     
</>

)
}

export default App;
