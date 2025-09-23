import { IPrinter } from "../interfaces/IPrinter";

export class SimplePinter implements IPrinter {
  print(): void {
    console.log("imprimiendo...");
  }
}
