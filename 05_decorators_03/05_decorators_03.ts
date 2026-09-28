// Experimental Decorators
// This model is centered around (target, propertyKey, descriptor)
// target           = The object/class being decorated or containing the member
// propertyKey      = Name of the method/property being decorated
// descriptor       = Description of a property/method, including its value/function
// paramterIndex    = Position/index of the decorated parameter

// Types of Experimental Decorators

// Class Decorators
function InfoClass(target: Function) {
  console.log("Info: Class Decorator");
  console.log("target = ", target);
}

// Method Decorators
function InfoMethod(
  target: object,
  propertyKey: string | symbol,
  descriptor: PropertyDescriptor,
) {
  console.log("Info: Method Decorator");
  console.log("target = ", target);
  console.log("propertyKey = ", propertyKey);
  console.log("descriptor = ", descriptor);
}

function Autobind(
  target: object,
  propertyKey: string | symbol,
  descriptor: PropertyDescriptor,
) {
  const ogMethod = descriptor.value;
  const newMethod: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      return ogMethod.bind(this);
    },
  };
  return newMethod;
}

// Property Decorators
function InfoProp(target: object, propertyKey: string | symbol) {
  console.log("Info: Property Decorator");
  console.log("target = ", target);
  console.log("propertyKey = ", propertyKey);
}

// Parameter Decorators
function InfoParam(
  target: object,
  propertyKey: string | symbol | undefined,
  parameterIndex: number,
) {
  console.log("Info: Parameter Decorator");
  console.log("target = ", target);
  console.log("propertyKey = ", propertyKey);
  console.log("parameterIndex = ", parameterIndex);
}

// Decorator Factory
function Logger(msg: string) {
  return function <
    T extends {
      new (...args: any[]): { getName(): string; setName(name: string): void };
    },
  >(target: T) {
    console.log("Logger: Class Decorator");
    console.log("Class Name => ", target.name);
    console.log("Message => ", msg);
    return class extends target {
      constructor(...args: any[]) {
        super(...args);
        this.setName(this.getName().toUpperCase());
      }
    };
  };
}

// Class
@InfoClass
@Logger("PERSON CLASS")
class Person {
  @InfoProp
  being = "living";

  constructor(private name: string) {
    console.log("Person or is also called Human");
  }

  @InfoMethod
  @Autobind
  getName() {
    return this.name;
  }

  setName(@InfoParam n: string) {
    this.name = n;
  }
}

const person1 = new Person("A_Person");
const getName = person1.getName;
console.log("perons1 Name => ",getName());
