import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

ReactDOM.render(<App />, document.getElementById('root'))

// this metod has issues as the App component is only rendered when a response is successfully recieved
// others methods below
// axios.get('http://localhost:3001/notes').then(response => {   
//   const notes = response.data  
//   ReactDOM.render(
//     <App notes={notes} />,
//     document.getElementById('root')
//   )
// })

// 3 states of a promise in notes.txt file

/*

//less common 
const promise = axios.get('http://localhost:3001/notes') //axios get() method returns a promise
console.log(promise)

promise.then(response => {
  console.log(response)
})  

//more common 

axios.get('http://localhost:3001/notes').then(response => {
  const notes = response.data
  console.log(notes)
})

//more readable

axios
  .get('http://localhost:3001/notes')
  .then(response => {
    const notes = response.data
    console.log(notes)
  })
*/