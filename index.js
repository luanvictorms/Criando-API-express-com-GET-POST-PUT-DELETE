const express = require('express')
const bodyParser = require('body-parser')

const userRoute = require('./routes/userRoute')

const app = express()
const port = 3000;

app.use(express.urlencoded({ extended: false }))
app.use(express.json());   


userRoute(app)

app.get('/', (req, res) => res.send ('Olá mundo pelo express!'))
app.listen(port, () => console.log('Api rodando na porta 3000'))