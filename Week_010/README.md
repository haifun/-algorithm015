#### 学习总结

##### 栈与队列简介

在计算机领域离不开算法和数据结构，而在数据结构中尤为重要与基础的便是两个线性数据结构：栈与队列。


* 栈(Stack)是一种后进先出(last in first off，LIFO)的数据结构。
* 队列(Queue)则是一种先进先出 (fisrt in first out，FIFO)的结构。


栈是一种线性结构，与数组相比，栈对应的操作是数组的子集。它只能从一端添加元素，也只能从一端取出元素(这一端称之为栈顶)。这个时候大家就可以在脑海中想象一下，或者画个图。Stack这种数据结构用途很广泛，在计算机的使用中，大量的运用了栈，比如编译器中的词法分析器、Java虚拟机、软件中的撤销操作（Undo）、浏览器中的回退操作，编译器中的函数调用实现等等。

代码实现

```
function Stack(){

    let items = [];
    //push方法
    this.push = function(element){
        items.push(element);
    }
    //pop方法
    this.pop = function(){
        return items.pop();
    }
    //peek方法
    this.peek = function(){
        return items[items.length-1];
    }
    //isEmpty方法
    this.isEmpty = function(){
        return items.length == 0;
    }
    //clear方法
    this.clear = function(){
        items=[];
    }
    //size方法
    this.size = function(){
        return items.length;
    }
}
//使用栈
let stack = new Stack();
console.log(stack.isEmpty());    //true
stack.push(1);
stack.push(5);
console.log(stack.size());      //2
console.log(stack.peek());      //5
console.log(stack.pop());       //5
stack.clear();
console.log(stack.isEmpty());   //true
```

* 队列

队列是遵循先进先出原则的一组有序的项，队列在尾部添加新元素，并从顶部移除元素。

代码实现

```
function Quene(){
    let items = [];
    //enquene方法
    this.enquene = function(element){
        items.push(element);
    }
    //dequene方法
    this.dequene = function(){
        return items.shift();
    }
    //front方法
    this.front = function(){
        return items[0];
    }
    //isEmpty方法
    this.isEmpty = function(){
        return items.length == 0;
    }
    //clear方法
    this.clear= function(){
        items = [];
    }
    //size方法
    this.size = function(){
        return items.length;
    }
}
//使用队列
let quene= new Quene();
console.log(quene.isEmpty());    //true
quene.enquene(1);
quene.enquene(5);
console.log(quene.size());      //2
console.log(quene.front());     //1
console.log(quene.dequene());   //1
quene.clear();
console.log(quene.isEmpty());   //true
```

* if-else, switch -> branch

* for, while loop -> iteration

* 递归 Recursion（Divide conquer）

	基本模板

 * 递归终止条件；
 * 处理当前层；
 * 下探到下一层；
 * 恢复当前层的状态；

* 搜索 Search: 深度优先搜索 DFS, 广度优先搜索BFS


* 动态规划

* 二分查找
* 贪心
* 数学
