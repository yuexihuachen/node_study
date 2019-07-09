// document.getElementById=(function(func){
//     return function(){
//         return func.apply(document,arguments);
//     }
// })(document.getElementById);

// let getId=document.getElementById;

// let getId=(function(){
//     return function(){
//         return document.getElementById.apply(document,arguments);
//     }
// })();

// let log=console.log;

// let btn1=getId('btn1'),
//     btn2=getId('btn2'),
//     btn3=getId('btn3');

// let funLish={
//     eventOne:function(){
//         log('btn1');
//     },
//     eventTwo:function(){
//         log('btn2');
//     },
//     eventThree:function(){
//         log('btn3');
//     }
// };

// function Node(element) {
//     this.element = element;
//     this.next = null;
//     this.previous=null;
// }
// function LList() {
//     this.head = new Node("head"); 
//     this.find = find;
//     this.insert = insert; 
//     //this.findPrevious = findPrevious; 
//     this.remove = remove; 
//     this.display = display;
// }
// function find(item) {
//     let target=this.head;
//     while(target.element!=item){
//         target=target.next;
//     }
//     return target;
// }
// function insert(newElement, item) { 
//     let newNode=new Node(newElement);
//     let target=this.find(item);
//     newNode.next=target.next;
//     newNode.previous=target;
//     target.next=newNode;
// }
// // function findPrevious(item) {
// //     let target=this.head;
// //     while(!(target.next!=null) && target.next.element!=item){
// //         target=target.next;
// //     }
// //     return target;
// // }
// function remove(item) {
//     let target=this.find(item);
//     if(!target.next!=null){
//         target.previous.next=target.next;
//         target.next.previous=target.previous;
//         target.next=target.previous=null;
//     }
// }
// function display() {
//     let item=this.head;
//     while(!(item.next == null)){
//         console.log(item);
//         item=item.next;
//     }
// }

// // 主程序
// var cities = new LList();
// cities.insert("Conway", "head");
// cities.insert("Russellville", "Conway");
// cities.insert("Alma", "Russellville");
// cities.display()


// let head='1';
// function Node(element) {
//     this.element = element;
//     this.next = null;
// }
// function LList() {
//     this.head = new Node(head); 
//     this.count=1;
//     this.head.next=this.head;
//     this.find = find;
//     this.insert = insert; 
//     this.findPrevious = findPrevious; 
//     this.remove = remove; 
//     this.display = display;
// }
// function find(item) {
//     let target=this.head;
//     while(target.element!=item){
//         target=target.next;
//     }
//     return target;
// }
// function insert(newElement, item) { 
//     let newNode=new Node(newElement);
//     let target=this.find(item);
//     newNode.next=target.next;
//     target.next=newNode;
//     this.count++;
// }
// function findPrevious(item) {
//     let target=this.head;
//     while(!(target.next!=null) && target.next.element!=item){
//         target=target.next;
//     }
//     return target;
// }
// function remove(item) {
//     let preNode=this.findPrevious(item);
//     if(!preNode.next!=null){
//         preNode.next=preNode.next.next;
//         this.count--;
//     }
// }
// function display() {
//     let item=this.head;
//     while(!(item.next == null) && !(item.next.element==head)){
//         console.log(item);
//         item=item.next;
//     }
// }

// // 主程序
// var cities = new LList();
// for(let i=1;i<40;i++){
//     let tar=i.toString();
//     let pre=(i+1).toString();
//     cities.insert(pre, tar);
// }




