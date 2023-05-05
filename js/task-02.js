const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsEl = document.querySelector('#ingredients')
const createListIngredients = ingredients.map((element) => {
  return `<li class"item" >${element}</li>`
}).join('')

 ingredientsEl.insertAdjacentHTML("afterbegin", createListIngredients) 






