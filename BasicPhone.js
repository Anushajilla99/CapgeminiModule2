"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Mobile_1 = require("./Mobile");
var BasicPhone = /** @class */ (function (_super) {
    __extends(BasicPhone, _super);
    function BasicPhone(mobileId, mobileName, mobileCost, mobileType) {
        var _this = _super.call(this, mobileId, mobileName, mobileCost) || this;
        _this.mobileType = mobileType;
        return _this;
    }
    BasicPhone.prototype.printMobileDetail = function () {
        console.log("id=", this.mobileId);
        console.log("name=", this.mobileName);
        console.log("cost=", this.mobileCost);
        console.log("type=", this.mobileType);
    };
    return BasicPhone;
}(Mobile_1.Mobile));
var e1 = new BasicPhone(1, "samsung galaxy", 10000, "android");
e1.printMobileDetail();
