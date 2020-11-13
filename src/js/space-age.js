export default class SpaceAge {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  mercury() {
    let result = this.age / 0.24;
    return Math.round(result);
  }

  venus() {
    let result = this.age / 0.62;
    return Math.round(result);
  }

  mars() {
    
  }
};