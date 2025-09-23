import { IFlyngBird } from "../interfaces/IFlyingBird";

export class Sparrow implements IFlyngBird {
  move(): void {
    console.log("EL pajarito se está moviendo por ahí");
  }

  fly(): void {
    console.log("El pajarito comenzó a volar");
  }
}
