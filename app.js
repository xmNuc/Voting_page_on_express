const express = require('express');
const { voteRouter } = require('./routes/vote');

const app = express();

app.use(express.static('public'));

app.use('/vote', voteRouter);

app.listen(3000);
