const mysql = require('mysql');

//Se realiza la conexion con nuestra base de datos
const conexion = mysql.createConnection({
    host: 'us-cdbr-east-06.cleardb.net',
    user:'bf8476d514b387',
    password: '78f32cf2',
    database: 'heroku_e6e23bf905e2e7d'
});



//Verificamos si existen errores en la conexion mostrando en consola
conexion.connect((err)=>{
    if(err){
        console.log("Ha ocurrido un error: " + err)
    } else {
        console.log("Base de datos se ha conectado!!!")
    }
})

module.exports = conexion;