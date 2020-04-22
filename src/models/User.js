const Sequelize = require('sequelize');

const sequelize = require('../sequelize');
// console.log('cheguei aqui ');

const User = sequelize.define('user' , {
    //atributes
    firstName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: true
    }

}, {
    //options
});


// const Model = Sequelize.Model;
// class User extends Model {}
// User.init({
//   // attributes
//   firstName: {
//     type: Sequelize.STRING,
//     allowNull: false
//   },
//   lastName: {
//     type: Sequelize.STRING
//     // allowNull defaults to true
//   }
// }, {
//   sequelize,
//   modelName: 'user'
//   // options
// });

// cria tabela 
// sync({ force: true }) //dropa a tabela e inicia novamente // sem não dropa e não dá erro, mas se tiver dados dentro, dá insert junto
User.sync().then(() => {
    // Now the `users` table in the database corresponds to the model definition

    //cria vazia sem parametros iniciais 
    // return User.create({
    //   firstName: 'harry',
    //   lastName: 'porrtuer'
    // });
  });

console.log('entityUser');
