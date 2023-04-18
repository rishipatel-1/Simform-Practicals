import { HasFormatter } from '../interfaces/HasFormatter.js';

export class Payment implements HasFormatter{
  constructor(
    readonly recipient: string,
    private details: string,
    public amount: number,
  ){};

  format() {
    return`${this.recipient} has to pay ${this.amount} Rupess for ${this.details}`;
  }
}