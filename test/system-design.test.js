const ParkingSystem = require("../system-design");
const { test, expect } = global;

test("outputs the correct sequence with no cars and a [0, 0, 0] slot configuration", () => {
  let slots = [0, 0, 0];
  let carsToAdd = [];

  let parkingSystem = new ParkingSystem(...slots);
  let answer = [];
  for (let i = 0; i < carsToAdd.length; i++) {
    let car = carsToAdd[i];
    let result = parkingSystem.addCar(car);
    answer.push(result);
  }
  expect(answer).toEqual([]);
});

test("outputs the correct sequence with 4 cars and a [1, 1, 0] slot configuration", () => {
  let slots = [1, 1, 0];
  let carsToAdd = [1, 2, 3, 1];

  let parkingSystem = new ParkingSystem(...slots);
  let answer = [];
  for (let i = 0; i < carsToAdd.length; i++) {
    let car = carsToAdd[i];
    let result = parkingSystem.addCar(car);
    answer.push(result);
  }
  expect(answer).toEqual([true, true, false, false]);
});

test("outputs the correct sequence with 8 cars and a [3, 0, 3] slot configuration", () => {
  let slots = [3, 0, 3];
  let carsToAdd = [1, 1, 1, 1, 2, 2, 3, 3];

  let parkingSystem = new ParkingSystem(...slots);
  let answer = [];
  for (let i = 0; i < carsToAdd.length; i++) {
    let car = carsToAdd[i];
    let result = parkingSystem.addCar(car);
    answer.push(result);
  }
  expect(answer).toEqual([true, true, true, false, false, false, true, true]);
});

test("outputs the correct sequence with 10 cars and a [4, 3, 3] slot configuration", () => {
  let slots = [15, 15, 15];
  let carsToAdd = [1, 2, 3, 1, 2, 3, 1, 2, 3, 1];

  let parkingSystem = new ParkingSystem(...slots);
  let answer = [];
  for (let i = 0; i < carsToAdd.length; i++) {
    let car = carsToAdd[i];
    let result = parkingSystem.addCar(car);
    answer.push(result);
  }
  expect(answer).toEqual([
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
  ]);
});

test("outputs the correct sequence with 12 cars and a [0, 12, 0] slot configuration", () => {
  let slots = [0, 12, 0];
  let carsToAdd = [1, 1, 1, 1, 3, 2, 3, 2, 2, 3, 2, 2];

  let parkingSystem = new ParkingSystem(...slots);
  let answer = [];
  for (let i = 0; i < carsToAdd.length; i++) {
    let car = carsToAdd[i];
    let result = parkingSystem.addCar(car);
    answer.push(result);
  }
  expect(answer).toEqual([
    false,
    false,
    false,
    false,
    false,
    true,
    false,
    true,
    true,
    false,
    true,
    true,
  ]);
});

test("outputs the correct sequence with 3 cars and a [1, 0, 0] slot configuration", () => {
  let slots = [1, 0, 0];
  let carsToAdd = [1, 1, 1];

  let parkingSystem = new ParkingSystem(...slots);
  let answer = [];
  for (let i = 0; i < carsToAdd.length; i++) {
    let car = carsToAdd[i];
    let result = parkingSystem.addCar(car);
    answer.push(result);
  }
  expect(answer).toEqual([true, false, false]);
});

test("outputs the correct sequence with 11 cars and a [2, 5, 1] slot configuration", () => {
  let slots = [2, 5, 1];
  let carsToAdd = [1, 1, 1, 2, 2, 2, 2, 2, 2, 3, 3];

  let parkingSystem = new ParkingSystem(...slots);
  let answer = [];
  for (let i = 0; i < carsToAdd.length; i++) {
    let car = carsToAdd[i];
    let result = parkingSystem.addCar(car);
    answer.push(result);
  }
  expect(answer).toEqual([
    true,
    true,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    true,
    false,
  ]);
});

test("outputs the correct sequence with 1 car and a [0, 0, 0] slot configuration", () => {
  let slots = [0, 0, 0];
  let carsToAdd = [1];

  let parkingSystem = new ParkingSystem(...slots);
  let answer = [];
  for (let i = 0; i < carsToAdd.length; i++) {
    let car = carsToAdd[i];
    let result = parkingSystem.addCar(car);
    answer.push(result);
  }
  expect(answer).toEqual([false]);
});

test("outputs the correct sequence with 21 cars and a [7,7,7] slot configuration", () => {
  let slots = [7, 7, 7];
  let carsToAdd = [
    1,
    3,
    2,
    1,
    1,
    2,
    3,
    2,
    1,
    2,
    3,
    2,
    1,
    2,
    2,
    1,
    2,
    2,
    3,
    3,
    3,
  ];

  let parkingSystem = new ParkingSystem(...slots);
  let answer = [];
  for (let i = 0; i < carsToAdd.length; i++) {
    let car = carsToAdd[i];
    let result = parkingSystem.addCar(car);
    answer.push(result);
  }
  expect(answer).toEqual([
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    false,
    false,
    true,
    true,
    true,
  ]);
});
