/*---------------------------------------------------------------
-                         SERVER
---------------------------------------------------------------*/
const path = require('path');
const express = require('express');
const sequelize = require('./config/connection');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const hbs = exphbs.create({});


const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

/*-----------------------turn on routes------------------------*/

app.use(routes);                                                

/*------------turn on connection to db and server--------------*/

sequelize.sync({ force: false }).then(() => {                
  app.listen(PORT, () => console.log('Now listening'));
});