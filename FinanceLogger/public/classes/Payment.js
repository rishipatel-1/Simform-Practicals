export class Payment {
    constructor(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    ;
    format() {
        return`${this.client} has to pay  ${this.amount} Rupess for ${this.details}`;
    }
}
