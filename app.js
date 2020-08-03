const express = require('express');
const app = express();


app.use('/static', express.static('public'));

app.set('view engine', 'pug');

const mainRoutes = require('./routes/');
const projectRoutes = require('./routes/project');

app.use(mainRoutes);
app.use('/project', projectRoutes);

  //Error handling using the error view
app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
  });


  
  app.use((err, req, res, next) => {
    if(!err.status){
      err.status = 500;
    }
    res.locals.error = err;
    res.status(err.status);
    res.render('error');
  });

app.listen(3000, () => {
    console.log('The application is running on localhost:3000!')
});