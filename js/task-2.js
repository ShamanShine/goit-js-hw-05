function calcAverageCalories(days) {
  if (!days || !Array.isArray(days) || days.length === 0) {
    // Проверяем массив "days" и то, что он не пустой. Если что-то не так, то выдаем сообщение.
    return 'Check the data.';
  }

  // Нужно создать переменную, чтобы хранить общее количество калорий и "запустить" с 0
  let totalCalories = 0;
  // Затем цикл, который перебирает объекты в "days" и ищет свойство calories; если это число - добавляется к totalCalories
  for (const day of days) {
    if (day.calories !== undefined && typeof day.calories === 'number') {
      // Проверяем, что 'калории' являются числом; если да, добавляем к общему количеству, если нет - выводим предупреждение
      totalCalories += day.calories;
    } else {
      console.log('Wrong data');
    }
  }
  if (totalCalories === 0) {
    return 'No values to calculate daily average.';
    // Если общее количество калорий равно нулю, то нет данных для расчета
  }
  // затем расчитываем среднее количество, разделив общее количество на количество дней
  const averageCalories = totalCalories / days.length;
  // результат
  return `Average daily calories: ${averageCalories}`;
}

console.log(
  calcAverageCalories([
    { day: 'monday', calories: 3010 },
    { day: 'tuesday', calories: 3200 },
    { day: 'wednesday', calories: 3120 },
    { day: 'thursday', calories: 2900 },
    { day: 'friday', calories: 3450 },
    { day: 'saturday', calories: 3280 },
    { day: 'sunday', calories: 3300 },
  ]),
); // 3180

console.log(
  calcAverageCalories([
    { day: 'monday', calories: 2040 },
    { day: 'tuesday', calories: 2270 },
    { day: 'wednesday', calories: 2420 },
    { day: 'thursday', calories: 1900 },
    { day: 'friday', calories: 2370 },
    { day: 'saturday', calories: 2280 },
    { day: 'sunday', calories: 2610 },
  ]),
); // 2270

console.log(calcAverageCalories([])); // 0
