import React, { useEffect, useState } from 'react'
// import axios from 'axios'
import pbService from './services/persons'
import Filter from './components/Filter'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Notification from './components/Notifications'





const App = () => {
  const [persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newSearch, setNewSearch] = useState('')
  const [ message, setMessage] = useState()
  // useEffect(() => {
  //   console.log('effect')
  //   axios
  //     .get('http://localhost:3001/persons')
  //     .then(response => {
  //       console.log('promise fulfilled')
  //       setPersons(response.data)
  //     })
  // }, [])

  useEffect(() => {
    pbService
    .getAll()
    .then(initalPersons =>{
      setPersons(initalPersons)
    }) 
  },[])
 
  
  const addName = (event) => {
    event.preventDefault();
    const personObject ={
      name: newName,
      number: newNumber
    }
    console.log('personObject = ', personObject)
   if (persons.some(person => person.name.toLowerCase() === personObject.name.toLowerCase())){
    const currentPerson = persons.find(person => person.name.toLowerCase() === personObject.name.toLowerCase());
    const result = window.confirm(`${newName} is already added to phonebook, replace old number with new one?`)
    if(result === true){
      console.log(currentPerson);
      pbService
        .update(currentPerson.id, personObject)
        .then(returnedPerson => {
          setPersons(persons.map(person => person.id !== currentPerson.id ? person : returnedPerson))
        })
        .catch(error => {
          setMessage(`${currentPerson.name} has already been deleted from the server bucko`)
          setTimeout(() => {
            setMessage(null)
          },3000)
          setPersons(persons.filter(n => n.id !== currentPerson.id))
        })
      setMessage(`Updated ${currentPerson.name}'s information.`)
       setTimeout(() => {
         setMessage(null)
       },3000)
    }
    else{
      window.alert('Number not updated')
    } 
   }
   else{
    setPersons(persons.concat(personObject));
    pbService
    .create(personObject)
     .then(returnedPerson => {
       setPersons(persons.concat(returnedPerson))
       setMessage(`Added ${returnedPerson.name} to phone book :)`)
       setTimeout(() => {
         setMessage(null)
       },3000)
     })
   }  
   setNewName('')
   setNewNumber('')
 
  }

  const handleNameChange = (event) => {
    // console.log(event.target.value);
    setNewName(event.target.value);
  }

  const handleNumberChange = (event) => {
    // console.log(event.target.value);
    setNewNumber(event.target.value);
  }

  const handleDelete = (event) => {
    event.preventDefault();
    const currentId = Number(event.target.value)
    const currentPerson = persons.find(p => p.id === currentId)
    const changedPersons = persons.filter(p => p.id !== currentId)  // == instead of === since the types are not the same
    const result = window.confirm(`Delete ${currentPerson.name}?`)
    if(result === true){
      //delete the person and number from the phone book
      pbService
        .removeData (currentId)
          .then(setPersons(changedPersons))
      setMessage(`Deleted ${currentPerson.name} from phonebook.`)
      setTimeout(() => {
        setMessage(null)
      },3500)
    }
  }

  // const handleNameSearch = (event) => {
  //   console.log(event.target.value);
  //   setNewSearch(event.target.value)
  // }

  const personsToShow = persons.filter(person => person.name.toLowerCase().includes(newSearch.toLowerCase()))
 
  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message = {message}/>
      <Filter val = {newSearch} handleChange = {(event) => setNewSearch(event.target.value)}/>
      <h2>Add a new number</h2>
      <PersonForm addName = {addName} 
      newName = {newName} handleNameChange = {handleNameChange}
      newNumber = {newNumber} handleNumberChange = {handleNumberChange}/>
      <h2>Numbers</h2>
      <div> 
      <Persons person = {personsToShow} handleClick = {handleDelete}/>
      </div>
    </div>
  )
}

export default App