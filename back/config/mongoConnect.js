const mongoose = require('mongoose');
require('dotenv').config({ path: 'config/config.env' });

//                        Conexion  a MONGO ATLAS  // Conexion a MONGO LOCAL
const connectionString =(process.env.DB_ATLAS_URI || process.env.DB_LOCAL_URI);      

const dbconnect = mongoose.connect(connectionString,{useNewUrlParser: true})
  .then(con => {
    console.log(`Base de datos mongo conectada con el servidor ${con.connection.host}`);
  })
  .catch((err) => {
    console.log(err);
  })

module.exports = dbconnect;