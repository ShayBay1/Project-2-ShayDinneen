const express = require('express');
const router = express.Router();
const slamsCtrl = require('../controllers/slams');

// get slams listening
router.get('/', function(req, res, next){
    res.send('respond with the resource');
})
// get new page for add slam posts
router.get('/new', slamsCtrl.new);
// POST command for /slams
router.post('/', slamsCtrl.create);
// now get the index page that our function in controllers is res.rendering
router.get('/', slamsCtrl.index);
router.get('/:id', slamsCtrl.show);

module.exports = router;