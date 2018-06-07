const express = require('express');
const router = express.Router();

router.get('/user', (req, res, next) => {
    res.send('admin 用户信息')
})

module.exports = router;