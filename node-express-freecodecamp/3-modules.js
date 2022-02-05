import * as names from "./4-name.js";
import {sayHi} from "./5-util.js";
import { sayBye } from "./6-evoke.js";

console.log(names.name1);
console.log(names.name2);
sayHi(names.name1);
sayBye(names.name2);

