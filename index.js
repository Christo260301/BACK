//Llamamos la conexion realizada en la carpeta config
require('./config/conexion');

const express = require('express');
const PORT = (process.env.PORT || 8080);
const app = express();

//Este fragmento admite el tipo de dato
app.use(express.json())

//Se configura el puerto donde se ejecutara el servidor
app.set('port',PORT);

//Rutas que seran utilizadas 
app.use('/api', require('./rutas'));

//En esta configuracion iniciamos express
app.listen(app.get('port'),(error)=>{
    if(error){
        console.log('Error al iniciar el servidor: ' + error)
    } else {
        console.log('Servidor iniciado: ' + PORT )
    }
});