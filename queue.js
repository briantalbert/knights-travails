export class Queue {
    constructor() {
        this.queue = [];
    }

    enqueue(item) {
        this.queue.push(item);
    }

    pop() {
        return this.queue.splice(0, 1);
    }

    isEmpty() {
        return this.queue.length == 0;
    }

    length() {
        return this.queue.length;
    }
}