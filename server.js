const express = require('express');

const app = express();

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', (req, res) => {
  console.log(req.url);
  res.send('Hello User');
});

app.get('/update', (req, res) => {
  let date = new Date();
  console.log(date);

  let file = __dirname + '/public/update.bin';

  res.download(file);
});

app.listen(process.env.PORT);
