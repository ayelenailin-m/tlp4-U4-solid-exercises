// Principio Single: responsabilidad única
import { Report } from "./classes/Report";
import { ReportPrinter } from "./classes/ReportPrinter";
import { ReportSaver } from "./classes/ReportSaver";

export default function DemoSingleResponsibility() {
  console.log("Principio de Responsabilidad Única (SRP)");

  const report = new Report(
    "Reporte SOLID",
    "Desarrollo de los 5 principios SOLID para el trab..."
  );
  const printer = new ReportPrinter();
  const saver = new ReportSaver();

  // imprimiendo y guardando el reporte
  printer.print(report);
  saver.saveToFile(report);
}
