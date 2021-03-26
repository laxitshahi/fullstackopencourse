import React from 'react'

const Hello = (props) => { //REACT components must be capitalized!!!!!!!!!
  return( //the number of props is arbitary
    <div> 
      <p>Hello {props.name}, you are {props.age} years old. </p>
    </div>
  )
}

const App = () => { //props are the varible for the fucntion?
  const name = "Peter"
  const age = 10
  return( // "root" components (or an array) is required for the code to run. 
          // fragments can also be used to avoid this, so the root element is not shown on the DOM <> </>
    <>
    <h1>Greetings</h1> 
    <Hello name = "Maya" age={26+10} />  
    <Hello name = {name} age = {age} />
    <Hello />
    </>
  
  )
}
export default App