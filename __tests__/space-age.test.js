import SpaceAge from './../src/js/space-age.js'; 

describe( 'SpaceAge', () => {

  let spaceAge;

  beforeEach(() => {
    spaceAge = new SpaceAge("Kaila", 28, 80);
  });

  test('should create and instance of SpaceAge', () => {
    expect(spaceAge.name).toEqual("Kaila");
    expect(spaceAge.age).toEqual(28);
    expect(spaceAge.life).toEqual(80);
  });

  test('should calculate age into Mercury years', () => {
    expect(spaceAge.mercury()).toEqual(117);
  });

  test('should calculate age into Venus years', () => {
    expect(spaceAge.venus()).toEqual(45);
  });

  test('should calculate age into Mars years', () => {
    expect(spaceAge.mars()).toEqual(15);
  }); 

  test('should calculate age into Jupiter years', () => {
    expect(spaceAge.jupiter()).toEqual(2);
  });
});