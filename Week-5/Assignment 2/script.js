const isVowel = (alphabet) => {
  return 'aeiou'.includes(alphabet);
};

const vowelCount = (str) => {
  const dataMap = new Map();
  for (let char of str) {
    let lowerCharacter = char.toLowerCase();
    if (isVowel(lowerCharacter)) {
      if (dataMap.has(lowerCharacter)) {
        dataMap.set(lowerCharacter, dataMap.get(lowerCharacter) + 1);
      } else {
        dataMap.set(lowerCharacter, 1);
      }
    }
  }
  return dataMap;
};

let data = 'Antony Mathew Is My Name';
console.log(vowelCount(data));
