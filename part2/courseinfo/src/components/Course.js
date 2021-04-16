import React from 'react'
const Course = ({courses}) => {
    return(
      <>
      <h1>{courses[0].name}</h1>
      <p>{courses[0].parts[0].name} {courses[0].parts[0].exercises}</p>
      <p>{courses[0].parts[1].name} {courses[0].parts[1].exercises}</p>
      <p>{courses[0].parts[2].name} {courses[0].parts[2].exercises}</p>
      <b> total of {courses[0].parts.reduce((sum,part) => sum += part.exercises,0)} exercises </b>
  
      <h1>{courses[1].name}</h1>
      <p>{courses[1].parts[0].name} {courses[1].parts[0].exercises}</p>
      <p>{courses[1].parts[1].name} {courses[1].parts[1].exercises}</p>
      <b> total of {courses[1].parts.reduce((sum,part) => sum += part.exercises,0)} exercises </b>
      </>
    )
  }

  export default Course