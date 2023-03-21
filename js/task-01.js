const categoryItems = document.querySelectorAll('.item');
console.log(`Number of categories: ${categoryItems.length}`);

categoryItems.forEach(item => {
    const category = item.querySelector('h2').textContent;
    const elements = item.querySelectorAll('ul > li').length
    console.log(`Category: ${category}\nElemehts: ${elements}`)
})
