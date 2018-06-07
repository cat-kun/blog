const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.send('首页')
})

module.exports = router;