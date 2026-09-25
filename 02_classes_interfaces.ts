// TypeScript classes are JavaScript classes + TypeScript's type system.

// Access Modifiers
// Modifier	    Class	Subclass	Outside
// public	     Yes	   Yes	      Yes
// protected	 Yes	   Yes	      No
// private	     Yes	   No	      No

// Static
// static property(variables/function) belongs to the class itself.

// override
// A subclass can replace a parent's method.

// An abstract class is intended to be a base class
// An interface in TypeScript defines the shape/contract of a value.

abstract class Human {
  constructor(protected name: string) {}

  getName() {
    return this.name;
  }
}

interface InformationBox {
  printInfo: () => void;
}

class Employee extends Human implements InformationBox {
  static total_count: number = 0;

  constructor( name: string, protected id: string, protected experience: number, ) {
    super(name);
    Employee.total_count++;
  }

  getExperience(): number {
    return this.experience;
  }

  printInfo() {
    console.log("Name -> ", this.name);
    console.log("ID -> ", this.id);
    console.log("Experience -> ", this.experience);
  }
}

class HR extends Employee {
  hired_emp_count: number;

  constructor( name: string, id: string, years_of_experience: number, hired_emp_count: number, ) {
    super(name, id, years_of_experience);
    this.hired_emp_count = hired_emp_count;
  }

  override printInfo(): void {
    console.log("Name -> ", this.name);
    console.log("ID -> ", this.id);
    console.log("Experience -> ", this.experience);
    console.log("Hired Employee Count -> ", this.hired_emp_count);
  }

  communicateMsg(msg: string) {
    console.log("Message to all Employees: " + msg);
  }
}

const emp1: Employee = new Employee("Lakshay", "1", 9);
// console.log(emp1.getExperience());

const emp2: HR = new HR("Lex", "2", 8, 99);
// console.log("Experience -> ", emp2.getExperience());
// emp2.communicateMsg("Good Morning");

emp1.printInfo();
emp2.printInfo();
