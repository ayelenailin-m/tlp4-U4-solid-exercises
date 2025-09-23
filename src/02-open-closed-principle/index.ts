import { DiscountContext } from "./classes/DiscountContext";
import { RegularDiscount } from "./classes/RegularDiscount";
import { VipDiscount } from "./classes/VipDiscount";
import { StudentDiscount } from "./classes/StudentDiscount";

export default function DemoOpenClosedPrinciple() {
  console.log("Principio de Ocultación de Clases (OCP)");

  const discounts = [
    new DiscountContext(new RegularDiscount()),
    new DiscountContext(new VipDiscount()),
    new DiscountContext(new StudentDiscount()),
  ];

  let precio = 500;
  discounts.forEach((ctx, i) => {
    console.log(
      `El total con descuento ${ctx.getNombre()} de $${precio} es $${ctx.getDiscount(
        500
      )}`
    );
  });
}
