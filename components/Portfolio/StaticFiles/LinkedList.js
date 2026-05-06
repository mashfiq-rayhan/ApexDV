export class LinkedList {
    constructor(head = null){
        this.head = head
    }
    insert(value){
        let current;
        if(this.head === null){
            this.head = new ListNode(value)
        }else{
            current = this.head
            while(current.next){
                current = current.next
            }
            current.next = new ListNode(value)
        }
        this.size++
    }
    traverse(){
        let current;
        view = []
        if(this.head === null){
            return this
        }else{
            current = this.head
            view.push(current.value)
            while(current.next){
                view.push(current.next.value)
            }
        }
        return view
    }
}
class ListNode{
    constructor(value){
        this.value = value;
        this.next = null
    }
}