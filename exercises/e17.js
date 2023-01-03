export function minBy(array, cb) {
  const numbers = array.map(cb);
  let min = numbers[0];
  for (let item of numbers) {
    if (item < min) {
      min = item;
    }
  }
  return array.find((person) => person.age === min);
}

export function maxBy(array, cb) {
  const numbers = array.map(cb);
  let max = numbers[0];
  for (let item of numbers) {
    if (item > max) {
      max = item;
    }
  }
  return array.find((person) => person.age === max);
}
