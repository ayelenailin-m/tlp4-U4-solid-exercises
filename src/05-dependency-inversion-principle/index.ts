import { App } from "./classes/App";
import { MySQLDatabase } from "./classes/MySQLDatabase";
import { PostgreSQLDatabase } from "./classes/PostgreSQLDatabase";

export async function DemoDependencyInversion() {
  console.log("Principio de Inversión de Dependencias");

  const appMySQL = new App(new MySQLDatabase());
  const appPostgree = new App(new PostgreSQLDatabase());

  appMySQL.start();
  appPostgree.start();
}
