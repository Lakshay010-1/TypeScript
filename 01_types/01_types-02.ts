// Enums
enum Months {
  "January" = 1,
  "Feburary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
}

let userBirthMonth: Months = Months.June;

// Objects
// name is readonly -> only name value is set, it can't be modified
// desc '?' => desc is a optional field, else are mandatory
let userSkills: Array<{
  readonly name: string;
  rating: number;
  desc?: string;
}> = [
  {
    name: "DSA",
    rating: 9,
  },
  {
    name: "Web Development",
    rating: 9,
    desc: "Technologies for Frontend:Next.js, React primarly; Backend: Node.js; Database:MongoDB, PostgreSQL",
  },
  {
    name: "Android Development",
    rating: 8.9,
  },
];

// Function
// function overload
// Function overloads allow you to describe multiple valid call signatures for one function.
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: number | string, b: number | string) {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else if (typeof a === "string" && typeof b === "string") {
    return a + b;
  } else {
    throw new Error("Arguments must have the same type");
  }
}

// returns void
// The function finishes, but doesn't return a useful value.
function printMsg(msg: string): void {
  console.log(msg);
}

// never
// A value that can never exist because the operation never successfully produces a value.
function throwError(): never {
  throw new Error("Something went wrong");
}

// Function Type
type calcFunction = (a: number, b: number) => number;

const multiply: calcFunction = (a, b) => a * b;
