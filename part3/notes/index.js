//imports buit-in web server module
// const http = require('http');  non express method

//same as "import express from express" syntax*
const express = require('express') //function which creates express app
const app = express()
const cors = require('cors')

app.use(express.static('build'))
app.use(cors())
app.use(express.json())//allows the use of the json-parser
//body would be unindentified w/o it



//Personal middleware implementation
const requestLogger = (request, response, next) => {
  console.log('Method:', request.method)
  console.log('Path:  ', request.path)
  console.log('Body:  ', request.body)
  console.log('---')
  next()
}

app.use(requestLogger)

let notes = [
    {
      id: 1,
      content: "HTML is easy",
      date: "2019-05-30T17:30:31.098Z",
      important: true
    },
    {
      id: 2,
      content: "Browser can execute only Javascript",
      date: "2019-05-30T18:39:34.091Z",
      important: false
    },
    {
      id: 3,
      content: "GET and POST are the most important methods of HTTP protocol",
      date: "2019-05-30T19:20:14.298Z",
      important: true
    }
  ]

//express auto sets Content-Type to text/html as the parameter is a string
//express defaults staus code of response to 200
app.get('/', (request, response) => { // request parameter contains all the HTTP request info
  response.send('<h1>Hello World!<h1>') // request is responded by sending the given string
})

//content type auto sets to application/json
app.get('/api/notes', (request, response) => { // address plus /api/notes is the address
  response.json(notes) // JSON.stringify method is unnecessary with express
  // the json that is stringified is a string, not an object
})

//route for fetching single resource 
app.get('/api/notes/:id', (request, response) => {
  console.log(request)
  const id = Number(request.params.id) //id is a string (notes id is a number)
  const note = notes.find(note =>  note.id === id //note set to undefined if no id found 
  )
  if (note) {  // leverages the fact that all js objects are truthy; unidentified is falsy
    response.json(note)
  }
   //if no mataching note is found then respond with status 404
  else {
    response.status(404).end() //no data attached to reponse; tf status method used
  }
})

//route for deleting resources
app.delete('/api/notes/:id', (request, response) => {
  const id = Number(request.params.id)
  notes = notes.filter(note => note.id !== id)

  response.status(204).end()
})


const generateId = () => {
  const maxID = notes.length > 0 ? Math.max(...notes.map(n => n.id)) : 0
  return maxID + 1;
}

//route for receiving data
app.post('/api/notes', (request, response) => {
  const body = request.body

  //IF data received is missing a value for content property, the server responds to the request with the status code 400
  if(!body.content){ 
    return response.status(400).json({
      error: 'content missing'
    })
  }

  const note = {
    content: body.content,
    important: body.important || false, //if important set to true, else false
    date: new Date(), //date set by server; not based on host machine
    id:generateId(),
  }

  notes = notes.concat(note)

  response.json(note)
})


//part 3-2, middleware implementation
const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)// "listen" to any requests made to PORT (3001 in this case)
}) 
