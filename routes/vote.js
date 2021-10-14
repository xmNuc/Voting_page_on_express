const express = require('express');

const voteRouter = express.Router();

let voteY = 0;
let voteN = 0;
let voteM = 0;
let saveIp;

voteRouter
  .get('/yes', (req, res) => {
    if (saveIp) {
      return res.send('you alredy voted');
    } else {
      voteY++;
      saveIp = req.ip;
      res.send(`Voted Yes from IP: ${req.ip}`);
    }
  })
  .get('/no', (req, res) => {
    if (saveIp) {
      return res.send('you alredy voted');
    } else {
      voteN++;
      res.send('Voted No');
    }
  })
  .get('/maybe', (req, res) => {
    if (saveIp) {
      return res.send('you alredy voted');
    } else {
      voteM++;
      res.send('Voted Maybe');
    }
  })
  .get('/check', (req, res) => {
    res.send(
      `Vote result: \n Vote Yes: ${voteY}\n Vote no: ${voteN}\n Vote maybe: ${voteM}`
    );
  });

module.exports = {
  voteRouter,
};
