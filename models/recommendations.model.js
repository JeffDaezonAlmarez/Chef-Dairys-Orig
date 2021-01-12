const { array } = require('joi');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RecommendationsSchema = new Schema({
  label: String,
  image: String,
  rate: Number,
  ingredientLines: [String],
});
const Recommendations = mongoose.model(
  'Recommendations',
  RecommendationsSchema
);
module.exports = Recommendations;
