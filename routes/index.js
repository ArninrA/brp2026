var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/main_page', function (req, res, next) {
    res.send("<h1>Main page</h1>")
});

router.get('/download_page', function (req, res, next) {
    res.send("<h1>Download page</h1>")
});


module.exports = router;
