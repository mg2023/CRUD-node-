const express = require('express')
const app = express()
const { registrar, leer, modificar, borrar } = require('./operaciones.js')

app.use(express.json())

const fs = require('fs')

// 1. Levantar un servidor local usando Express Js (2 Puntos)
app.listen(3000, () => {
    console.log('El servidor esta ok')
})

// 2. Devolver una página web como respuesta a una consulta GET (2 Puntos)
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

// 3. Ofrecer diferentes rutas con diferentes métodos HTTP que permitan las operaciones
// CRUD de datos alojados en un archivo JSON local (3 Puntos)
// 5. Manipular el payload de una consulta HTTP al servidor (2 Puntos)
app.post('/canciones', (req, res) => {
    const {id, titulo, artista, tono} = req.body
    let status = registrar(id, titulo, artista, tono)
    res.sendStatus(status)
})

// 3. Ofrecer diferentes rutas con diferentes métodos HTTP que permitan las operaciones
// CRUD de datos alojados en un archivo JSON local (3 Puntos)
app.get('/canciones', (req, res) => {
    ans=leer()
    res.status(200).send(ans)
})

// 3. Ofrecer diferentes rutas con diferentes métodos HTTP que permitan las operaciones
// CRUD de datos alojados en un archivo JSON local (3 Puntos)
// 4. Manipular los parámetros obtenidos en la URL (1 Puntos)
// 5. Manipular el payload de una consulta HTTP al servidor (2 Puntos)
app.put('/canciones/:id_parameter', (req, res) => {
    //aca viene el id por querystring y en el body, se podria utilizar cualquiera
    //se muestra solo por completitud
    const {id_parameter} = req.params
    const {id, titulo, artista, tono} = req.body
    let status = modificar(id, titulo, artista, tono)
    res.sendStatus(status)
})

// 3. Ofrecer diferentes rutas con diferentes métodos HTTP que permitan las operaciones
// CRUD de datos alojados en un archivo JSON local (3 Puntos)
// 4. Manipular los parámetros obtenidos en la URL (1 Puntos)
app.delete('/canciones/:id', (req, res) => {
    const {id} = req.params
    let status = borrar(id)
    res.sendStatus(status)
})
