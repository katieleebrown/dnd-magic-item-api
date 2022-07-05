const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const magicItems = {

}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response) => {
    const characterName = request.params.name.toLowerCase()
    if (characters[characterName]) {
        response.json(characters[characterName])
    } else {
        response.json(characters['unknown'])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is now running on port ${PORT}`)
})