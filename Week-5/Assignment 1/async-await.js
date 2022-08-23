/*
    Using Async/Await and Generators, 
    create separate functions and achieve t
    he same functionality
*/

async function getDataAsync() {
  console.log('calling');
  const result = await resolveAfter2Seconds();
  console.log(result);
  // expected output: "resolved"
}
// Creating Async Function with setting timeout of 2 Sec and using promise
function resolveAfter2Seconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('resolved');
    }, 2000);
  });
}

getDataAsync();
