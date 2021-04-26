import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
// WHEN USED COMPONENT DISPLAYS NOTHING




const App = () => {
  const [persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newSearch, setNewSearch] = useState('')

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])
  
  const addName = (event) => {
    event.preventDefault();
    const personObject ={
      name: newName,
      number: newNumber
    }
    console.log('personObject = ', personObject)
   if (persons.some(person => person.name === personObject.name)){
    window.alert( `${newName} is already added to phonebook`)
   }
   else{
    setPersons(persons.concat(personObject));
    setNewName('');
    setNewNumber('');
   }
  }

  const handleNameChange = (event) => {
    // console.log(event.target.value);
    setNewName(event.target.value);
  }

  const handleNumberChange = (event) => {
    // console.log(event.target.value);
    setNewNumber(event.target.value);
  }

  // const handleNameSearch = (event) => {
  //   console.log(event.target.value);
  //   setNewSearch(event.target.value)
  // }

  const personsToShow = persons.filter(person => person.name.toLowerCase().includes(newSearch.toLowerCase()))
 
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter val = {newSearch} handleChange = {(event) => setNewSearch(event.target.value)}/>
      <h2>Add a new number</h2>
      <PersonForm addName = {addName} 
      newName = {newName} handleNameChange = {handleNameChange}
      newNumber = {newNumber} handleNumberChange = {handleNumberChange}/>
      <h2>Numbers</h2>
      <div> 
      <Persons person = {personsToShow}/>
      </div>
    </div>
  )
}

export default App