function memoize(fn) {
  const cache = new Map();
  return function (...args) {
    const key = args.toString();
    if (cache.has(key)) {
      return cache.get(key);
    }
    cache.set(key, fn(...args));
    return cache.get(key);
  };
}

function add(a = 0, b = 0) {
  return a + b;
}

const memoizeAdd = memoize(add);

console.time();
let result = memoizeAdd(100, 100);
console.timeEnd();
console.log('Result is ' + result);

console.time();
result = memoizeAdd(100);
console.timeEnd();
console.log('Result is ' + result);

console.time();
result = memoizeAdd(100, 200);
console.timeEnd();
console.log('Result is ' + result);

console.time();
result = memoizeAdd(100, 200);
console.timeEnd();
console.log('Result is ' + result);
