export default class SpaceAge {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  mercury() {
    return Math.round(this.age / 0.24);
  }

  venus() {
    let result = this.age / 0.62;
    return Math.round(result);
  }

  mars() {
    let result = this.age / 1.88;
    return Math.round(result);
  }

  jupiter() {
    let result = this.age / 11.86;
    return Math.round(result);
  }
};