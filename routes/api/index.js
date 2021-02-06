const path = require ('path');
const router = require('express').Router();
const googleRoute = require('./googleApi');
const bookRoute = require ('./booksApi');

router.use("/booksAPI", bookRoute)
router.use('/googleAPI', googleRoute)

roouter.use(function(req,res){
    res.sendFile(path.join(__dirname, "../../client/build/index.html"))
})

module.exports = router;