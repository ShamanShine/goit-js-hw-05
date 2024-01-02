const getTotalBalanceByGender = (users, gender) => {
  return users
    .filter(user => user.gender === gender)
    // фильтруем из массива обьектов то , что нам нужно. яб ещё изменил второй параметр gender, чтоб не путаться в коде
    .reduce((totalBalance, user) => totalBalance + user.balance, 0);
  // назначаем аккумулятор и начальную точку от чего стартовать и сумировать после каждого прохода 
  // используем цепочки методов
};

const allPeople = [
  {
    name: "Moore Hensley",
    gender: "male",
    balance: 2811
  },
  {
    name: "Sharlene Bush",
    gender: "female",
    balance: 3821
  },
  {
    name: "Ross Vazquez",
    gender: "male",
    balance: 3793
  },
  {
    name: "Elma Head",
    gender: "female",
    balance: 2278
  },
  {
    name: "Carey Barr",
    gender: "male",
    balance: 3951
  },
  {
    name: "Blackburn Dotson",
    gender: "male",
    balance: 1498
  },
  {
    name: "Sheree Anthony",
    gender: "female",
    balance: 2764
  }
];

console.log(getTotalBalanceByGender(allPeople, "male")); // 12053

console.log(getTotalBalanceByGender(allPeople, "female")); // 8863
