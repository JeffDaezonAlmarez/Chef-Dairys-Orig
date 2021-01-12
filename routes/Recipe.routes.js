const express = require('express');

const router = express.Router();
const verify = require('../controllers/Verify.token');

const RecipeControllers = require('../controllers/Recipe.controllers');

router.post('/recipe', verify, RecipeControllers.addRecipe);

module.exports = router;
