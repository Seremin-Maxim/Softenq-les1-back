// models/User2.js

const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config'); // Import your Sequelize instance

const User2 = sequelize.define('User2', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  ID: {
    type: DataTypes.INTEGER,
    allowNull:false,
    unique:false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    unique:false,
  },
  createdAt:{
    type: DataTypes.DATE,
    allowNull: false,
    unique:false,
  }
});

//User.hasMany(Post, { foreignKey: 'userId' });
//module.exports = User;

(async () => {
  // Пересоздаем таблицу в БД
  await sequelize.sync({ force: true })
  // дальнейший код
})()

/*


Создание экземпляра:

// Создаем объект
const jane = User.build({ name: 'Jane' })
// и сохраняем его в БД
await jane.save()

// Сокращенный вариант
const jane = await User.create({ name: 'Jane' })
console.log(jane.toJSON())
console.log(JSON.stringify(jane, null, 2))


Обновление экземпляра:

const john = await User.create({ name: 'John' })
// Вносим изменение
john.name = 'Bob'
// и обновляем соответствующую запись в БД
await john.save()


Удаление экземпляра:

await john.destroy()

*/