import SpaceAge from './../src/js/space-age.js'; 

describe( 'SpaceAge', () => {

  let spaceAge;

  beforeEach(() => {
    spaceAge = new SpaceAge("Kaila", 28, 80);
    spaceAge.convertAge();
    spaceAge.lifeExpectancy();
  });

  test('Should create and instance of SpaceAge', () => {
    expect(spaceAge.name).toEqual("Kaila");
    expect(spaceAge.age).toEqual(28);
    expect(spaceAge.life).toEqual(80);
  });

  test('Should calculate age into Mercury years', () => {
    expect(spaceAge.ageArr[0]).toEqual(117);
  });

  test('Should calculate age into Venus years', () => {
    expect(spaceAge.ageArr[1]).toEqual(45);
  });

  test('should calculate age into Mars years', () => {
    expect(spaceAge.ageArr[2]).toEqual(15);
  }); 

  test('Should calculate age into Jupiter years', () => {
    expect(spaceAge.ageArr[3]).toEqual(2);
  });

  test('Should calculate remaining years on Mercury according to life expectancy', () => {
    expect(spaceAge.lifeArr[0]).toEqual(216);
  });

  test('Should calculate how many years user has left to live on Venus', () => {
    expect(spaceAge.lifeArr[1]).toEqual(84);
  });

  test('Should calculate how many years user has left to live on Mars', () => {
      expect(spaceAge.lifeArr[2]).toEqual(28);
  });

  test('Should calculate how many years user has left to live on Jupiter', () => {
    expect(spaceAge.lifeArr[3]).toEqual(5);
  });

  test('Should calculate how many years user has left to live on Mercury', () =>{
    let oldSpaceAge = new SpaceAge("old Kaila", 85, 80);
    oldSpaceAge.convertAge();
    oldSpaceAge.lifeExpectancy();
    expect(oldSpaceAge.lifeArr[0]).toEqual(21);
  });

  test('Should calculate how many years user has lived over the life expectancy on Venus', () => {
    let oldSpaceAge = new SpaceAge("old Kaila", 85, 80);
    oldSpaceAge.convertAge();
    oldSpaceAge.lifeExpectancy();
    expect(oldSpaceAge.lifeArr[1]).toEqual(8);
  });

  test('Should calculate how many years user has left to live on Mars', () => {
    let oldSpaceAge = new SpaceAge("old Kaila", 85, 80);
    oldSpaceAge.convertAge();
    oldSpaceAge.lifeExpectancy();
    expect(oldSpaceAge.lifeArr[2].toEqual(2));
  })
});