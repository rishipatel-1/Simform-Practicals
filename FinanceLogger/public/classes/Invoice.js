export class Invoice {
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return`${this.client} has to recieve  ${this.amount} Rupess for ${this.details}`;
    }
}
