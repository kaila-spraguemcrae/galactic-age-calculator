import SpaceAge from './../src/js/space-age.js'; 

describe( 'SpaceAge', () => {

  let spaceAge;

  beforeEach(() => {
    spaceAge = new SpaceAge("Kaila", 28, 80);
  });

  test('Should create and instance of SpaceAge', () => {
    expect(spaceAge.name).toEqual("Kaila");
    expect(spaceAge.age).toEqual(28);
    expect(spaceAge.life).toEqual(80);
  });

  test('Should calculate age into Mercury years', () => {
    expect(spaceAge.mercury()).toEqual(117);
  });

  test('Should calculate age into Venus years', () => {
    expect(spaceAge.venus()).toEqual(45);
  });

  test('should calculate age into Mars years', () => {
    expect(spaceAge.mars()).toEqual(15);
  }); 

  test('Should calculate age into Jupiter years', () => {
    expect(spaceAge.jupiter()).toEqual(2);
  });

  test('Should calculate remaining years on Mercury according to life expectancy', () => {
    expect(spaceAge.mercuryLife(spaceAge)).toEqual(216);
  });

  test('Should calculate how many years user has left to live on Venus', () => {
    expect(spaceAge.venusLife(spaceAge)).toEqual(84);
  });

  test('Should calculate how many years user has left to live on Mars', () => {
      expect(spaceAge.marsLife(spaceAge)).toEqual(28);
  });

  test('Should calculate how many years user has left to live on Jupiter', () => {
    expect(spaceAge.marsLife(spaceAge)).toEqual(5);
  });
});