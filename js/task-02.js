const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const list = document.querySelector("ul#ingredients");

ingredients.forEach(ingredient => {

  const items = document.createElement("li");
  console.log(items);

  items.textContent = ingredient;

  items.classList.add("item");

  list.append(items);
});


