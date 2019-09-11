const express = require('express');
const path = require('path');
const appRouter = express.Router();

appRouter.get(['/', '/*'], (req, res) => {    
    res.sendFile(path.resolve(__dirname, '../../public/index.html'));
});

module.exports = appRouter;