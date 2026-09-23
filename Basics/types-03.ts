// Type Assertions
// Assertion tells typescript to treat the value as declared
const formNameInput = document.getElementById("username") as HTMLInputElement;
let userName: string = formNameInput.value as string;

// Non-Null Assertion => '!'
// Tells typescript the value is definitely not null or undefined
const formIdInput = document.getElementById("userId")!;

// Nullish coalescing => '??'
// It is a JavaScript runtime operator, not a TypeScript-only feature.
// Means => Use the value on the left unless it is null or undefined; otherwise use the value on the right
// Checks for null, undefined
let doAliensExists = null;
let alienExists = doAliensExists ?? "NO";

// Logical OR Operator => '||'
// It checks truthiness.
// If the left side is truthy, use it; otherwise, use the right side.
// Checks for 0, -0, 0n, NaN, false, empty string, null or undefined
let doMartiansExists = undefined;
let martiansExists = doMartiansExists || "Maybe";
