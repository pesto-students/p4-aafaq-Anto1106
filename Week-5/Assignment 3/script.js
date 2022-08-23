const sampleArrayOne = [1, 2, -1, 4];
const sampleArrayTwo = [1, 2, 3, 4, 10, 23, 2];

const hasDuplicate = (array) => {
  if (array.length != new Set(array).size) {
    return true;
  } else {
    return false;
  }
};

console.log(hasDuplicate(sampleArrayOne)); //! Output false
console.log(hasDuplicate(sampleArrayTwo)); //! Output true
