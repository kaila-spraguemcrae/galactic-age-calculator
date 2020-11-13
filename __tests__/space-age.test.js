import SpaceAge from './../src/js/space-age.js'; 

describe( 'SpaceAge', () => {

  let spaceAge;

  beforeEach(() => {
    spaceAge = new SpaceAge("Kaila", 28, 80);
    spaceAge.convertAge();
  });

  test('Should create and instance of SpaceAge', () => {
    expect(spaceAge.name).toEqual("Kaila");
    expect(spaceAge.age).toEqual(28);
    expect(spaceAge.life).toEqual(80);
  });

  test('Should calculate age into Mercury years', () => {
    expect(spaceAge.newArr[0]).toEqual(117);
  });

  test('Should calculate age into Venus years', () => {
    expect(spaceAge.newArr[1]).toEqual(45);
  });

  test('should calculate age into Mars years', () => {
    expect(spaceAge.newArr[2]).toEqual(15);
  }); 

  test('Should calculate age into Jupiter years', () => {
    expect(spaceAge.newArr[3]).toEqual(2);
  });

  test('Should calculate remaining years on Mercury according to life expectancy', () => {
    expect(spaceAge.mercuryLife()).toEqual(216);
  });

  test('Should calculate how many years user has left to live on Venus', () => {
    expect(spaceAge.venusLife()).toEqual(84);
  });

  test('Should calculate how many years user has left to live on Mars', () => {
      expect(spaceAge.marsLife()).toEqual(28);
  });

  test('Should calculate how many years user has left to live on Jupiter', () => {
    expect(spaceAge.jupiterLife()).toEqual(5);
  });
});