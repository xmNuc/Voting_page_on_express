const express = require('express');

const voteRouter = express.Router();

let voteY = 0;
let voteN = 0;
let voteM = 0;

voteRouter
  .get('/', (req, res) => {
    res.send('ok');
  })
  .get('/vote/yes', (req, res) => {
    voteY++;
    res.send('Voted Yes');
  })
  .get('/vote/no', (req, res) => {
    voteN++;
    res.send('Voted No');
  })
  .get('/vote/maybe', (req, res) => {
    voteM++;
    res.send('Voted maybe');
  })
  .get('/vote/check', (req, res) => {
    res.send(
      `Vote result: \n Vote Yes: ${voteY}\n Vote no: ${voteN}\n Vote maybe: ${voteM}`
    );
  });

module.exports = {
  voteRouter,
};
