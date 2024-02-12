// index.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Your routes will be added here

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
