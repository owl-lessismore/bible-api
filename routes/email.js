const express = require('express');
const router = express.Router();

router.post('/', async (req, res, next) => {
    try {
     
    } catch(e) {
        console.log(e);
        res.status(400).send({
            "message": e.message, "info": e, "status": "error"
        });
    }
});


module.exports = router;
