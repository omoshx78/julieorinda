const path = require('path');
const express = require('express');

const port = process.env.PORT || 8080;

const app = express();
app.use(express.static(path.join(__dirname, '/')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './index.html'));
});

app.listen(port);