function nameMenuItem(name) {
  return 'Delicious ' + name;
}

function createMenuItem() {
  var createMenuItem =  {
    name: 'Delicious French Toast',
    price: 10.99,
    type: 'breakfast'
  }
  return createMenuItem
}

function addIngredients(ingredient, ingredients) {


  for (var i = 0; i < ingredients.length; i++) {
    if (ingredient === ingredients[i]) {
      return;
   
    }
  }
  ingredients.push(ingredient)
  return ingredients
}

function formatPrice(initialPrice) {
  return `$${initialPrice}`

}

function decreasePrice(price) {
  let newPrice = price * 0.9
  return newPrice;
}

function createRecipe(title, ingredients, menuItemType) {
  var createRecipe =  {
    title: title,
    ingredients: ingredients,
    type: menuItemType
  }
  return createRecipe
}

//test for different price not working, not sure why as it should
module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}


