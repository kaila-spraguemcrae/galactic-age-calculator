export default class SpaceAge {
  constructor(name, age, life) {
    this.name = name;
    this.age = age;
    this.life = life;
  }

  mercury() {
    return Math.round(this.age / 0.24);
  }

  mercuryLife(obj) {
    let result = Math.round(this.life / 0.24);
    return result - obj.mercury(); 
  }

  venus() {
    return Math.round(this.age / 0.62);
  }

  venusLife(obj) {
    let result = Math.round(this.life / 0.62);
    return result - obj.venus();
  }

  mars() {
    return Math.round(this.age / 1.88);
  }

  marsLife(obj) {
    let result = Math.round(this.life / 1.88);
    return result - obj.mars();
  }

  jupiter() {
    return Math.round(this.age / 11.86);
  }

  jupiterLife(obj) {
    let result = Math.round(this.life / 11.86);
    return result - obj.jupiter();
  }
};