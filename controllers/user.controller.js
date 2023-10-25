//user.controller.js
exports.allAccess = (req, res) => {
    res.status(200).send("Public Content.");
  };
  
  exports.userBoard = (req, res) => {
    res.status(200).send("User Content.");
  };
  
  exports.adminBoard = (req, res) => {
    res.status(200).send("Admin Content.");
  };
  
  exports.moderatorBoard = (req, res) => {
    res.status(200).send("Moderator Content.");
  };

  //контроллер для получения списка пользователей
  exports.getUsers = (req, res) => {
    db.user.findAll()
      .then((users) => {
        res.status(200).json(users);
      })
      .catch((err) => {
        console.error('Ошибка при получении пользователей:', err);
        res.status(500).json({ error: 'Внутренняя ошибка сервера' });
      });
  };
  
  