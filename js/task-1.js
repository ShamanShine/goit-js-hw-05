function isEnoughCapacity(products, containerSize) {
  let totalProducts = 0;
  // нужно перебрать объект посчитать количество товаров

  for (let key in products) {
    totalProducts += products[key];
  }
  return totalProducts <= containerSize; // Сравниваем количество товаров с размером контейнера и возвращаем результат сравнения
}

console.table(isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)); // true
console.table(isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)); // false
console.table(isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)); // true
console.table(isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)); // false
