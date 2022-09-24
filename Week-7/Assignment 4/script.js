isValid = (s) => {
  //! Create a stack
  let stck = [];
  //! Loop through each element in the string
  for (i = 0; i < s.length; i++) {
    let char = stck[stck.length - 1];
    //! If you encounter a starting bracket, push it onto the stack
    if (s[i] == '(' || s[i] == '{' || s[i] == '[') {
      stck.push(s[i]);
      //! Pop the opening bracket off the stack,
      //! if there is a corresponding closing bracket in the string
    } else if (
      (char == '(' && s[i] == ')') ||
      (char == '{' && s[i] == '}') ||
      (char == '[' && s[i])
    ) {
      stck.pop();
    } else return false;
  }
  //! Check empty stack
  return stck.length ? false : true;
};

console.log('{([])} is valid ' + isValid('{([])}'));
console.log('([] is valid ' + isValid('([]'));
/*
  Time Complexity: O(n)
  Space Complexity : O(1)
*/
