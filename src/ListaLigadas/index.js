import { LinkedList } from './structures/linkedlist.js';
import { SortedLinkedList } from './structures/SortedLinkedList.js';

const list = new LinkedList();
list.push(10);
list.push(20);
list.insert(5, 0);

console.log("--- Lista Comum ---");
console.log(list.toString());

const sorted = new SortedLinkedList();
sorted.insert(30);
sorted.insert(10);
sorted.insert(20);

console.log("\n--- Lista Ordenada ---");
console.log(sorted.toString());