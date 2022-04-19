
//Amazon sheet question 2
function maxElement(A) {
    var freqCounterObj = {}
    for (let val of A) {
        freqCounterObj[val] = (freqCounterObj[val] || 0) + 1
        if (freqCounterObj[val] > Math.floor(A.length / 2)) return val;
    }
    return freqCounterObj
}

console.log(maxElement([2, 1, 2, 2, 1, 1, 1, 2, 1]));


// Two pair sum program 
function twoPairSum(arr, sumValue) {


    for (i = 0; i < arr.length; i++) {
        var num1 = i;
        var num2 = i + 1;
        if (num1 + num2 === sumValue) return true
    }
    return false;
}

console.log("Two pair solution " + twoPairSum([4, 5, 2, 6, 2, 7, 65, 43, 5, 1, 3, 2, 6], 5))

//twoPairSum([4, 5, 2, 3, 1], 3) // 2+1=3  true

// Algorithm: segregateEvenOdd()
// 1) Initialize two index variables left and right:
// left = 0, right = size - 1
// 2) Keep incrementing left index until we see an even number.
// 3) Keep decrementing right index until we see an odd number.
// 4) If left < right then swap arr[left] and arr[right]


function sortEvenOdd(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        while (arr[left] % 2 === 0 && left < right) left++

        while (arr[right] % 2 === 1 && left < right) right--

        while (left < right)
            var temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
    }
    return arr
}

//console.log(sortEvenOdd[1, 2, 3, 4, 5, 6, 7, 8, 9])


//Singly linked list with pop()Linked

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor(head, tail, length) {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let newNode = new Node(val)
        if (this.head == null) {
            this.head = newNode
            this.tail = newNode
        }
        else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++;
        return this;
    }
}

var list = new SinglyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);

console.log(list);
