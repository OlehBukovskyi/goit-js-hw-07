const categories = document.querySelectorAll(".item");
console.log(`Number of categories: ${categories.length}`);

// Ітеруємо по кожній категорії
categories.forEach(category => {
    // Отримуємо текст заголовка
    const title = category.querySelector('h2').textContent;
    
    // Отримуємо кількість елементів у категорії
    const itemsCount = category.querySelectorAll('ul li').length;
  
    // Виводимо назву категорії та кількість елементів
    console.log(`Category: ${title}`);
    console.log(`Elements: ${itemsCount}`);
  });