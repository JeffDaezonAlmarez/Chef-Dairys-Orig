const Recipe = require('../models/recipe.model');
const Joi = require('joi');

exports.addRecipe = async (req, res) => {
  try {
    const validationSchema = Joi.object({
      recipeName: Joi.string().required(),
      ingredients: Joi.array().required(),
      image: Joi.string().required(),
      cookingDirection: Joi.array().required(),
    });
    const { error } = validationSchema.validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const recipe = new Recipe({
      recipeName: req.body.recipeName,
      ingredients: req.body.ingredients,
      image: req.body.image,
      cookingDirection: req.body.cookingDirection,
    });
    const saverecipe = await recipe.save();

    return res.status(200).send(saverecipe);
  } catch (err) {
    return res.status(400).send(err.message);
  }
};

exports.updateRecipe = async (req, res) => {
  try {
    const updateRecipe = await Recipe.updateOne(
      { _id: req.params.Recipe_id },
      { $set: { recipeName: req.body.recipeName } }
    );
    return res
      .status(200)
      .json({ data: updateRecipe, message: 'Recipe Updated', status: 200 });
  } catch (err) {
    return res.status(400).json({ message: err.message, status: 400 });
  }
};
