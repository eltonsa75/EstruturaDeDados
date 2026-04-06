import { LinkedList } from './structures/linkedlist.js';

/**
 * ============================================
 * 🧪 TESTE LINKED LIST
 * ============================================
 */

const list = new LinkedList();

console.log("=== LISTA INICIAL ===");
console.log(list.toString()); // Lista vazia



/**
 * ============================================
 * ➕ INSERÇÕES
 * ============================================
 */

list.push(10);   // adiciona no final
list.push(20);
list.push(30);

console.log("\n=== APÓS PUSH ===");
console.log(list.toString()); // [10] → [20] → [30]

/**
 * Inserção em posições específicas
 */
if (typeof list.insert === 'function') {
    list.insert(5, 0);    // início
    list.insert(25, 3);   // meio

    console.log("\n=== APÓS INSERT ===");
    console.log(list.toString());
} else {
    console.log("\n⚠️ Método insert() não implementado");
}

/**
 * ============================================
 * 🔍 BUSCA
 * ============================================
 */

if (typeof list.indexOf === 'function') {
    console.log("\n=== BUSCA ===");
    console.log("Index de 25:", list.indexOf(25));
} else {
    console.log("\n⚠️ Método indexOf() não implementado");
}

const element = list.getElementAt(2);
console.log("Elemento na posição 2:", element ? element.element : undefined);

/**
 * ============================================
 * ❌ REMOÇÕES
 * ============================================
 */

if (typeof list.remove === 'function') {
    list.remove(20);
    console.log("\n=== APÓS REMOVER 20 ===");
    console.log(list.toString());
} else {
    console.log("\n⚠️ Método remove() não implementado");
}

if (typeof list.removeAt === 'function') {
    list.removeAt(0);
    console.log("\n=== APÓS REMOVER PRIMEIRO ===");
    console.log(list.toString());
} else {
    console.log("\n⚠️ Método removeAt() não implementado");
}

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

if (typeof list.clear === 'function') {
    list.clear();

    console.log("\n=== APÓS CLEAR ===");
    console.log(list.toString());
} else {
    console.log("\n⚠️ Método clear() não implementado");
}