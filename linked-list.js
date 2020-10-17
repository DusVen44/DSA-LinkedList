class _Node {
    constructor(value, next) {
        this.value = value; //holds the data
        this.next = next; //pointer to the next node
    };
};

class LinkedList {
    constructor() {
        this.head = null; //start with empty list
    };

    insertFirst(item) { //put new node at the beginning
        this.head = new _Node(item, this.head); //point new node to the head
    };

    insertLast(item) { //put new node at the end
        if (this.head === null) { //if the list is empty
            this.insertFirst(item); //put new node at the head
        } else {
            let tempNode = this.head; //start at the beginning
            while (tempNode.next !== null) { //while there IS a next item
                tempNode = tempNode.next; //move new item to the next spot
            }
            tempNode.next = new _Node(item, null) //when it's the last item
        };                                        //pointer is null
    };

    insertBefore(item, key) {
        if (!this.head) { //if list is empty
            console.log("List is empty")
            return; //return nothing
        };
        let currNode = this.head; //start at beginning
        let prevNode = this.head; //keep track of previous node
        while ((currNode !== null) && (currNode.value !== key)) { //while there are items in the list and you have not found the key
            prevNode = currNode; //save previouse node
            currNode = currNode.next; //current node becomes next node
        };
        if (currNode === null) { //if you reach the end of the list
            console.log(`${key} not found`) //console log error
            return; //return nothing
        };
            prevNode.next = new _Node(item, currNode);
        
        //if key is found, item will be inserted before node
        //item.next needs to equal previous.next
        //item becomes previous node to the key
    }

    insertAfter(item, key) {
        if (!this.head) { //if list is empty
            console.log("List is empty")
            return; //return nothing
        };
        let currNode = this.head; //start at beginning
        let nextNode = currNode.next; //keep track of next node
        while ((currNode !== null) && (currNode.value !== key)) { //while there are items in the list and you have not found the key
            currNode = currNode.next;
        };
        if (currNode === null) { //if you reach the end of the list
            console.log(`${key} not found`) //console log error
            return; //return nothing
        };
        if (currNode === key) { //when you find the key
            nextNode
            currNode.next = new _Node(item, null)
        }
    }

    find(item) { //retrieve item from Linked List
        let currNode = this.head; //start at the head
        if (!this.head) { //if the list is empty
            return null; //return nothing
        };
        while (currNode.value !== item) { //check for the item
            if (currNode.next === null) { //if the search reaches the end
                return null; //return nothing
            } else {
                currNode = currNode.next; //keep looking
            };
        };
        return currNode; //found it
    };

    remove(item) { //delete item from Linked list
        if (!this.head) { //check for empty list
            return null; //if empty, return nothing
        };
        if (this.head.value === item) { //if head is to be deleted
            this.head = this.head.next; //make NEXT node the head
            return;
        };
        let currNode = this.head; //start at the beginning
        let prevNode = this.head; //keep track of previous node
        while ((currNode !== null) && (currNode.value !== item)) { //while there IS a head and it's NOT the item to be deleted
            prevNode = currNode; //save previous node as the current node
            currNode = currNode.next; //current node become the NEXT node
        };
        if (currNode === null) { //if you reach the end of the list
            console.log("Item NOT found")
            return;
        };
        prevNode.next = currNode.next;
    };
};

function main() {
    let SLL = new LinkedList();
    SLL.insertFirst('Apollo');
    SLL.insertFirst('Boomer');
    SLL.insertFirst('Helo');
    SLL.insertFirst('Husker');
    SLL.insertFirst('Starbuck');
    return SLL;
}

let myLinkedList = main();
// myLinkedList.insertFirst('Tauhida');

// myLinkedList.remove('Husker');

myLinkedList.insertBefore('New', 'Apollo');
console.log(myLinkedList)