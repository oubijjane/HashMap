import { hashMap } from "./hashMap.js";

let test = new hashMap();
test.set("take", "zakaria");
test.set("age", "yes");
console.log("test " + test.get("take"));
console.log(test.hash("take"));