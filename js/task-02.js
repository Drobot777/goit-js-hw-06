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
  const creatList = document.createElement('li')
  creatList.textContent = `${element}`
   return creatList
})

ingredientsEl.append(...createListIngredients)






