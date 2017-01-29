var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'IoT Lab', message: 'una pagina que pronto estara muy bonita'});
});

//Para probar pug
router.get('/pug', function (req, res) {
  res.render('index', { title: 'Pug', message: 'Pug en lugar de jade because reasons'})
})

module.exports = router;
