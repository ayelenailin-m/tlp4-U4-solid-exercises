import { IDiscount } from "../interfaces/IDiscount";

export class RegularDiscount implements IDiscount {
  nombre: string = "Regular";
  getDiscount(precio: number): number {
    const descuento = (precio * 10) / 100;
    return precio - descuento;
  }
}
