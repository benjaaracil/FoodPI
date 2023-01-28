const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Recipe', {
    id: {
      type: DataTypes.UUID,           
      defaultValue: DataTypes.UUIDV4, 
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    summary: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    spoonacularScore: {
      type: DataTypes.INTEGER
    },
    healthScore: {
      type: DataTypes.INTEGER
    },
    analyzedInstructions:{
      type: DataTypes.TEXT
    }

  },{
    freezeTableName: true
  });
};




// [ ] Receta con las siguientes propiedades:
// ID: *
// Nombre *
// Resumen del plato *
// Puntuación
// Nivel de "comida saludable"
// Paso a paso