import { IDiscount } from "../interfaces/IDiscount";

export class VipDiscount implements IDiscount {
  nombre: string = "VIP";
  getDiscount(precio: number): number {
    const descuento = (precio * 20) / 100;
    return precio - descuento;
  }
}
