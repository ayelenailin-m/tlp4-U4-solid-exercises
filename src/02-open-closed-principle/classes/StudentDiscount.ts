import { IDiscount } from "../interfaces/IDiscount";

export class StudentDiscount implements IDiscount {
  nombre: string = "Student";
  getDiscount(precio: number): number {
    const descuento = (precio * 15) / 100;
    return precio - descuento;
  }
}
