var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	res.render('about');
});

router.post('/', function (req, res) {
    console.log(req.body.favorite);
    res.render('index');
});

module.exports = router;
