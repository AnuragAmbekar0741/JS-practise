class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// var first = new Node('Hi');
// first.next = new Node('there');
// first.next.next = new Node('how');

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let node = new Node(val);
        if (!this.head) {
            this.head = node
            this.tail = node
            this.length++
        }
        else {
            this.tail.next = node
            this.tail = node
            this.length++
        }
        return this;
    }

    traverse() {
        var current = this.head;
        while (current) {
            console.log(current.val)
            current = current.next
        }
    }

    pop() {
        if (!this.head) return undefined;
        var current = this.head;
        var newTail = current;
        while (current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if (this.length == 0) {
            this.head = null;
            this.tail = null;
        }
        return current
    }

    shift() {
        if (!this.head) return undefined;
        var current = this.head;
        this.head = current.next;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    unShift(val) {
        var current = this.head;
        var newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.head = newNode;
            this.head.next = current;
        }
        this.length++;
        return this;
    }

    get(i) {
        var counter = 0;
        var current = this.head;
        if (i < 0 || i >= this.length) return null;
        while (current) {
            if (counter === i) return current
            current = current.next
            counter++
        }
    }

    set(i, val) {
        var foundNode = this.get(i);
        if (foundNode) {
            foundNode.val = val;
            return true;
        }
        return false;
    }

    insert(i, val) {
        if (i < 0 || i > this.length) return false
        if (i === this.length) return this.push(val)
        if (i === 0) return this.unshift(val)
        var newNode = new Node(val)
        var previous = this.get(i - 1)
        var current = this.get(i)

        previous.next = newNode;
        newNode.next = current;
        this.length++

        return this;
    }




}
var list = new SinglyLinkedList()
list.push("1")
list.push("2")
list.push("3")
list.push("4")
list.push("5")
//console.log(list.push("HELLO"))

console.log(list.insert(2, 9));
console.log(list.get(2));


//console.log(list)





//console.log(list.traverse())




