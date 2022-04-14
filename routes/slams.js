const express = require('express');
const router = express.Router();
const slamsCtrl = require('../controllers/slams');
const commentsCtrl = require('../controllers/comments')
// get slams listening

router.get('/', slamsCtrl.index); 
router.post('/', slamsCtrl.create);
// get new page for add slam posts
router.get('/new', slamsCtrl.new);

router.get('/:id', slamsCtrl.show);
router.post('/slams/:id/comments', commentsCtrl.addcomment);
router.delete('/slams/:id', slamsCtrl.deleteSlam);

module.exports = router;