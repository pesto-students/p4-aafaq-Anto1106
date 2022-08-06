function createIncrement() {
  let count = 0;
  function increment() {
    count++;
  }
  let message = `Count is ${count}`;
  function log() {
    console.log(message);
  }
  return [increment, log];
}
const [increment, log] = createIncrement();
increment();
increment();
increment();
//! The Ouptput Of the code will be Count is 0
log();
//!The count is getting updated but the message is not getting updated when increment function is beign called and when createIncrement
//! Function is invoked the count value is 0 and message is already stored with that value and not updated again.
