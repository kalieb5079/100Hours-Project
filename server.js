const express = require('express')
const app = express()
const PORT = 8000

const famousNPCs = {
    'dumbledore':{
        'ancestry': 'human',
        'age': 81,
        'class': 'Wizard',
    },
    'rigsam':{
        'ancestry': 'human',
        'age': 623,
        'class': 'God-Emperor',
    },
    'unknown': {
        'ancestry': 'unknown',
        'age': 'unknown',
        'class': 'unknown',
    },
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response) => {
    const npcName = request.params.name.toLowerCase()
    if(famousNPCs[npcName]){
        response.json(famousNPCs[npcName])
    }else{
        response.json(famousNPCs['unknown'])
    }  
})



app.listen(PORT, ()=>{
    console.log(`The server is now running on port ${PORT}! Betta go catch it!`)
})