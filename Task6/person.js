class Person {
  constructor(firstName, lastName, age, gender, address, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
    this.address = address;
    this.email = email;
  }

  
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }


  displayDetails() {
    console.log(`Full Name: ${this.getFullName()}`);
    console.log(`Age: ${this.age}`);
    console.log(`Gender: ${this.gender}`);
    console.log(`Address: ${this.address}`);
    console.log(`Email: ${this.email}`);
  }
}


const person1 = new Person(
  "John",
  "Doe",
  30,
  "Male",
  "123 Main St, City",
  "john.doe@example.com"
);


person1.displayDetails();
