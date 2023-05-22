const categoriesList = document.getElementById("categories"); 
const categoriesItems = categoriesList.children;

const numbersOfCategory = categoriesItems.length;
console.log(`Number of categories: ${numbersOfCategory}`);

[...categoriesItems].forEach(item => {
    const categoryTitle = item.firstElementChild.textContent;
    console.log(`Category: ${categoryTitle}`);
    
    const categoryElements = item.getElementsByTagName('li').length;
    console.log(`Elements: ${categoryElements}`);

    
});

