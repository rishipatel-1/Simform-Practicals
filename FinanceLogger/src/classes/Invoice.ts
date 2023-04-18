import { HasFormatter } from '../interfaces/HasFormatter.js';

export class Invoice implements HasFormatter {
  constructor(
    readonly client: string, 
    private details: string, 
    public amount: number,
  ){}

  format() {
     return`${this.client} has to recieve  ${this.amount} Rupess for ${this.details}`;
  }
}