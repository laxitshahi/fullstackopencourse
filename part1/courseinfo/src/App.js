import React from 'react'

const Header = (props) =>{
  console.log(props)
  return(
    <>
    <h1>{props.course.name}</h1>
    </>
  ) 
}

const Content = (props) => {
  console.log(props)
  return (
    <> 
    <p>{props.course.section[0].name} {props.course.section[0].exercises}</p>
    <p>{props.course.section[1].name} {props.course.section[1].exercises}</p>
    <p>{props.course.section[2].name} {props.course.section[2].exercises}</p>
    </>
  )
}

const Total = (props) => {
  console.log(props)
  return (
  <>
  Numer of exercises{' '}
  {props.course.section[0].exercises + props.course.section[1].exercises + props.course.section[2].exercises }
  </>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    section: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course = {course} />
      <Content course = {course} />
      <Total course = {course} />
    </div>
  )
}

export default App