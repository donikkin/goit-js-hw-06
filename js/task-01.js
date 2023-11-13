const categoriesList = document.querySelector('#categories');
const categoryItems = document.querySelectorAll('.item');

console.log(`Number of categories: ${categoryItems.length}`);

Array.from(categoryItems).forEach(category => {
  const title = category.firstElementChild.textContent;
  const elements = category.lastElementChild.children.length;
  console.log(`Category: ${title}`);
  console.log(`Elements: ${elements}`);
})