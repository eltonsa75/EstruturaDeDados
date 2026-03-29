function hotPotato(elementList, num) {
    const queue = new Queue(); // {1}
    const elementList = [];
    for (let i = 0; i < elementList.length; i++) {
     queue.enqueue(elementList[i]); // {2}
    }
    while (queue.size() > 1){
        for (let i = 0; i < num; i++) {
            queue.enqueue(queue.dequeue()); // {3}
        }
        elementList.push(queue.dequeue()); // {4}
    }
    return {
        eleminated: elementList,
        winner: queue.dequeue() // {5}
    };
}