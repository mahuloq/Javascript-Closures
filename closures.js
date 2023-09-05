function createPerson(firstName, lastName) {
  return {
    firstName: firstName,
    lastName: lastName,
    getFullName() {
      return firstName + " " + lastName;
    },
  };
}

let person1 = createPerson("Matt", "Tucker");
console.log(person1.getFullName());
let person2 = createPerson("John", "Smith");
console.log(person2.getFullName());
