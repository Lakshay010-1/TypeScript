// Utility Types
// Utility types are built-in generic types that let you transform existing types instead of rewriting them manually.
type User = {
  id: number;
  name: string;
  occupation: string;
};

type userValueTypes = string | number | null | undefined;

function createUser(id: number, name: string, occupation: string): User {
  return {
    id,
    name,
    occupation,
  };
}

class Employee {
  constructor(public employeerId: number) {}
}

/* -------------------------------------------------------------------------------------------------------------------------- */

// Object transformation
// (i). Partial = Makes all properties optional
type incompleteUser = Partial<User>;

// (ii). Required = Makes all properties required
type completeUser = Required<User>;

// (iii). Readonly = Makes all properties readonly
type admin = Readonly<User>;

// (iv). Pick = Creates a type containing only selected properties.
type fieldsUser = Pick<User, "occupation" | "name">;

// (v). Omit = Creates a type containing everything except selected properties.
type presentUser = Omit<User, "id">;

/* -------------------------------------------------------------------------------------------------------------------------- */

// Object construction
// (i). Record  = Creates an object type with a specified set of keys and a common value type.
type Users = Record<string, User>;

/* -------------------------------------------------------------------------------------------------------------------------- */

// Union manipulation
// (i). Exclude = Removes members of U from union T.
type excludeStringType = Exclude<userValueTypes, string>;

// (ii). Extract = It keeps only the members of T that are assignable to U. (Opposite idea of Exclude)
type extractNumberType = Extract<userValueTypes, number>;

// (iii). NonNullable = Removes null or undefined
type allowedTypes = NonNullable<userValueTypes>;

/* -------------------------------------------------------------------------------------------------------------------------- */

// Function / Promise extraction
// (i).     Parameters              = Gets a function's parameters as a tuple type.
type UserFnParams = Parameters<typeof createUser>;
// [number, string, string]

// (ii).    ConstructorParameters   = Similar to Parameters, but for a class constructor.
type EmployeeConsParams = ConstructorParameters<typeof Employee>;
// [number]

// (iii).   ReturnType              = Gets the return type of a function
type UserFnReturnType = ReturnType<typeof createUser>;
// {id:number, name:string, occupation:string}

// (iv).    InstanceType            = Gets the instance type produced by a constructor.
type employeeInstance = InstanceType<typeof Employee>;
// Employee

// (v).     Awaited                 = Extracts the resolved value from a Promise.
type employee = Awaited<Promise<Employee>>;
// Employee

// (vi).    ThisParameterType       = Get the type of an explicit this parameter from a function.

// (vii).   OmitThisParameter       = Removes the explicit this parameter from a function type.

// (viii).  ThisParameter           = used to specify the type of this inside object-literal methods.

// (ix).    NoInfer                 = prevents TypeScript from using a particular type position for type inference .
