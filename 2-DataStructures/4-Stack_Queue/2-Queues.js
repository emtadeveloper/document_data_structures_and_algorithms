/*
=============================================================================================================================================================
=============================================================================================================================================================

Queue  ساختار داده  (صف)

یا "اولین وارد شده، اولین خارج می‌شود" است یعنی همانطور FIFO یا صف، یکی از ساختارهای داده‌ای خطی است که ترتیب ورود و خروج عناصر در آن به صورت Queue

که در صف‌های واقعی (مثل صف بانک یا صف اتوبوس) افراد به ترتیب وارد و خارج می‌شوند، در این ساختار نیز داده‌ها به ترتیب وارد صف می‌شوند و به همین ترتیب از 
 
صف خارج می‌گردند

=============================================================================================================================================================

Queue عملیات اصلی در  ============================================================================================================================================

enqueue (اضافه کردن به صف): اضافه کردن یک عنصر به انتهای صف

dequeue (حذف از صف): حذف و بازگرداندن عنصر از ابتدای صف

peek (مشاهده اولین عنصر): مشاهده اولین عنصر صف بدون حذف آن

isEmpty (بررسی خالی بودن صف): بررسی اینکه آیا صف خالی است یا نه

getSize (گرفتن اندازه صف): گرفتن تعداد عناصر موجود در صف

=============================================================================================================================================================

پیچیدگی زمانی برای عملیات مختلف در Queue: =============================================================================================================================

enqueue (اضافه کردن): است O(1) در هر سه پیاده‌سازی (آرایه، لینک لیست، استک) پیچیدگی زمانی این عملیات 
 
dequeue (حذف): است O(1) است زیرا نیاز به جابه‌جایی تمام عناصر باقی‌مانده داریم. در پیاده‌سازی با لینک لیست یا استک، پیچیدگی زمانی O(n) در پیاده‌سازی با آرایه، پیچیدگی زمانی این عملیات 

peek (مشاهده اولین عنصر): است O(1)  در هر سه پیاده‌سازی پیچیدگی زمانی این عملیات 

isEmpty (بررسی خالی بودن صف): است O(1) پیچیدگی زمانی 

getSize (گرفتن اندازه صف): است O(1) پیچیدگی زمانی 

=============================================================================================================================================================

1. پیاده‌سازی با استفاده از آرایه:

*/
class Queue_array {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element); // اضافه کردن به انتهای صف
  }

  dequeue() {
    if (this.isEmpty()) return null;
    return this.items.shift(); // حذف و بازگرداندن عنصر اول صف
  }

  peek() {
    if (this.isEmpty()) return null;
    return this.items[0]; // مشاهده اولین عنصر بدون حذف آن
  }

  isEmpty() {
    return this.items.length === 0; // بررسی خالی بودن صف
  }

  getSize() {
    return this.items.length; // گرفتن اندازه صف
  }
}

const myQueue_array = new Queue_array();
myQueue_array.enqueue(10);
myQueue_array.enqueue(20);
myQueue_array.enqueue(30);
console.log(myQueue_array.peek()); // 10
console.log(myQueue_array.dequeue()); // 10
console.log(myQueue_array.getSize()); // 2

// =============================================================================================================================================================

// 2. پیاده‌سازی با استفاده از لینک لیست

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class QueueLinkList {
  constructor() {
    this.front = null; // جلوی صف
    this.rear = null; // انتهای صف
    this.size = 0;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.front = this.rear = newNode;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
    }
    this.size++;
  }

  dequeue() {
    if (this.isEmpty()) return null;
    const dequeuedValue = this.front.value;
    this.front = this.front.next;
    if (this.front === null) this.rear = null; // اگر صف خالی شد
    this.size--;
    return dequeuedValue;
  }

  peek() {
    if (this.isEmpty()) return null;
    return this.front.value;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }
}

const myQueueLinkList = new QueueLinkList();
myQueueLinkList.enqueue(10);
myQueueLinkList.enqueue(20);
myQueueLinkList.enqueue(30);
console.log(myQueueLinkList.peek()); // 10
console.log(myQueueLinkList.dequeue()); // 10
console.log(myQueueLinkList.getSize()); // 2

// =============================================================================================================================================================

// 3. پیاده‌سازی با استفاده از استک:
// در این پیاده‌سازی از دو استک برای شبیه‌سازی عملیات صف استفاده می‌شود

class QueueStack {
  constructor() {
    this.stack1 = []; // استک اول برای enqueue
    this.stack2 = []; // استک دوم برای dequeue
  }

  enqueue(value) {
    this.stack1.push(value); // اضافه کردن به استک اول
  }

  dequeue() {
    if (this.isEmpty()) return null;

    // اگر استک دوم خالی است، تمام عناصر استک اول را به استک دوم منتقل می‌کنیم
    if (this.stack2.length === 0) {
      while (this.stack1.length > 0) {
        this.stack2.push(this.stack1.pop());
      }
    }
    return this.stack2.pop(); // حذف و بازگرداندن عنصر اول صف
  }

  peek() {
    if (this.isEmpty()) return null;

    // اگر استک دوم خالی است، تمام عناصر استک اول را به استک دوم منتقل می‌کنیم
    if (this.stack2.length === 0) {
      while (this.stack1.length > 0) {
        this.stack2.push(this.stack1.pop());
      }
    }
    return this.stack2[this.stack2.length - 1]; // مشاهده اولین عنصر
  }

  isEmpty() {
    return this.stack1.length === 0 && this.stack2.length === 0;
  }

  getSize() {
    return this.stack1.length + this.stack2.length;
  }
}

const myQueueStack = new QueueStack();
myQueueStack.enqueue(10);
myQueueStack.enqueue(20);
myQueueStack.enqueue(30);
console.log(myQueueStack.peek()); // 10
console.log(myQueueStack.dequeue()); // 10
console.log(myQueueStack.getSize()); // 2

// =============================================================================================================================================================
// =============================================================================================================================================================
