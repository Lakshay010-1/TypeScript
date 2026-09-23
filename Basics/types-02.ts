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
// returns number
function mutliply(a: number, b: number): number {
  return a * b;
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
