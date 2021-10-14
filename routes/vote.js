const express = require('express');

const voteRouter = express.Router();

let voteY = 0;
let voteN = 0;
let voteM = 0;

voteRouter
  .get('/yes', (req, res) => {
    voteY++;
    res.send('Voted Yes');
  })
  .get('/no', (req, res) => {
    voteN++;
    res.send('Voted No');
  })
  .get('/maybe', (req, res) => {
    voteM++;
    res.send('Voted maybe');
  })
  .get('/check', (req, res) => {
    res.send(
      `Vote result: \n Vote Yes: ${voteY}\n Vote no: ${voteN}\n Vote maybe: ${voteM}`
    );
  });

module.exports = {
  voteRouter,
};
