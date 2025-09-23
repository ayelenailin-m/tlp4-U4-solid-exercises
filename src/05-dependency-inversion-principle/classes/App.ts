import { IDatabase } from "../interfaces/IDatabase";

export class App {
  constructor(private readonly db: IDatabase) {}

  start(): void {
    this.db.connect();
    console.log(`app iniciada para db: ${this.db.nombre}`);
  }
}
