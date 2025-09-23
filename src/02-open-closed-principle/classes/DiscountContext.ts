import { IDiscount } from "../interfaces/IDiscount";

export class DiscountContext {
  constructor(private discount: IDiscount) {}

  getDiscount(precio: number): number {
    return this.discount.getDiscount(precio);
  }

  getNombre(): string {
    return this.discount.nombre;
  }
}
