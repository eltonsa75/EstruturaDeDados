const items = new WeakMap(); // {1}
class Stack {
    constructor ()
 {
    items.set(this, []); // {2}
 }
 push(element) {
    const s = items.get(this); // {3}
    s.push(element);
 }
 pop() {
    const s = items.get(this);
    const r = s.pop();
    return r;
 }
 // outros métodos
}