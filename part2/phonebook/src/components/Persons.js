import React from 'react'

const Persons = ({person, handleClick}) =>{
    return (
      person.map(person =>
        <p key = {person.name}>
         {person.name} {person.number} <button value = {person.id} onClick = {handleClick}> delete </button>
        </p>
         )
    )
  }

export default Persons