import React, { useState } from 'react'

// WHEN USED COMPONENT DISPLAYS NOTHING
// const Person = (person) =>{
//   return (
//     <li key = {person.name}>
//     {person.name}
//  </li>
//   )
// }

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  const addName = (event) => {
    event.preventDefault();
    const personObject = {
    name: newName
   }
   if (persons.some(person => person.name.toLowerCase() === personObject.name.toLowerCase())){
    window.alert( `${newName} is already added to phonebook`)
   }
   else{
    setPersons(persons.concat(personObject));
    setNewName('');
   }
   
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit = {addName}>
        <div>
          name: <input value = {newName} onChange = {handleNameChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
      {persons.map(person =>
         <p key = {person.name}>
           {person.name}
         </p>
          )}
      </div>
          
    </div>
  )
}

export default App