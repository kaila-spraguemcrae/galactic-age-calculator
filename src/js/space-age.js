export default class SpaceAge {
  constructor(name, age, life) {
    this.name = name;
    this.age = age;
    this.life = life;
    this.ageArr = [];
  }

  convertAge(){
    let arr = [0.24, 0.62, 1.88, 11.86] 
    for(let i=0; i < arr.length; i++) {
      this.ageArr.push(Math.round(this.age / arr[i]));
    }
  }

  mercuryLife() {
    let result = Math.round(this.life / 0.24);
    return result - this.ageArr[0]; 
  }

  venusLife() {
    let result = Math.round(this.life / 0.62);
    return result - this.ageArr[1];
  }

  marsLife() {
    let result = Math.round(this.life / 1.88);
    return result - this.ageArr[2];
  }

  jupiterLife() {
    let result = Math.round(this.life / 11.86);
    return result - this.ageArr[3];
  }
};