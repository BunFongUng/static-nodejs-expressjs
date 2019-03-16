require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// registered middleware 
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(express.static('public'));

// telling express we use pug as the view engine
app.set('view engine', 'pug');

// require routes
const routes = require('./routes');

// require custom middleware 
const middleware = require('./middleware');

app.use(routes.routes);

// registerd custom middleware for not found and error handling 
app.use(middleware.notFoundErrorHandling);
app.use(middleware.errorHandling);

app.listen(process.env.PORT, () => {
    console.log(`App up and running on port: ${process.env.PORT}`);
});