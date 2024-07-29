const express = require('express');
const session = require('express-session');
const sequelize = require('./server/config.js/connection');

const app = express();
const PORT = process.env.PORT || 3001;






sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
  });