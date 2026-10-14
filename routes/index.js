var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/main_page', function (req, res, next) {
    res.render('brp', {
        title: "Description",
        picture: "images/template.png",
        desc: "Тут должно быть описание, но оно будет создано позже"
    });
});

router.get('/download_page', function (req, res, next) {
    res.render('brp', {
        title: "Download",
        picture: "images/icon.png",
        desc: "Тут должно быть описание, но оно будет создано позже"
    });
});



module.exports = router;
