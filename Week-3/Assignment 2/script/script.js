const person = {
  fullName: function () {
    return this.firstName + ' ' + this.lastName;
  },
  professional: function () {
    return this.profession;
  },
};

const person1 = {
  firstName: 'Antony',
  lastName: 'Mathew',
  profession: 'Developer',
};

const person2 = {
  firstName: 'Binoy',
  lastName: 'George',
  profession: 'Developer',
};

const person3 = {
  firstName: 'Jithin',
  lastName: 'Thomas',
  profession: 'Banker',
};

function printNameProfession(content) {
  document.getElementById('output').innerHTML = content;
}

function onCallClick() {
  let fullName = person.fullName.call(person1);
  let profession = person.professional.call(person1);
  let content = `Hello My Name is ${fullName} I am ${profession}`;
  printNameProfession(content);
}

function onAllClick() {
  let fullName = person.fullName.apply(person2);
  let profession = person.professional.apply(person2);
  let content = `Hello My Name is ${fullName} I am ${profession}`;
  printNameProfession(content);
}

function onBindClick() {
  let fullName = person.fullName.bind(person3);
  let profession = person.professional.bind(person3);
  let content = `Hello My Name is ${fullName()} and I am ${profession()}`;
  printNameProfession(content);
}
