const express = require('express');
const bodyParser = require('body-parser');
const { sequelize } = require('./models');

const bibliotecaRoutes = require('./routes/biblioteca');
const usuariosRoutes = require('./routes/usuarios');
const prestamosRoutes = require('./routes/prestamos');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/biblioteca', bibliotecaRoutes);
app.use('/api/usuarios', usuariosRoutes);
app.use('/api/prestamos', prestamosRoutes);

sequelize
  .authenticate()
  .then(() => {
    console.log('Conexión a la base de datos establecida con éxito.');
    return sequelize.sync(); 
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('No se pudo conectar a la base de datos:', err);
  });
