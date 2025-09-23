import { IBird } from "../interfaces/IBird";

export class Penguin implements IBird {
  move() {
    console.log("El pinguino se está desplazando por ahí");
  }
}
