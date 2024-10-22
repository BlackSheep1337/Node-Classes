const express = require('express');

const PORT = 3000;

const app = express();

app.set('view engine', 'ejs');

app.listen(PORT, () => console.log(`server listening on port:${PORT}`));

app.get('/', (req, res) => {
  //res.send('<p>Home page</p>'); 
  res.render('index');
});

app.get('/about', (req, res) => {
  //res.send('<p>About page</p>');
  res.sendFile('./views/about.html', { root: __dirname });
});

app.get('/about-us', (req, res) => {
  res.redirect = ('/about');
});


//MUST BE IN THE BOTTOM
app.use((req, res) => {
  res.status(404)
    .sendFile('/views/404.html', { root: __dirname });
});