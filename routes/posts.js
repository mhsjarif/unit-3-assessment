var express = require('express');
var router = express.Router();
var postsCtrl = require('../controllers/postController');

router.get('/posts', postsCtrl.getPosts);


module.exports = router;