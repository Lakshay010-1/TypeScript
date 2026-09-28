// Generics
// Allow you to write reusable code while preserving type information.
// T or any other name, is just a conventional name for a type parameter.

// Function
// having an array
function arrSum<T extends number | string>(values: T[]): T | null | never {
  let vals_len = values.length;
  if (vals_len <= 0) {
    return null;
  }
  let sum: T = values[0];
  let val0_type = typeof values[0];
  for (let i = 1; i < values.length; i++) {
    if (val0_type !== typeof values[i]) {
      throw new Error("Mixed Array");
    }
    sum = (
      typeof values[i] === "string"
        ? `${sum} ${values[i]},`
        : Number(sum) + Number(values[i])
    ) as T;
  }
  return sum;
}

// having an object
function objId<T extends { id: number }>(obj: T): number {
  return obj.id;
}

// having  keyof
function identity<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const employee: Record<string, string | number> = {
  id: "asdgjnfiasd",
  name: "Lakshay",
  experience: 9,
};

let value = identity(employee, "id");

// Interface
interface Pairs<V> {
  [key: string]: V;
}

const subjectsId: Pairs<number> = {
  maths: 1,
  science: 2,
  cs: 3,
};

// Generic defaults
// Giving generics a default type
interface ApiResponse<T = string> {
  message: string;
  data: T;
  status: boolean;
}

// Class
class Box<T> {
  constructor(public value: T) {}

  getValue(): T {
    return this.value;
  }
}
