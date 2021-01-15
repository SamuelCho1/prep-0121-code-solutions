// addTwoNumbers Exercise
function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

var addTwoNumbersResults = addTwoNumbers(4, 4);

console.log('addTwoNumbers Exercise:', addTwoNumbersResults);

// convertHoursToMinutes Exercise
function convertHoursToMinutes(number) {
  return number * 60;
}

var convertHoursToMinutesResults = convertHoursToMinutes(2);

console.log('convertHoursToMinutes Exercise:', convertHoursToMinutesResults);

// personalizeGreeting Exercise
function personalizeGreeting(name) {
  return 'Hello ' + name + '!';
}

var personalizeGreetingResults = personalizeGreeting('World');

console.log('personalizeGreeting Exercise:', personalizeGreetingResults);

// returnDatatype Exercise
function returnDatatype(data) {
  return (typeof data);
}

var returnDatatypeResults = returnDatatype(1072);

console.log('returnDatatype Exercise:', returnDatatypeResults);

// addAndMultiplyBy5 Exercise
function addAndMulitplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}

var addAndMulitplyBy5Results = addAndMulitplyBy5(10, 5);

console.log('addAndMultiplyBy5 Exercise:', addAndMulitplyBy5Results);

// multiplyAndDivideBy5 Exercise
function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}

var multiplyAndDivideBy5Results = multiplyAndDivideBy5(35, 10);

console.log('multiplyAndDivideBy5 Exercise:', multiplyAndDivideBy5Results);

// subtractTwoNumbers Exercise
function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}

var subtractTwoNumbersResults = subtractTwoNumbers(22, 7);

console.log('subtractTwoNumbers Exercise:', subtractTwoNumbersResults);

// getCircleCircumference Exercise
function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}

var getCircleCircumferenceResults = getCircleCircumference(5);

console.log('getCircleCircumference Exercise:', getCircleCircumferenceResults);

// returnFullName Exercise
function returnFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

var returnFullNameResults = returnFullName('Samuel', 'Cho');

console.log('returnFullName Exercise:', returnFullNameResults);

// cubeNumber Exercise
function cubeNumber(number) {
  return Math.pow(number, 3);
}

var cubeNumberResults = cubeNumber(5);

console.log('cubeNumber Exercise:', cubeNumberResults);

// returnMathSentence Exercise
function returnMathSentence(num1, num2) {
  return 'If you add ' + num1 + ' and ' + num2 + ' together you get ' +
  addTwoNumbers(num1, num2) + '.';
}

var returnMathSentenceResults = returnMathSentence(5, 12);

console.log('returnMathSentence Exercise:', returnMathSentenceResults);
