/*const sequelize = require("./config");
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.get("/getData",(req,res)=>{
  res.send("Hello");
});

app.listen(3000, () => console.log('Example app is listening on port 3000.'));
*/

//const sequelize = require("./config");




const express = require('express');//импорт, позволяющий делать запросы
const cors = require('cors');//кросс-домен. запросы

const httpProxy = require('http-proxy');
const proxy = httpProxy.createProxyServer();

const app = express();//экзепляр ехр приложения
app.use(cors());//разрешаем кросс запросы

app.get("/getData",(req,res)=>{
  res.send("Hello");
});//когда на серв приходит гет запрос, овте - хелло


app.listen(3000, () => console.log('Example app is listening on port 3000.'));

/*
const port = 8000;
app.listen(port, () => {
  console.log('Frontend is running on port');
});
*/


/*

const sequelize = require('./config');
//const User = require('./models/User');

// Sync the models with the database
sequelize.sync({ force: false }) // Set 'force' to true to drop and recreate tables
  .then(() => {
    console.log('Database synced');
  })
  .catch((err) => {
    console.error('Error syncing database:', err);
  });

  const User = require('./models/User');

// Create a new user
//const User = require('./models/User');

User.create({
  username: 'example_user',
  email: 'user@example.com',
  password: 'secure_password',
})
  .then((user) => {
    console.log('User created:', user.toJSON());
  })
  .catch((err) => {
    console.error('Error creating user:', err);
  });
  
  */