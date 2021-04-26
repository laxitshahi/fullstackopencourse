import React, {useState, useEffect } from 'react'
import axios from 'axios'
import Note from './components/Note'

//Control Component method to access the data contained in the form's input element
const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('');
  const [showAll, setShowAll] = useState(true);

const hook = () => { // At first, 0 notes are rendered. Thereafter, the function inside useEffect is run 
    console.log('effect')
    axios
      .get("http://localhost:3001/notes")
      .then(response => {
        console.log('promise fulfilled')
        setNotes(response.data)
      })
    }
  // console.log('render', notes.length, 'notes')
   useEffect(hook, []) 
   // first parameter in useEffect is used to determine the effect
   // the second parameter in useEffect is used to determine how often the effect is run

  const addNote = (event) => {
    event.preventDefault(); // prevents default actions, such as a page reload
    const noteObject = {
      content: newNote, 
      date: new Date().toISOString(),
      important: Math.random() < 0.5, // 50% chance of the note being marked important
      id: notes.length + 1, // method of id creation only works since notes are never deleted
    }
    setNotes(notes.concat(noteObject)); // DOES NOT MUTATE THE ORIGINALL; CREATES NEW COPY
    setNewNote(''); // resets controlled input element (clears input bar after submission )
  }

  //need this to allow editing in the input
  const handleNoteChange = (event) => {
    // no event.preventDefault(); needed as there is no action that occurs on input change(editing search bar), whereas for form submission there is
    console.log(event.target.value) // target corresponds to the controlled input element (this is the controlled components method)
    setNewNote(event.target.value) // event.target.value refers to the input value of that target
  }

  const notesToShow = showAll // const result = condition ? val1 : val2; if true show val1, if false show val2
  ? notes
  : notes.filter(note => note.important); //only show important notes (true) (note.important is t/f so no conditional is needed '===true')

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick = {() => setShowAll(!showAll)}> {/* very simple so it is directly implemented*/}
          show {showAll ? 'important' : 'all'} {/* if show all is true then display show important, and vice versa if flase*/}
        </button>
      </div>
      <ul>
        {notesToShow.map(note => 
            <Note key ={note.id} note ={note} />  
        )}  
      </ul>
      <form onSubmit = {addNote}>
        <input value = {newNote} onChange = {handleNoteChange}/>
        <button type ="submit"> save </button>
      </form>
    </div>
  )
}

export default App