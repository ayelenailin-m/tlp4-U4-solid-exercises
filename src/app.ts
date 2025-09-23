// Punto de entrada general para correr todas las demos.
import "./01-single-responsibility-principle/index.js";
import "./02-open-closed-principle/index.js";
import "./03-liskov-substitution-principle/index.js";
import "./04-interface-segregation-principle/index.js";
import "./05-dependency-inversion-principle/index.js";

import DemoSingleResponsibility from "./01-single-responsibility-principle/index";
import DemoOpenClosedPrinciple from "./02-open-closed-principle/index.js";
import DemoLiskovSubstitutionPrinciple from "./03-liskov-substitution-principle/index.js";
import { DemoInterfaceSegregation } from "./04-interface-segregation-principle/index.js";
const separacion =
  "===========================================================";

console.log(separacion);
DemoSingleResponsibility();
console.log(separacion);
DemoOpenClosedPrinciple();
console.log(separacion);
DemoLiskovSubstitutionPrinciple();
console.log(separacion);
DemoInterfaceSegregation();
console.log(separacion);
