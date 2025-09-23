import { Sparrow } from "./classes/Sparrow";
import { Penguin } from "./classes/Penguin";

export default function DemoLiskovSubstitutionPrinciple() {
  console.log("Principio de Sustitución Liskov (LSP)");

  const pajarito = new Sparrow();
  pajarito.move();
  pajarito.fly();

  const pingui = new Penguin();
  pingui.move();
}
