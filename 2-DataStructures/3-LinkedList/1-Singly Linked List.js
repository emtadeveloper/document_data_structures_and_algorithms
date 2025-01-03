/*
=============================================================================================================================================================
=============================================================================================================================================================

ما به طور کلی دو نوع لینک لیست داریم

1 - Singly Linked List

=============================================================================================================================================================

عملیات اصلی و پیچیدگی زمانی در لینک لیست ساده  ==========================================================================================================================

prepend O(1) افزودن در انتها	

append  O(1)  افزودن در ابتدا
  
lookup   O(n) جستجو   و  پیمایش

insert     O(n)  افزودن در مکان خاص

delete    O(n)  حذف از انتها   حذف از مکان خاص

delete    O(1)  حذف از ابتدا	

=============================================================================================================================================================

مثال ساده ای از یک لینک لیست در جاوا اسکریپت 

1 --> 5 --->  16

*/

let linkedList = {
  head: {
    value: 10,
    next: {
      value: 5,
      next: {
        value: 16,
        next: null,
      },
    },
  },
};

// =============================================================================================================================================================

//   ساخت یک لینک لیست با استفاده از کلاس ها در جاوا اسکریپت

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = { value: value, next: null };
    this.tail = this.head;
    this.length = 1;
  }

  // اضافه کردن به آخر لینک لیست
  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  // اضافه کردن به اول لینک لیست
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  // چاپ لینک لیست
  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }

  //  برای اضافه کردن یک گره جدید با مقدار مشخص به موقعیت خاص در لیست پیوندی طراحی شده است. اگر ایندکس بزرگ‌تر یا برابر طول لیست باشد

  //   گره مستقیماً به انتهای لیست اضافه می‌شود در غیر این صورت تابع ابتدا گره‌ای را که قبل از موقعیت موردنظر قرار دارد پیدا می‌کند و سپس گره جدید

  //   را با تنظیم اشاره‌گرها بین گره قبلی و بعدی وارد لیست می‌کند. در نهایت، طول لیست به‌روزرسانی می‌شود و لیست جدید بازگردانده می‌شود

  insert(index, value) {
    if (index >= this.length) {
      return this.append(value);
    }
    const newNode = new Node(value);
    const leader = this.traverseToIndex(index - 1);
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
    return this.printList();
  }

  // حرکت به گره در ایندکس مشخص

  //  به عنوان یک تابع کمکی عمل می‌کند و برای یافتن گره‌ای که در یک موقعیت مشخص قرار دارد استفاده می‌شود. این تابع با شروع از ابتدای لیست

  //  ایفا می‌کند تا مکان دقیق برای insert گره‌ها را یکی یکی پیمایش می‌کند و با افزایش شمارنده، گره موردنظر را پیدا می‌کند این تابع نقش کلیدی در

  //    اضافه کردن گره جدید مشخص شود

  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  remove(index) {
    const leader = this.traverseToIndex(index - 1);

    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    this.length--;
    return this.printList();
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(2, 99);
myLinkedList.insert(20, 999);
myLinkedList.remove(5);

console.log(myLinkedList.printList());

/* =============================================================================================================================================================
 */ // =============================================================================================================================================================
