function createStack() {
  //! Changing varible from items[] to let
  //! items[] as items[] without any keyword will be global
  let items = [];
  return {
    push(item) {
      items.push(item);
    },
    pop() {
      return items.pop();
    },
  };
}

const stack = createStack();
stack.push(10);
stack.push(5);
stack.pop();
console.log(stack.items);
