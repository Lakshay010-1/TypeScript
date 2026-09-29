// Index Types
// Refers to TypeScript's ability to work with property names/types dynamically.
// like 'keyof', 'typeof', 'T[K]', etc

// satisfies
// It checks that a value conforms to a type without changing the value's inferred type.

// as const
// Makes value as narrowly and immutably as possible
let humans: Array<string> = ["lakshay", "lex", "luck"] as const;

// Type Guard
// type guard is a runtime check that allows TypeScript to narrow a type.
//   (i). typeof       = works well for primitive values
//  (ii). instanceof   = checks whether an object was created from a particular class/constructor
// (iii). in           = The in operator checks whether a property exists on an object
//  (iv). User-Defined = Custom type guard.
class A {
  speak() {
    console.log("Speaking...");
  }
}

class B {
  listen() {
    console.log("Listening...");
  }
}

function performActionAB(letter: A | B) {
  if (letter instanceof A) {
    letter.speak();
  } else {
    letter.listen();
  }
}

// Discriminated Unions
// A discriminated union is a union of object types that share a common property used to identify which type they are.

interface C {
  kind: "C";
  see: () => void;
}

interface D {
  kind: "D";
  go: () => void;
}

function performActionCD(letter: C | D) {
  if (letter.kind === "C") {
    letter.see();
  } else {
    letter.go();
  }
}
