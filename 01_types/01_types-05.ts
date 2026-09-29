// Advanced TypeScript type-system features
let val = { id: 123412, name: "lakshay", occupation: "software developer" };

/* ---------------------------------------------------------------------------------------------------------------------------------- */

// 1. typeof
// typeof has two different uses:
// A. Javascript `typeof` - runtime
// - It executes at runtime and returns the variable type VALUE.
// can be stored in variable with let, const, or var.
let val_type_1 = typeof val;
// val_type_1 stores string

// B. Typescript `typeof` - type level
type val_type = typeof val;
// val_type is equal to val_type:string
let val2: val_type = { id: 1, name: "l", occupation: "software engineer" };

/* ---------------------------------------------------------------------------------------------------------------------------------- */

// 2. keyof
// keyof gets the keys of a type as a union.
type val_keys<K extends keyof val_type, V extends val_type[K]> = {
  [key in K]: V;
};

let val3_id: val_keys<"id", number> = { id: 12312 };
let val3_name: val_keys<"name", string> = { name: "Luck" };
let val3_occupation: val_keys<"occupation", string> = {
  occupation: "Software Dev",
};
let val3 = {
  ...val3_id,
  ...val3_name,
  ...val3_occupation,
};

/* ---------------------------------------------------------------------------------------------------------------------------------- */

// 3. Indexed access types
// Allow to get the type of a particular property
// syntax : Type["property"]
type id_type = val_type["id"];
// id_type = number

// Generic indexed access
function getPropertyValue<T extends object, K extends keyof T>(
  obj: T,
  key: K,
): T[K] {
  return obj[key];
}

/* ---------------------------------------------------------------------------------------------------------------------------------- */

// 4. mapped types
// Allows to create a new type by iterating over the keys of another type
type val_type_optional_vals<T extends val_type> = { [K in keyof T]?: T[K] };
let val4: val_type_optional_vals<val_type> = {};

/* ---------------------------------------------------------------------------------------------------------------------------------- */

// 5. template literal types
// Allows to construct string literal types using template syntax
type MainEvent = "click" | "keydown" | "keyup" | "hover";
type events = `on${Capitalize<MainEvent>}`;
// events = onclick | onkeydown | onkeyup | onhover

let userEvent: events = "onClick";

/* ---------------------------------------------------------------------------------------------------------------------------------- */

// 6. conditional types
// type level if-else
// syntax: T extends U ? X : Y
type IsString<T> = T extends string ? true : false;
type IsStringResult = IsString<string | number>;
// IsStringResult allowed values = true or false

/* ---------------------------------------------------------------------------------------------------------------------------------- */

// 7. infer
// It is used inside conditional types to extract a type.
type ElementType<T> = T extends (infer U)[] ? U : never;
type ElementTypeResult1 = ElementType<string[]>;
// string
type ElementTypeResult2 = ElementType<number[]>;
// number
