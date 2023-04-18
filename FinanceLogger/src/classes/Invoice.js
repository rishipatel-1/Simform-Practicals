"use strict";
exports.__esModule = true;
exports.Invoice = void 0;
var Invoice = /** @class */ (function () {
    function Invoice(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    Invoice.prototype.format = function () {
        return "".concat(this.client, " has to recieve  ").concat(this.amount, " Rupess for ").concat(this.details);
    };
    return Invoice;
}());
exports.Invoice = Invoice;
