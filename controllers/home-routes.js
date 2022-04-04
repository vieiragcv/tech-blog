const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Post } = require('../models');

/*---------------------------------------------------------------
-                         RENDER HOMEPAGE
---------------------------------------------------------------*/

/* router.get('/', (req, res) => {
  Post.findAll({
    })
    .then(dbPostData => {
      console.log(dbPostData[0]);
      const posts = dbPostData.map(post => post.get({ plain: true }));
      res.render('homepage', { posts });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
}); */


router.get('/', (req, res) => {
  res.render('homepage');
});

/*---------------------------------------------------------------
-                         RENDER LOGIN PAGE
---------------------------------------------------------------*/
router.get('/login', (req, res) => {
  res.render('login');
});

module.exports = router;