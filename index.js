var recipes = {};

function updateObjectWithKeyAndValue(recipes, key, value) {
  recipes = {eggs: '3'};
  recipes[key] = value;
  return recipes;
}