const express = require('express')
const app = express()
const PORT = process.env.PORT || 8080 //create varialble "PORT" & check node env PORT that have varialble?
//if run local port=8080 but if run on heroku, port will change

app.get('/', (req, res) => {
    res.json({ result: 'ok', data: [1, 2, 3, 4, 5] })
})
app.listen(PORT), () => {
    console.log(`Server is running. ${PORT}`)
}