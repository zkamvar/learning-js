var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
// Just a dict with firstName and lastName will work because the interface is
// the same.
// let user = { firstName: "Jane", lastName: "User" };
// document.body.textContent = greeter(user);
var user = new Student("Jane", "M.", "Student");
document.body.textContent = greeter(user);
