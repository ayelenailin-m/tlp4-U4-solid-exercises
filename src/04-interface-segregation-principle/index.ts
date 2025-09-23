import { SimplePinter } from "./classes/SimplePrinter";
import { MultiFunctionPrinter } from "./classes/MultiFunctionPrinter";

export function DemoInterfaceSegregation() {
  console.log("Principio de Segregación de Interfaces (ISP)");

  const impresoraSimple = new SimplePinter();
  impresoraSimple.print();

  const impresoraMultifuncion = new MultiFunctionPrinter();
  impresoraMultifuncion.print();
  impresoraMultifuncion.scanner();
  impresoraMultifuncion.fax();
}
