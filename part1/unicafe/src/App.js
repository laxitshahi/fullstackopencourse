import React, { useState } from 'react'

const Display = ({text}) => {
  return (
    <div>
     <strong>{text}</strong> 
     </div>
  )
}

const Button = ({handleClick, text}) =>{
  return (
    <td> 
      <button onClick ={handleClick}>
       {text}
      </button>
    </td>
  
  )
}
const Statistics = ({type,value,extra}) => {
  
  return (
    <>
        <tbody>
        <tr>
          <td>{type}</td>
          <td>{value} {extra}</td>
        </tr>
        </tbody>
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [count, setCount] = useState({good: 0, bad: 0, neutral: 0, total: 0})
  const goodClick = () => {
    setCount({...count, good: count.good + 1, total: count.total + 1})
  }
  const badClick = () => {
    setCount({...count, bad:count.bad + 1,total: count.total + 1})
  }
  const neutralClick = () => {
    setCount({...count, neutral:count.neutral + 1, total: count.total + 1})
  }

  if (count.total === 0){
    return (
      <div>
        <Display text = 'give feedback'></Display> 
        <table>
          <tbody>
          <tr>
           <Button handleClick ={goodClick} text = 'good'/>  
           <Button handleClick ={badClick} text = 'bad'/> 
           <Button handleClick ={neutralClick} text = 'neutral'/>
          </tr>
          </tbody>        
        </table>


        <Display text = 'Statistics'></Display>
        no feedback given
      </div>
 
    )
  }
  if (count.total > 0) {
    return (
      <div>
         <Display text = 'give feedback'></Display>
        <table>
          <tbody>
          <tr>
          <Button handleClick ={goodClick} text = 'good'/> 
          <Button handleClick ={badClick} text = 'bad'/>  
          <Button handleClick ={neutralClick} text = 'neutral'/> 
          </tr>
          </tbody>        
        </table>

        <Display text = 'Statistics'></Display>
        <table>
        <Statistics type = 'good' value = {count.good}></Statistics>
        <Statistics type = 'bad' value = {count.bad}></Statistics>
        <Statistics type = 'neutral' value = {count.neutral}></Statistics>
        <Statistics type = 'total' value = {count.total}></Statistics>
        <Statistics type = 'average' value = {(count.good - count.bad)/count.total}></Statistics>
        <Statistics type = 'positive' value = {(count.good/count.total)*100} extra = '%'> </Statistics> 
        </table>

      </div>
    )
    
  }
    
  
  
} 

export default App