import { LinkedList } from './structures/linkedlist.js';

/**
 * ============================================
 * 🧪 TESTE LINKED LIST
 * ============================================
 */

const list = new LinkedList();

console.log("=== LISTA INICIAL ===");
console.log(list.toString()); // 🚂 Lista vazia

/**
 * ============================================
 * ➕ INSERÇÕES
 * ============================================
 */

list.push(10);   // adiciona no final
list.push(20);
list.push(30);

console.log("\n=== APÓS PUSH ===");
console.log(list.toString()); // 🚂 [10] → [20] → [30] → 🚃

/**
 * Inserção em posições específicas
 */
list.insert(5, 0);    // início
list.insert(25, 3);   // meio

console.log("\n=== APÓS INSERT ===");
console.log(list.toString()); // 🚂 [5] → [10] → [20] → [25] → [30] → 🚃

/**
 * ============================================
 * 🔍 BUSCA
 * ============================================
 */

console.log("\n=== BUSCA ===");
console.log("Index de 25:", list.indexOf(25)); // posição
console.log("Elemento na posição 2:", list.getElementAt(2)?.element);

/**
 * ============================================
 * ❌ REMOÇÕES
 * ============================================
 */

list.remove(20); // remove pelo valor

console.log("\n=== APÓS REMOVER 20 ===");
console.log(list.toString());

list.removeAt(0); // remove primeiro

console.log("\n=== APÓS REMOVER PRIMEIRO ===");
console.log(list.toString());

/**
 * ============================================
 * 📊 INFORMAÇÕES
 * ============================================
 */

console.log("\n=== INFORMAÇÕES ===");
console.log("Tamanho:", list.size());
console.log("Está vazia?", list.isEmpty());

/**
 * ============================================
 * 🧹 LIMPAR LISTA
 * ============================================
 */

list.clear();

console.log("\n=== APÓS CLEAR ===");
console.log(list.toString()); // 🚂 Lista vazia