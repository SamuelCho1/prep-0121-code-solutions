var person = {
  firstName: 'Samuel',
  lastName: 'Cho',
  hobby: 'games'
};

console.log(person);

var fullName = person.firstName + ' ' + person.lastName;
console.log("The person's name is:", fullName);

person.job = 'Student';
console.log("The person's current job is:", person.job);

person.previousJob = 'Marketing';
console.log("The person's previous job is:", person.previousJob);

console.log('The complete person object:', person);

var myCar = {
  make: 'Honda',
  model: 'Accord',
  year: '2010'
};

console.log('Car information', myCar);

myCar['owner'] = fullName;

var sentence = 'My name is ' + myCar['owner'] + ' and I drive a ' +
myCar['year'] + ' ' + myCar['make'] + ' ' + myCar['model'] + '.';

console.log(sentence);

myCar['color'] = 'gold';
console.log('My full car info:', myCar);
