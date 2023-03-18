const express = require('express');

const router = express();

router.get('/',(req,res)=>{
    res.send('Welcome to my gallery!');
});

module.exports = router;