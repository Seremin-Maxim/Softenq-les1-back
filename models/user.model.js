module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("users", {
        username: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true,
          },
          /*
          ID: {
            type: Sequelize.INTEGER,
            allowNull:false,
            unique:false,
          },
          */
          email: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true,
          },
          password: {
            type: Sequelize.STRING,
            allowNull: false,
            unique:false,
          },
          createdAt:{
            type: Sequelize.DATE,
            allowNull: false,
            unique:false,
          }
    });
  
    return User;
  };