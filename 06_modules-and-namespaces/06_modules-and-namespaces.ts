// modules and namespaces
// both help organize code and avoid naming conflicts.

// But they solve the problem in different ways:
// - Module     = Provide file-level scope and explicit dependencies.
// - Namespace  = language-level grouping inside code.

/*
1. Modules
- It is a TypeScript/JavaScript file whose declarations are scoped to that file and can be explicitly shared using export and import.
- Declarations at the top level of a module are private to that module unless exported.
- export            = Makes a declaration available to other modules.
- import            = Brings an exported declaration into another module.
- named export      = An export identified by its declaration name.
- default export    = A module can have one default export.
- Re-export         = Export something that was imported from another module.
- Barrel file       = A module, commonly called index.ts, that re-exports declarations from multiple modules.
*/

/*
2. Namespaces
- A namespace is a TypeScript construct that groups related declarations under a single named scope.
- export determines whether a member is accessible from outside the namespace
- Multiple declarations with the same namespace name are combined.
- A TypeScript triple-slash reference directive tells the TypeScript compiler about another source file.
    /// <reference path="..." />
    It is not equivalent to import.
    It does not mean Node will automatically load the referenced JavaScript file at runtime.
*/
