const { response } = require('express')
const express = require('express')
const morgan = require('morgan')

const app = express()
app.use(express.json()) 

morgan.token('getpost', req => JSON.stringify(req.body))

app.use(morgan(':method :url :status :res[content-length] - :response-time ms :getpost'))



let persons = [
        { 
          "id": 1,  
          "name": "Arto Hellas", 
          "number": "040-123456"
        },
        { 
          "id": 2,
          "name": "Ada Lovelace", 
          "number": "39-44-5323523"
        },
        { 
          "id": 3,
          "name": "Dan Abramov", 
          "number": "12-43-234345"
        },
        { 
          "id": 4,
          "name": "Mary Poppendieck", 
          "number": "39-23-6423122"
        }
]

// app.get('/', (request, response) => {
//   response.send('<h1>Hello World!</h1>')
// })

app.get('/api/persons', (request, response) => {
  response.json(persons)
})

app.get('/info', (request, response) => {
    const res = `<p>Phonebook has info for ${persons.length} people<p>
                      <p>${Date()}<p>`
    response.send(res)
    
})

app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = persons.find(p => p.id === id)
    
    if(person){
        response.json(person)
    }
    else{
        response.status(404).end()
    }
})

app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter(p => p.id !== id)

    response.status(204).end()
})

const generateID = () => {
    return Math.floor(Math.random() * 100000000);
}
app.post('/api/persons', (request, response) => {
    const body = request.body 
    // console.log(body)
    const person = {
        name: body.name,
        number: body.number,
        id: generateID()
    }

    if(!body.name || !body.number){
        return response.status(400).json({
            error:'content missng'
        })
    }
    else if(persons.find(person => person.name.toLowerCase() === body.name.toLowerCase())){
        return response.status(404).json({
            error: `The name '${body.name}' is already in the phonebook`
        })
    }
    else {
    persons = persons.concat(person)

    response.json(persons)
    }
   
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})