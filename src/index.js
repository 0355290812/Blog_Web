const express = require('express');
const engine = require('express-handlebars');
const path = require('path');
const morgan = require('morgan');
const { strict } = require('assert');
const app = express();
const port = 3000;
const route = require('./routes/index.js');

//set Template Engine
app.engine(
    'hbs',
    engine.engine({
        extname: '.hbs',
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));
app.use(morgan('tiny'));

//route init
route(app);

app.listen(port, () => console.log('http://localhost:' + port));
