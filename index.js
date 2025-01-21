const express = require('express')
const app = express()
app.set('view engine','ejs');
app.get('/', function (req, res) {
  const datos= [
    {nombre: 'Ana',apellidos: 'García'},
    {nombre: 'Juan',apellidos: 'López'}
  ]
  res.render('index',{datos:datos});
})

app.get('/saludo', function (req, res) {
  res.render('saludo',{hora:"00:00"});
})

app.get('/producto', function (req, res) {
    const datos = [
        {id: 1, nombre: "Pepe", precio: 20, colores: ['rojo', 'negro', 'verde']},
        {id: 2, nombre: "Antonia", precio: 50, colores: ['amarillo', 'azul', 'blanco']},
        {id: 3, nombre: "Laura", precio: 35, colores: ['violeta', 'purpura', 'rosa']}
      /*{color: 'rojo'},
      {color: 'negro'},
      {color: 'verde'}*/
    ]
    res.render('producto',{datos:datos});
  })

app.listen(3000)