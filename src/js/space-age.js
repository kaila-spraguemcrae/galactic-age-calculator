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
    
  }

  mars() {
    return Math.round(this.age / 1.88);
  }

  jupiter() {
    return Math.round(this.age / 11.86);
  }
};