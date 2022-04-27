const Contenedor = require ('./contenedorArchivo.js')
const express = require ('express')
const PORT = 8080 //se usa este generalmente
const app = express()
let i=0
const server = app.listen(PORT,()=>{console.log ('servidor HTTP escuchando en el puerto' + PORT)})

app.get('/', (req,res)=>{res.send('<h1 style="color:red;">Bienvenidos al servidor express</>')}) 
// que aparezca el '/' solo hace referencia a una ruta raíz
// le estoy enviando un html con un h1 en color azul
app.get('/visitas', (req,res)=>{
    i++
    res.send({mensaje:'La cantidad de visitas es ' + i})})
    
app.get('/fyh', (req,res)=>{res.send({fechayhora: new Date().toLocaleString()})})