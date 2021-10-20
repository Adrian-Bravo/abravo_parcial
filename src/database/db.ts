const Sequelize = require('sequelize');

export const database = new Sequelize(
    'abravo_parcial', 'root', 'Almacen08#',

    {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306
    }
);

database.sync({force: true})
    .then(function(){
        console.log('¡Base de datos creada!');
    })
