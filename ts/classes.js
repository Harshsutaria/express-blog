"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
//**basic classs definition */
var Person = /** @class */ (function () {
    //   initializing constructor
    function Person(id, name, age, lastName) {
        this.id = id;
        this.firstName = name;
        this.age = age;
        this.lastName = lastName;
    }
    Person.prototype.log = function () {
        console.log("".concat(this.firstName, " is ").concat(this.age, " years old"));
    };
    Person.prototype.sum = function (x, y) {
        return x + y;
    };
    Person.prototype.mul = function (x, y) {
        return x * y;
    };
    Person.prototype.sub = function (x, y) {
        return x - y;
    };
    return Person;
}());
var person = new Person("1", "cheems", 20, "Singh");
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    //protected name: string;
    function Student(id, name, age, lastName) {
        return _super.call(this, id, name, age, lastName) || this;
        // this.name = name;
    }
    Student.prototype.log = function () {
        console.log("mai cheems hu ", this., this.lastName);
    };
    return Student;
}(Person));
var student = new Student("1", "cheems singh ", 20, "sutaria");
student.log();
var d = student.mul(20, 30);
console.log("d is ", d);
//console.log(student.name);
/**
 * note on access modifiers
 *
 */ 
