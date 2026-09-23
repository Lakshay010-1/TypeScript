// Primitive Types

// any
// Everything is allowed like function, string, number, null, undefined, array, object, etc.
let value: any = [];

// unknown
// unknown is much safer than any.
// It helps in Type narrowing.
let value2: unknown = [];

// string
let userName: string = "Lakshay";

// number
let userAge: number = 30;
let userScore: number = 9.9;

// boolean
let userVerified: boolean = true;

// bigint
let userSalary: bigint = 81234273489213472847129421498124n;

// symbol
let userSymbol: symbol = Symbol("id");

// Array(s)
let userHobbies: Array<string> = ["Touch Typing", "Cricket", "Volley Ball"];
// OR
// let userHobbies: string[] = ["Touch Typing", "Cricket", "Volley Ball"];

// Tuple(s)
// A tuple represents a fixed structure and order.
let userCredentials: [string, string] = ["Password", "aksfn237h"];

// Type Aliases
type Role = "Admin" | "Reader" | "Writer";

let userRole: Role = "Admin";

// Union Types
let userMarks: number | string = "A+";
userMarks = 92;

// Literal Types
let userCurDirctionMove: "left" | "right" | "up" | "down" = "left";
