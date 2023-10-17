module.exports = {
    HOST: "localhost",
    USER: "last",
    PASSWORD: "q123",
    DB: "lastdb",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };