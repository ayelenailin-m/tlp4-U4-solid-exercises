import { IDatabase } from "../interfaces/IDatabase";

export class MySQLDatabase implements IDatabase {
  nombre: string = "MySQL";
  connect(): void {
    console.log("conectando a MySQL");
  }
}
