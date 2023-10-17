//старый rabichiy
const express = require('express');//импорт, позволяющий делать запросы
const cors = require('cors');//кросс-домен. запросы

const db = require("./models");

const httpProxy = require('http-proxy');
const proxy = httpProxy.createProxyServer();

const app = express();//экзепляр ехр приложения
app.use(cors());//разрешаем кросс запросы
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.get("/api",(req,res)=>{
  res.send("Hello");
});//когда на серв приходит гет запрос, ответ - хелло




const Role = db.role;

db.sequelize.sync({force: true}).then(() => {
  console.log('Drop and Resync Db');
  initial();
});

function initial() {
  Role.create({
    id: 1,
    name: "user"
  });
 
  Role.create({
    id: 2,
    name: "moderator"
  });
 
  Role.create({
    id: 3,
    name: "admin"
  });
}

// routes
require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);

//const authRouter = require('./routes/auth.routes');
//const userRouter = require('./routes/user.routes');
//app.use('/api', authRouter);
//app.use('/api', userRouter);


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