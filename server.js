const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const patientRoutes = require('./routes/patientRoutes')
const visitRoutes = require('./routes/visitRoutes')
const PORT = process.env.PORT || 3000

app.use(bodyParser.json())
app.use(cors())
app.use(express.static("public"))

mongoose.connect('mongodb+srv://samstar10:Shmoopysam9@cluster0.usmstay.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use('/api/patients', patientRoutes)
//app.use('/api/patients/visits', visitRoutes)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})