const {Router} = require('express');

const router = Router();

router.get('/user',(req,res) => {
    console.log(req.user);
    res.send("usuarios");
})


module.exports = router;