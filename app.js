const express = require('express');

const app = express();

app.use(express.static('public'));
let voteY = 0;
let voteN = 0;

app.get('/', (req, res) => {
  res.send('ok');
});
app.get('/vote/yes', (req, res) => {
  voteY++;
  res.send('Voted Yes');
});

app.get('/vote/no', (req, res) => {
  voteN++;
  res.send('Voted No');
});
app.get('/vote/check', (req, res) => {
  res.send(`Vote result:${voteY}${voteN}`);
});

app.listen(3000);
