import { App } from "./classes/App";
import { MySQLDatabase } from "./classes/MySQLDatabase";
import { PostgreSQLDatabase } from "./classes/PostgreSQLDatabase";

export async function DemoDependencyInversion() {
  console.log("Principio de Inversión de Dependencias");

  const dbMySQL = new MySQLDatabase();
  const dbPostgre = new PostgreSQLDatabase();

  const app1 = new App(dbMySQL);
  const app2 = new App(dbPostgre);

  // await para entrar en ambiente xd
  await app1.start();
  await app2.start();
}
