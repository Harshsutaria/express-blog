// single inheritance
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
var A = /** @class */ (function () {
    function A() {
    }
    A.prototype.aMain = function (a) {
        console.log("A can run ", a);
    };
    return A;
}());
var B = /** @class */ (function (_super) {
    __extends(B, _super);
    function B() {
        return _super.call(this) || this;
    }
    B.prototype.bMain = function (a) {
        console.log("B ************can run ", a);
    };
    return B;
}(A));
var C = /** @class */ (function (_super) {
    __extends(C, _super);
    function C() {
        return _super.call(this) || this;
    }
    C.prototype.cMain = function (a) {
        console.log("C ************can run ", a);
    };
    return C;
}(B));
var D = /** @class */ (function (_super) {
    __extends(D, _super);
    function D() {
        return _super.call(this) || this;
    }
    D.prototype.dMain = function (a) {
        console.log("d ************can run ", a);
    };
    return D;
}(C));
new D().aMain("hey");
new D().bMain("hello");
new D().cMain("hi");
new D().dMain("hota hai life hai ");
