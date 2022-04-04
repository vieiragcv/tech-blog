/*---------------------------------------------------------------
-                         LOGIN (POST)
---------------------------------------------------------------*/

router.post('/login', (req, res) => {

  Login.findOne({
    where: {
      email: req.body.email
    }
  }).then(dbUserData => {

    if (!dbUserData) {
      res.status(400).json({ message: 'No user with that email address!' });
      return;
    }
    const validPassword = dbUserData.checkPassword(req.body.password);
    if (!validPassword) {
      res.status(400).json({ message: 'Incorrect password!' });
      return;
    }
    res.json({ user: dbUserData, message: 'You are now logged in!' });
  });  
});
