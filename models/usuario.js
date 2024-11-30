module.exports = (sequelize, DataTypes) => {
    const usuario = sequelize.define('usuario', { // Definido en minúscula
      nombre: {
        type: DataTypes.STRING,
        allowNull: false
      },
      correo: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      contraseña: {
        type: DataTypes.STRING,
        allowNull: false
      }
    });
  
    return usuario;
  };
  