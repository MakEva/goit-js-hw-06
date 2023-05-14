const categoriesList = document.querySelector("ul#categories"); 
const categoriesItems = document.querySelectorAll("li.item");

const numbersOfCategory = categoriesItems.length;
console.log(`Number of categories: ${numbersOfCategory}`);

categoriesItems.forEach(item => {
    const nameOfCategories = item.querySelector("h2");
    const categoriesTitle = nameOfCategories.textContent;
    console.log(`Category: ${categoriesTitle}`);

    const element = item.querySelectorAll("li");
    const numberOfElement = element.length;
    console.log(`Elements: ${numberOfElement}`);
    
});

