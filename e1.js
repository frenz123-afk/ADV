
////// Exercise 1

let persons = [
  { id: 1, name: "Alice", age: 28 },
  { id: 2, name: "Bob", age: 22 },
  { id: 3, name: "Charlie", age: 30 },
];

function updatePerson(id, person) {
 
  const index = persons.findIndex(p => p.id === id);
  
  if (index !== -1) {
  
    persons[index] = { ...persons[index], ...person };
  } else {
    console.log("Person not found.");
  }
}


updatePerson(2, { name: "Robert", age: 26 });
console.log(persons);

////// Exercise 2

function isValidPassword(password) {
  
  const upperCaseCount = (password.match(/[A-Z]/g) || []).length;
  
  const hasDigit = /\d/.test(password);

  const hasSpecialSymbol = /[_,!?*]/.test(password);

  
  return upperCaseCount >= 3 && hasDigit && hasSpecialSymbol;
}


console.log(isValidPassword("PASSword123!")); // true
console.log(isValidPassword("pass")); // false

//////// Exercise 3

function areValuesUnique(numbers) {
  
  const uniqueNumbers = new Set(numbers);
  return uniqueNumbers.size === numbers.length;
}


console.log(areValuesUnique([1, 2, 3, 4])); // true
console.log(areValuesUnique([1, 2, 2, 4])); // false