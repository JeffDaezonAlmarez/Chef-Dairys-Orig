const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const RecipeSchema = new Schema({
  recipeName: String,
  ingredients: [String],
  image: String,
  cookingDirection: [String],
});
const Recipe = mongoose.model('Recipe', RecipeSchema);
module.exports = Recipe;
