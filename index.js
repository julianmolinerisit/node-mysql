import express from 'express' //importamos Express
import {conectar, agregarContacto} from './src/mysql_conector.js'
const app = express() //iniciamos Express
//iniciamos servidor
app.listen('8000', function(){
    console.log('Aplicacion iniciada en el puerto 8000')
})
//configuracion de pug
app.set('views', './vistas')
app.set('view engine', 'pug')

//configuracion de archivos estaticos
app.use(express.static('./vistas'))
app.use(express.static('./src'))
app.use(express.static('./css'))

app.get('/', function(req, res){
    // res.send('aplicacion iniciada todo va bien.')
    // conectar()
    res.render('index', {titulo: 'Aplicacion de contactos', dato: 'Cualquier texto'})
})

app.get('/agregar/:nombre/:numero', function(req, res){
    let nombre = req.params.nombre
    let numero = req.params.numero
    agregarContacto(numero, nombre) 
    res.redirect('/')
    console.log(nombre, numero)
   
})
