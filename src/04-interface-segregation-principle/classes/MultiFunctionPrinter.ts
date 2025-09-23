import { IFax } from "../interfaces/IFax";
import { IPrinter } from "../interfaces/IPrinter";
import { IScanner } from "../interfaces/IScanner";

export class MultiFunctionPrinter implements IPrinter, IScanner, IFax {
  print(): void {
    console.log("imprimiendo...");
  }
  scanner(): void {
    console.log("escaneando...");
  }
  fax(): void {
    console.log("faxeando...");
  }
}
