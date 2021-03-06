const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use('/:id', express.static(path.join(__dirname, '/../client/dist')));

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
