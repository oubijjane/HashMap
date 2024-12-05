import { hashMap } from "./hashMap.js";

let test = new hashMap();
/*test.set("take", "zakaria");
test.set("age", "yes");
test.set("agkjde", "hello");
test.set("agde", "dandandan");
//console.log(test.remove("age"));
console.log("test " + test.length());
console.log(test.get("take"));
console.log(test.entries());
console.log(test.hash("take")); */

test.set("apple", "red");
test.set("banana", "yellow");
test.set("carrot", "orange");
test.set("dog", "brown");
test.set("elephant", "gray");
test.set("frog", "green");
test.set("grape", "purple");
test.set("hat", "black");
test.set("ice cream", "white");
test.set("jacket", "blue");
test.set("kite", "pink");
test.set("uf", "pink");
test.set("ihf", "pink");
test.set("ifcr", "pink");
test.set("icf", "pink");
test.set("iewf", "pink");


console.log("initial length: " + test.length());
console.log("getting banana value: " + test.get("banana"));
console.log("remove an element: " + test.remove("ihf"));
console.log("lenght after removing an element: " + test.length());
console.log("add a a new element: " + test.set("lion", "golden"));
console.log("lenght after adding an element: " + test.length());
console.log("is the hash map has the ice cream element: " + test.has("ice cream"));
console.log("is the hash map has the tiger element: " + test.has("tiger"));
console.log("all the keys " + test.keys());
console.log("all the values " + test.values());
console.log("entries " + test.entries());
//console.log("clear all: " + test.clear());
console.log("all the keys " + test.keys());
console.log("all the values " + test.values());
console.log("entries " + test.entries());
console.log("new cycle");
console.log("new cycle");
console.log("new cycle");
console.log("new cycle");

console.log("initial length: " + test.length());
//console.log("getting banana value: " + test.get("lion"));
console.log("remove an element: " + test.remove("hat"));
console.log("lenght after removing an element: " + test.length());
console.log("add a a new element: " + test.set("lion", "golden"));
console.log("lenght after adding an element: " + test.length());
console.log("is the hash map has the ice cream element: " + test.has("ice cream"));
console.log("is the hash map has the tiger element: " + test.has("tiger"));
console.log("all the keys " + test.keys());
console.log("all the values " + test.values());
console.log("entries " + test.entries());
console.log("clear all: " + test.clear());
console.log("all the keys " + test.keys());
console.log("all the values " + test.values());
console.log("entries " + test.entries()); 


