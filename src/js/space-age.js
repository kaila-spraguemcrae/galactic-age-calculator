export default class SpaceAge {
  constructor(name, age, life) {
    this.name = name;
    this.age = age;
    this.life = life;
    this.ageArr = [];
    this.lifeArr = [];
  }

  convertAge(){
    let arr = [0.24, 0.62, 1.88, 11.86] 
    for(let i=0; i < arr.length; i++) {
      this.ageArr.push(Math.round(this.age / arr[i]));
    }
  }

    lifeExpectancy(){
    let arr = [0.24, 0.62, 1.88, 11.86] 
    arr.forEach((num1, i) => {
      let result = Math.round(this.life / num1);
      if (result > this.ageArr[i]) {
        this.lifeArr.push(result - this.ageArr[i]);
      } 
      this.lifeArr.push(this.ageArr[i] - result);
    });
  }

//   mercuryLife() {
//     let result = Math.round(this.life / 0.24);
//     if (this.ageArr[0] <=  result) {
//       return result - this.ageArr[0]; 
//     }  
//     return this.ageArr[0] - result;
//   }

//   venusLife() {
//     let result = Math.round(this.life / 0.62);
//     return result - this.ageArr[1];
//   }

//   marsLife() {
//     let result = Math.round(this.life / 1.88);
//     return result - this.ageArr[2];
//   }

//   jupiterLife() {
//     let result = Math.round(this.life / 11.86);
//     return result - this.ageArr[3];
//   }
};