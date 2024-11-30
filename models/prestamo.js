module.exports = (sequelize, DataTypes) => {
    const prestamo = sequelize.define('prestamo', {
      fecha_prestamo: {
        type: DataTypes.DATE,
        allowNull: false
      },
      fecha_devolucion: {
        type: DataTypes.DATE
      },
      estado: {
        type: DataTypes.STRING,
        defaultValue: 'activo'
      }
    });
    prestamo.associate = (models) => {
     prestamo.belongsTo(models.biblioteca, { foreignKey: 'bibliotecaId' });
     prestamo.belongsTo(models.usuario, { foreignKey: 'usuarioId' });
    };
  
    return prestamo;
  };
  