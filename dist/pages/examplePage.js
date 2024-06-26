"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testcafe_1 = require("testcafe");
class ExamplePage {
    constructor() {
        this.exampleElement = (0, testcafe_1.Selector)("#content");
    }
}
exports.default = new ExamplePage();
