import React, { useState } from 'react'
const DisplayBold = ({text}) => {
  return (
    <div>
      <center> <strong>{text}</strong> </center>
    </div>
  )
}
const Display = ({text,heading}) =>{
  return (
    <div>
      <center>{heading} {text} </center>
    </div>
  )
}
const Button = ({handleClick, text}) =>{
  return (
    <center><button onClick ={handleClick}>
        {text} 
      </button> </center>
  )
}
const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVote] = useState(Array(anecdotes.length).fill(0))
  
 
  const setAnecdote = () => {
    const num = Math.floor(Math.random() * (anecdotes.length))
      setSelected(num)
    }
  
  const vote = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVote(copy)
  }

  return (
    <div>
      <DisplayBold text = 'Anecdote with the most votes'/>
      <Display text = {anecdotes[votes.indexOf(Math.max(...votes))]}/>
      <Display text = '--------------------------------------------'/>
      <DisplayBold text = 'Current Anecdote'/>
      <Display text = {anecdotes[selected]}/>
      <Button handleClick = {vote} text = 'vote'/>
      <Button handleClick = {setAnecdote} text = 'next'/>
          <DisplayBold text = 'Votes'/> 
          <Display heading = 'Current:' text = {votes[selected]}/>
          <Display heading = 'Most Votes:' text = {Math.max(...votes)}/>
    </div>
  )
}

export default App