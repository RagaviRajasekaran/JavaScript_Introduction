class Person {
  constructor(firstName, lastName, age, gender, address, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
    this.address = address;
    this.email = email;
  }

  // Method to get the full name of the person
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  // Method to display all details of the person
  displayDetails() {
    console.log(`Full Name: ${this.getFullName()}`);
    console.log(`Age: ${this.age}`);
    console.log(`Gender: ${this.gender}`);
    console.log(`Address: ${this.address}`);
    console.log(`Email: ${this.email}`);
  }
}

// Example usage:
const person1 = new Person(
  "John",
  "Doe",
  30,
  "Male",
  "123 Main St, City",
  "john.doe@example.com"
);

// Displaying person1's details
person1.displayDetails();
