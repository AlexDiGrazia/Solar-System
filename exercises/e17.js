export function minBy(array, cb) {
  let min = array[0];
  for(let item of array) {
    if(cb(item) < cb(min)) {
      min = item;
    } 
  }
    return min;
}

export function maxBy(array, cb) {
  let max = array[0];
  for(let item of array) {
    if(cb(item) > cb(max)) {
      max = item;
    } 
  }
    return max;
}
