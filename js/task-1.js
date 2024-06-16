let lists = document.querySelectorAll('#categories .item');
let listTitles = document.querySelectorAll('#categories .item h2');
let listItems = document.querySelectorAll('#categories .item ul');

console.log(`Number of categories: ${lists.length}`);

lists.forEach((list, ind) => {
  console.log(`Category: ${listTitles[ind].textContent}`);
  console.log(`Elements: ${listItems[ind].children.length}`);
});
