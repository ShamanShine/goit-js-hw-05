const profile = {
  username: 'Jacob',
  playTime: 300,

  changeUsername(newName) {
    this.username = newName;
    // метод changeUsername принимает новое имя и меняет знчение свойства username
  },
  updatePlayTime(hours) {
    this.playTime += hours;
    // метод updatePlayTime принимает к-во часов и увеличивает playTime
  },
  getInfo() {
    return `${this.username} has ${this.playTime} active hours!`;
    // метод getInfo возвращает инфу о имени и к-во часов игры
  },
};

console.log(profile.getInfo()); // "Jacob has 300 active hours!"

profile.changeUsername('Marco');
console.log(profile.getInfo()); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"
