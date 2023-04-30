const categoriesEl = document.querySelector('#categories');
const itemEl = document.querySelectorAll('.item');
const titleAnimalsEl = itemEl[0].firstElementChild;
const elementsAnimalEl = itemEl[0].lastElementChild;
const titleProductEl = itemEl[1].firstElementChild;
const elementsProductEl = itemEl[1].lastElementChild;
const titleTechnologiesEl = itemEl[2].firstElementChild;
const elementsTechnologiesEl = itemEl[2].lastElementChild;


const numberOfCategories = ([...arry]) => {
    let total = [];
  arry.forEach((element, index) => {
   total+= index
    })
   return total.length
      
};

console.log(`Number of categories: ${numberOfCategories(categoriesEl.children)}`)
console.log(`Category: ${titleAnimalsEl.textContent}`)
console.log(`Elements: ${numberOfCategories(elementsAnimalEl.children)}`)
console.log(`Category: ${titleProductEl.textContent}`)
console.log(`Elements: ${numberOfCategories(elementsProductEl.children)}`)
console.log(`Category: ${titleTechnologiesEl.textContent}`)
console.log(`Elements: ${numberOfCategories(elementsTechnologiesEl.children)}`)