const express = require('express');
const fileUpload = require('express-fileupload');

const app = express();
const port = process.env.PORT;

app.use(fileUpload());

app.get('/', (req, res) => {
  console.log(req.url);
  res.sendFile(__dirname + '/views/index.html');
});

app.post('/upload', function(req, res) {
  if (Object.keys(req.files).length == 0) {
    return res.status(400).send('No files were uploaded.');
  }

  // The name of the input field (i.e. "firmware") is used to retrieve the uploaded file
  let firmware = req.files.firmware;

  if (firmware.name !== 'firmware.bin') {
    res.send('Filename should be firmware.bin');
    return;
  }

  // Use the mv() method to place the file somewhere on your server
  firmware.mv(__dirname + '/public/update.bin', function(err) {
    if (err) return res.status(500).send(err);

    res.send('File uploaded!');
  });
});

app.get('/update', (req, res) => {
  let date = new Date();
  console.log(date);

  let file = __dirname + '/public/update.bin';

  res.download(file);
});

app.listen(port, () => {
  console.log(`Server is running on PORT: ${port}`);
});
