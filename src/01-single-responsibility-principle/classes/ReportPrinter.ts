import { Report } from "./Report";

export class ReportPrinter {
  print(report: Report) {
    console.log(`Imprimiendo Reporte: ${report.title}`);
  }
}
