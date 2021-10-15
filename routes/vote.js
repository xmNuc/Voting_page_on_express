const express = require('express');
const { IpRestrict } = require('../utils/ip-restrict');

const voteRouter = express.Router();

const votes = {
  yes: 0,
  no: 0,
};

const ipRestrict = new IpRestrict();

// let voteY = 0;
// let voteN = 0;
// let voteM = 0;
// let saveIp;

voteRouter
  .get('/check', (req, res) => {
    const info = Object.entries(votes)
      .map((ar) => `<h2>Votes on ${ar[0]}: ${ar[1]}</h2>`)
      .join('<br>');

    res.send(info);
  })
  .get('/:voteName', (req, res) => {
    if (!ipRestrict.check(req.ip)) {
      return res.send(`<h2>you alredy voted<h2>`);
    } else {
      const { voteName } = req.params;
      if (typeof votes[voteName] === 'undefined') {
        votes[voteName] = 0;
      }
      votes[voteName]++;
      saveIp = req.ip;
      res.send(`<h2>Voted Yes from IP: ${req.ip}</h2>`);
    }
  });

// voteRouter
//   .get('/yes', (req, res) => {
//     if (saveIp) {
//       return res.send('you alredy voted');
//     } else {
//       voteY++;
//       saveIp = req.ip;
//       res.send(`Voted Yes from IP: ${req.ip}`);
//     }
//   })
//   .get('/no', (req, res) => {
//     if (saveIp) {
//       return res.send('you alredy voted');
//     } else {
//       voteN++;
//       res.send('Voted No');
//     }
//   })
//   .get('/maybe', (req, res) => {
//     if (saveIp) {
//       return res.send('you alredy voted');
//     } else {
//       voteM++;
//       res.send('Voted Maybe');
//     }
//   })
//   .get('/check', (req, res) => {
//     res.send(
//       `<h1>Vote result:</h1>  <p>Vote Yes: ${voteY}</p> <p>Vote no: ${voteN}</p> <p>Vote maybe: ${voteM}</p>`
//     );
//   });

module.exports = {
  voteRouter,
};
