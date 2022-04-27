const { Console } = require('console');
const fs =require("fs")
const { json } = require('stream/consumers');

module.exports = class  Contenedor 
{
    constructor(archivo)
    {
        this.archivo=archivo
    }  
    
 getAll(){
     const objetos= JSON.parse(fs.readFileSync(this.archivo,'utf-8'));
     console.log('Objetos presentes en archivo: \n' + JSON.stringify(objetos))
     return objetos
 }
 
 
 ;}
  

