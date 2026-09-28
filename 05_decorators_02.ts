// ECMAScript Decorators

// This model is centered around :
function decorator(value, context) {}

// value    = value is the thing being decorated
// context  = Provides information about what is being decorated
// - context.kind = "class" | "method" | "getter" | "setter" | "field" | "accessor"
// - context.name = Gets the name of the decorated element
// - context.static = Tells you whether the member is static. (true/false)
// - context.private = Tells you whether the member is private.
// - context.access = Provides access operations for the decorated element.
// - context.addInitializer = It allows a decorator to register code that runs during initialization.

// Types of ECMAScript Decorators:
// Class Decorators
function logClass(value: Function, context: ClassDecoratorContext) {}

// Method Decorators
function logMethod(value: Function, context: ClassMethodDecoratorContext) {}

// Field/Property Decorators
function logProp(value: undefined, context: ClassFieldDecoratorContext) {}

// Parameter Decorators
// Not Supported

// Getter Decorators        = ClassGetterDecoratorContext
// Setter Decorators        = ClassSetterDecoratorContext
// auto-Accessor Decorators = ClassAccessorDecoratorContext

// Decorator Factory
function logged(prefix: string) {
  return function (value: Function, context: ClassMethodDecoratorContext) {
    return function (this: any, ...args: any[]) {
      console.log("Prefix msg => ", prefix);
      console.log("Method called => ", context.name);
      return value.apply(this, args);
    };
  };
}

// Modifying class: Decorator can return a new class
// AddTimeStamps
function AddTimestamp<T extends new (...args: any[]) => any>(
  target: T,
  context: ClassDecoratorContext,
) {
  console.log("Target => ", target);
  console.log("Context => ", context);
  return class extends target {
    constructor(...args: any) {
      super(...args);
      console.log("'created_at' added");
    }
    created_at = new Date();
  };
}

// Modifying Method
function autobind(
  value: (...args: any[]) => any,
  context: ClassMethodDecoratorContext,
): any {
  context.addInitializer(function (this: any) {
    this[context.name] = this[context.name].bind(this);
  });
  return function (this: any) {
    return value.apply(this);
  };
}

// Modifying Field
function CorrectValue(value: undefined, context: ClassFieldDecoratorContext) {
  return function (initialValue: any) {
    return "living";
  };
}

// Class
@AddTimestamp
class Animal {
  @CorrectValue
  being = "non-living";

  constructor(private species: string) {
    console.log(species);
  }

  @autobind
  getSpecies() {
    return this.species;
  }
}

let animal1 = new Animal("Lion");
let a1_get_species = animal1.getSpecies;
console.log(a1_get_species());
console.log(animal1.being);
