/**used to define some set of constants in ts  */
/**
 * Enums are one of the few features TypeScript has which is not a type-level extension of JavaScript.
   Enums allow a developer to define a set of named constants. Using enums can make it easier
   to document intent, or create a set of distinct cases. TypeScript provides both numeric and string-based enums.
 */
var language;
(function (language) {
    language["ENGLISH"] = "1";
    language["HINDI"] = "2";
})(language || (language = {}));
console.log(language.ENGLISH);
