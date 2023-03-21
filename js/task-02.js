const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const list = document.querySelector('ul#ingredients');
const liArray = [];

ingredients.map(ingredient => {
  const getListElem = document.createElement('li');
  getListElem.classList.add("item");
  getListElem.textContent = ingredient;
  liArray.push(getListElem);
})

list.append(...liArray);
console.log(list);


