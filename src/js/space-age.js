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
     
  }

  venus() {
    return Math.round(this.age / 0.62);
  }

  mars() {
    return Math.round(this.age / 1.88);
  }

  jupiter() {
    return Math.round(this.age / 11.86);
  }
};