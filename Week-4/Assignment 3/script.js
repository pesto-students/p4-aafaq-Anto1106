const fibonacciSeries = (number) => {
  return {
    [Symbol.iterator]: () => {
      let currentNumber = 0;
      let nextNumber = 1;
      let sum;
      let currentIndex = 0;
      return {
        next: () => {
          if (number > 0) {
            if (currentIndex < number) {
              sum = currentNumber + nextNumber;
              currentNumber = nextNumber;
              nextNumber = sum;
              currentIndex++;
              return { value: currentNumber, done: false };
            } else {
              return { done: true };
            }
          } else {
            if (currentIndex < 1) {
              currentIndex++;
              return { value: 0, done: false };
            } else {
              return { done: true };
            }
          }
        },
      };
    },
  };
};

console.log([...fibonacciSeries(10)]);
