import express, { response } from 'express'
import { PUERTO } from './config.js'

const app = express()

app.get('/', (req, res) => {
    res.send('LALA!')
})

// Endpoints
app.post('/login', (req, res) => {})
app.post('/register', (req, res) => {})
app.post('/logout', (req, res) => {})

// Endpoint - Ruta protegida
app.get('/protected', (req, res) => {})


app.listen(PUERTO, () => {
    console.log(`Server running on ${PUERTO}...`)
})