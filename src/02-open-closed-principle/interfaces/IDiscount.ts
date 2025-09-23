export interface IDiscount {
  nombre: string;
  getDiscount(precio: number): number;
}
