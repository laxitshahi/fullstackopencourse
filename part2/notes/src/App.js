import React, {useState, useEffect } from 'react'
import Note from './components/Note'
import Notification from './components/Notification'
import Footer from './components/Footer'
import noteService from './services/notes'
import './index.css'

//Control Component method to access the data contained in the form's input element
const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('');
  const [showAll, setShowAll] = useState(true);
  const [errorMessage, setErrorMessage] = useState('an error occurred...')

// const hook = () => { // At first, 0 notes are rendered. Thereafter, the function inside useEffect is run 
//     console.log('effect')
//     axios
//       .get("http://localhost:3001/notes")
//       .then(response => {
//         console.log('promise fulfilled')
//         setNotes(response.data)
//       })
//     }
//   useEffect(hook, []) 

   // first parameter in useEffect is used to determine the effect
   // the second parameter in useEffect is used to determine how often the effect is run


  useEffect(() => { //replacment for get hook?
    noteService 
      .getAll()
      .then(initialNotes => {
        setNotes(initialNotes)
      })
  }, [])

  //need this to allow editing in the input
  const handleNoteChange = (event) => {
    // no event.preventDefault(); needed as there is no action that occurs on input change(editing search bar), whereas for form submission there is
    console.log(event.target.value) // target corresponds to the controlled input element (this is the controlled components method)
    setNewNote(event.target.value) // event.target.value refers to the input value of that target
  }



  const toggleImportanceOf = id => {
    const note = notes.find(n => n.id === id) //finds note with our specifc id, then assigns to const note
    //note.important = !note.important is not recommended as note is a refrence to notes state 
    //NEVER MUTATE STATES DIRECTLY IN REACT
    const changedNote = {...note, important: !note.important} //changedNOte is a shallow copy ()
    //changedNote is just the specific note you want to change

    noteService
      .update(id, changedNote).then(returnedNote => { // returnedNote = response
     //the response.data is updated when button is clicked, the note is not
      setNotes(notes.map(note => note.id !== id ? note: returnedNote)) //compare ids, if !== the old array object is copied, else the server returned object is copied
    })
    .catch(error => {
      console.log(error)
      setErrorMessage(
        `Note '${note.content}' was already removed from server`
      )
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
        setNotes(notes.filter(n => n.id !==id)) //filters and removes deleted note
      })
  }
 

  const addNote = (event) => {
    event.preventDefault(); // prevents default actions, such as a page reload
    const noteObject = {
      content: newNote, 
      date: new Date().toISOString(),
      important: Math.random() > 0.5, // 50% chance of the note being marked important
      // id: notes.length + 1, // method of id creation only works since notes are never deleted let it be hadled by srver
    } 

    // axios
    // .post('http://localhost:3001/notes', noteObject) //no idea property since it's better let the server generate the ids
    // .then(response => {
    //   console.log(response)// the returns "data", which stores the new noteObject 
    //   setNotes(notes.concat(noteObject)); // CONCAT DOES NOT MUTATE THE ORIGINAL; CREATES NEW COPY
    //   setNewNote(''); // resets controlled input element (clears input bar after submission )
    // }) 

      noteService //replacement for axios.post
        .create(noteObject)
        .then(returnedNote => {
          setNotes(notes.concat(returnedNote))
          setNewNote('')
      })
    }

  const notesToShow = showAll // const result = condition ? val1 : val2; if true show val1, if false show val2
  ? notes
  : notes.filter(note => note.important); //only show important notes (true) (note.important is t/f so no conditional is needed '===true')

  return (
    <div>
      <h1>Notes</h1>
      <Notification message = {errorMessage}/>
      <div>
        <button onClick = {() => setShowAll(!showAll)}> {/* very simple so it is directly implemented*/}
          show {showAll ? 'important' : 'all'} {/* if show all is true then display show important, and vice versa if flase*/}
        </button>
      </div>
      <ul>
        {notesToShow.map(note => 
            <Note key ={note.id} note ={note} toggleImportance={() => toggleImportanceOf(note.id)} />  
        )}  
      </ul>
      <form onSubmit = {addNote}>
        <input value = {newNote} onChange = {handleNoteChange}/>
        <button type ="submit"> save </button>
      </form>
      <Footer/>
    </div>
  )
}

export default App