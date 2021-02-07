"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HtmlReport = void 0;
var fs_1 = __importDefault(require("fs"));
var HtmlReport = /** @class */ (function () {
    function HtmlReport(htmlPath) {
        this.htmlPath = htmlPath;
    }
    HtmlReport.prototype.print = function (report) {
        var html = "\n        <div>\n            <h1>EPL Analysis</h1>\n            <div>" + report + "</div>\n        </div>\n    ";
        fs_1.default.writeFileSync(this.htmlPath, html);
    };
    return HtmlReport;
}());
exports.HtmlReport = HtmlReport;
