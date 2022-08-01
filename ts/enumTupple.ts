/**used to define some set of constants in ts  */
/**
 * Enums are one of the few features TypeScript has which is not a type-level extension of JavaScript.
   Enums allow a developer to define a set of named constants. Using enums can make it easier 
   to document intent, or create a set of distinct cases. TypeScript provides both numeric and string-based enums.
 */
enum language {
  ENGLISH = "1",
  HINDI = "2",
}

console.log(language.ENGLISH);

let a: [string, boolean, number] = ["2", true, 1];

a[0] = "1";
