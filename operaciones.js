const fs = require('fs')

function borrar(id) {
    if (id) {
        try {
            const repertorio = JSON.parse(fs.readFileSync('repertorio.json', 'utf-8'))
            let indice = repertorio.findIndex(artista => artista.id === parseInt(id));
            console.log( indice)
            repertorio.splice(indice,1)
            fs.writeFileSync('repertorio.json', JSON.stringify(repertorio))
            console.log('Artista eliminado')
            return(200)

        } catch (error) {
            console.log('funcion borrrar: ID no encontrado ')
            return(404)
        }
    } else {
        console.log('funcion borrrar: faltan parametros')
        return(400)
    }
}

function modificar(id, titulo, artista, tono) {
    if (id, titulo, artista, tono) {
        const templateRepertorio = {
            id, titulo, artista, tono
        }

        try {
            const repertorio = JSON.parse(fs.readFileSync('repertorio.json', 'utf-8'))
            let indice = repertorio.findIndex(artista => artista.id === parseInt(id));
            //console.log( indice)
            repertorio[indice].titulo = titulo
            repertorio[indice].artista = artista
            repertorio[indice].tono = tono
            fs.writeFileSync('repertorio.json', JSON.stringify(repertorio))
            console.log('El artista ' + artista + 'ha sido modificado')
            return(200)
        } catch (error) {
            console.log('funcion modificar: ID no encontrado ')
            return(404)
        }
    } else {
        console.log('funcion modificar: faltan parametros')
        return(400)
    }
}

function registrar(id, titulo, artista, tono) {
    if (id, titulo, artista, tono) {
        const templateRepertorio = {
            id, titulo, artista, tono
        }

        try {
            const repertorio = JSON.parse(fs.readFileSync('repertorio.json', 'utf-8'))
            repertorio.push(templateRepertorio)
            fs.writeFileSync('repertorio.json', JSON.stringify(repertorio))
            console.log('El artista ' + artista + 'ha sido agregado')
            return(200)
        } catch (error) {
            const crearArreglo = '[]'
            fs.writeFileSync('repertorio.json', crearArreglo)
            console.log('archivo creado')
            const repertorio = JSON.parse(fs.readFileSync('repertorio.json', 'utf-8'))
            repertorio.push(templateRepertorio)
            fs.writeFileSync('repertorio.json', JSON.stringify(repertorio))
            console.log('El artista ' + artista + 'ha sido agregado')
            return(200)
        }
    } else {
        console.log('funcion registar: faltan parametros')
        return(400)
    }
}

function leer() {
    try {
        const repertorio = JSON.parse(fs.readFileSync('repertorio.json', 'utf-8'))
        //console.log(repertorio)
        return(repertorio)
    }
    catch (error) {
        console.log("No hay repertorios registrados")
        return("No hay repertorios registrados")
    }
}

//CRUD
module.exports = { registrar, leer, modificar, borrar }