import { IDatabase } from "../interfaces/IDatabase";

export class PostgreSQLDatabase implements IDatabase {
  nombre: string = "Postgre";
  connect(): void {
    console.log("conectando a PostgreSQL");
  }
}
