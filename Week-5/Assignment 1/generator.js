/*
    Using Async/Await and Generators, 
    create separate functions and achieve t
    he same functionality
*/
function* generator(i) {
  yield i;
  yield i + 10;
}

const gen = generator(10);

console.log(gen.next().value);
//! output: 10
console.log(gen.next().value);
//!output: 20
