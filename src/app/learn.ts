// class Employee {
//     #id: number; // private field
//     protected name: string; // protected field
//     address: string; // public field

//     get empId(): number {
//         return this.#id;
//     }

//     set empId(id:number){
//         this.#id = id;  
//     }

//     constructor(id: number, name: string, address: string) {
//         this.#id = id;
//         this.name = name;
//         this.address = address;
//     }

//     getNameWithAddress(): string {
//         return `${this.name} lives at ${this.address}`; // protected field can be accessed
//     }

//     static getEmployeeCount(): number {
//         return 50;
//     }
// }

// // Access modifiers
// // public: accessible from anywhere
// // private: accessible only within the class
// // protected: accessible within the class and its subclasses


// let john = new Employee(1, 'John Doe', '123 Main St');
// let address = john.getNameWithAddress(); // John Doe lives at 123 Main St
// console.log(address);

// // Static methods
// // Static methods are called on the class itself, not on an instance of the class
// // Static methods cannot access instance properties
// // Static methods are useful for utility functions that do not depend on instance properties
// // Static methods are called using the class name, not an instance of the class
// // Static methods can be called without creating an instance of the class

// let count = Employee.getEmployeeCount();
// console.log(count); // 50

// // Getters and setters
// // Getters and setters are used to define computed properties
// // Getters are used to get the value of a property
// // Setters are used to set the value of a property
// // Getters and setters are defined using the get and set keywords
// // Getters and setters are called without using parentheses
// john.empId = 3;
// console.log(john.empId); // 3

// // Inheritance
// class Manager extends Employee{
//     constructor (id: number, name: string, address: string) {
//         super(id, name, address);
//     }

// }

// let mike = new Manager(2, 'Jane Doe', '456 Main St');

// console.log(mike.getNameWithAddress(); // Jane Doe lives at 456 Main St (Inherited from Employee class)