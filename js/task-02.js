const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const itemPotatoesEl = document.createElement('li');
itemPotatoesEl.textContent = ingredients[0];
itemPotatoesEl.classList.toggle('item');
const itemMushroomsEl = document.createElement('li');
itemMushroomsEl.textContent = ingredients[1];
itemMushroomsEl.classList.toggle('item');
const itemGarlicEl = document.createElement('li');
itemGarlicEl.textContent = ingredients[2];
itemGarlicEl.classList.toggle('item');
const itemTomatosEl = document.createElement('li');
itemTomatosEl.textContent = ingredients[3];
itemTomatosEl.classList.toggle('item');
const itemHerbsEl = document.createElement('li');
itemHerbsEl.textContent = ingredients[4];
itemHerbsEl.classList.toggle('item');
const itemCondimentsEl = document.createElement('li');
itemCondimentsEl.textContent = ingredients[5];
itemCondimentsEl.classList.toggle('item');

const ingredientsEl = document.querySelector('#ingredients')
ingredientsEl.append(itemPotatoesEl, itemMushroomsEl, itemGarlicEl, itemTomatosEl, itemHerbsEl, itemCondimentsEl)