const express = require('express');
const router = express.Router();
const verify = require('../controllers/Verify.token');

const RecommendControllers = require('../controllers/Recommend.controllers');

router.post('/recommendation', verify, RecommendControllers.addRecommend);

router.post('/recommendation/create', RecommendControllers.createRecommend);

module.exports = router;
