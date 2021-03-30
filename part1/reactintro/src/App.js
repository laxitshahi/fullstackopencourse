import React, { useState } from "react"; //Do not nest hooks
//Remember debugging rules*
//Passing event handlers to ch
const App = () =>{
  
}
export default App;
// //function in function start
// const App = () => {
//   const [value, setValue] = useState(10)
  
//   const setToValue = (newValue) => () => {
//     setValue(newValue) //this can be done with the use of a just a function
//                       // no need for a function in a function
//   }       
  
//   return (
//     <div>
//       {value}
//       <button onClick={setToValue(1000)}>thousand</button>
//       <button onClick={setToValue(0)}>reset</button>
//       <button onClick={setToValue(value + 1)}>increment</button>
//     </div>
//   )
// }
// //function in function end

// //START of ...
// const History = (props) => {  //conditonal rendering
//   if (props.allClicks.length === 0) {
//     return (
//       <div>
//         this app is used by pressing the buttons
//       </div>
//     )
//   }
//   return (
//     <div>
//       button press history: {props.allClicks.join(' ')}
//     </div>
//   )
// }

// const Button = ({handleClick, text}) => {
//   return(
//     <button onClick={handleClick}>
//     {text}
//   </button>
//   )
// }
// const App = () => {
//   const [left, setLeft] = useState(0);
//   const [right, setRight] = useState(0);
//   const [allClicks, setAll] = useState([]);

//   const handleLeftClicks = () => {
//     setAll(allClicks.concat("L")); //CONCATING WILL RETURN A NEW ARRAY, **AVOIDING MUTATING THE STATE DIRECTLY
//     setLeft(left + 1); //DO NOT USE PUSH         TO AVOID DIRECT STATE MUTATION
//   }

//   const handleRightClicks = () => {
//     setAll(allClicks.concat("R"));
//     setRight(right + 1);
//   }
//   //Event handlers should always be functions or fun refs
//   return (
//     <div>
//       {left}
//       <Button handleClick = {handleLeftClicks} text = 'left'/> 
//       <Button handleClick = {handleRightClicks} text = 'right'/>
//       {right}
//       <History allClicks = {allClicks}/>
//     </div>
//   )
// }
// //End of ...


// //START OF COMPLEX STATE
// const App = () => {
//   const [clicks, setClicks] = useState({ left: 0, right: 0 })

//   const leftClicks = () =>{
//     const newClick = {
//       ...clicks, //object spread syntax
//       left: clicks.left + 1,

//     }
//     setClicks(newClick)
//   }

//   const rightClicks = () =>{
//     setClicks({left: clicks.left, right: clicks.right + 1}) // no need for an object like above
//   }
//   //*WHY NOT DIRECTLY UPDATE THE STATE?
//   // doing this for ex:
//   // const handleLeftClick = () => {
//   //   clicks.left++
//   //   setClicks(clicks)
//   // }
//   // is forbidden since it is directly mutating the state
//   // state change should be done by setting the state to a new object to avoid issues

//   return (
//     <div>
//     {clicks.left}
//     <button onClick = {leftClicks}>left</button>

//     <button onClick = {rightClicks}>right</button>
//     {clicks.right}
//     </div>

//   )
// }
//END of COMPLEX STATE

//Start of Part 3? of C
// const Display = ({counter}) => <div>{counter}</div>  //destructured from (props)

// const Button = ({handleClick, text}) =>{ //this is called lifting the state up to help reflect the same data through one component?
//   return (
//     <button onClick={handleClick}>
//       {text}
//     </button>
//   )
// }

// const App = () => {
//   const [counter, setCounter] = useState(0) //destructing assignment

//   const increaseByOne = () => setCounter(counter + 1)
//   const decreaseByOne = () => setCounter(counter - 1)
//   const setToZero = () => setCounter(0)

// return (
//   <div>
//     <Display counter = {counter}/>

//     <Button
//       handleClick = {increaseByOne}
//       text = 'plus'
//       />

//     <Button
//       handleClick = {setToZero}
//       text = 'zero'
//       />

//     <Button
//       handleClick = {decreaseByOne}
//       text = 'minus'
//       />

//   </div>

// )
// }
//End of Part 3 of C

//*PART 1 of C*
// const Hello = ({name, age}) => { //REACT components must be capitalized!!!!!!!!!

//   // const name = props.name
//   // const age = props.age
//  // **the two lines above can changed to the line below

//   // const {name, age} = props **this can be directily passed into the component
//   const bornyear = () => new Date().getFullYear() - age //no need for curly braces as there is only one expression

//   return( //the number of props is arbitary
//    <div>
//       <p>Hello {name}, you are {age} years old</p>
//       <p>So you were likely born in {bornyear()}</p>
//     </div>
//   )
// }

// const App = () => { //props are the varible for the fucntion?
//   const name = "Peter"
//   const age = 10
//   return( // "root" components (or an array) is required for the code to run.
//           // fragments can also be used to avoid this, so the root element is not shown on the DOM <> </>
//     <>
//     <h1>Greetings</h1>
//     <Hello name = "Maya" age={26+10} />
//     <Hello name = {name} age = {age} />
//     <Hello />
//     </>

//   )
// }

// *END of PART 1 of C*
