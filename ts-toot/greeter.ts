class Student {
  fullName: string;
  constructor(
    public firstName:     string,
    public middleInitial: string,
    public lastName:      string,
  ) {
    this.fullName = firstName + " " + middleInitial + " " + lastName;
  }
}
// An interface allows us to use typescript with the *shape* of an object, but
// the class doesn't particularly matter
interface Person {
  firstName: string;
  lastName:  string;
}

function greeter(person: Person) {
  return "Hello, " + person.firstName + " " + person.lastName;
}

// Just a dict with firstName and lastName will work because the interface is
// the same.
// let user = { firstName: "Jane", lastName: "User" };
// document.body.textContent = greeter(user);

let user = new Student("Jane", "M.", "Student");

document.body.textContent = greeter(user);
