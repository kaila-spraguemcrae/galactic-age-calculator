export default class SpaceAge {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  mercury() {
    return Math.round(this.age / 0.24);
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