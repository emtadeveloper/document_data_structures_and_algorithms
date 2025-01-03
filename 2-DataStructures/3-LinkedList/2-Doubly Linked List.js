/*
=====================================================================================================================================================
=====================================================================================================================================================

چیست؟ Doubly Linked List  لیست پیوندی دوطرفه 

به دو اشاره‌گر مجهز است Node لیست پیوندی دوطرفه یک نوع داده ساختاری است که در آن هر گره

- prev اشاره‌گر به گره قبلی 

- next اشاره‌گر به گره بعدی 

این ساختار امکان پیمایش در هر دو جهت را فراهم می‌کند از ابتدا به انتها و بالعکس برخلاف لیست پیوندی یک‌طرفه که فقط یک اشاره‌گر به گره بعدی دارد

این ساختار انعطاف‌پذیری بیشتری دارد اما پیچیدگی و مصرف حافظه بیشتری نیز دارد


=====================================================================================================================================================

عملیات اصلی و پیچیدگی زمانی در لینک لیست ساده  ===================================================================================================================

افزودن به انتها	O(1)

افزودن به ابتدا	O(1)

حذف از انتها	O(1)

حذف از ابتدا	O(1)

درج در موقعیت خاص               O(n)

حذف از موقعیت خاص              O(n)

پیمایش	 O(n)

=====================================================================================================================================================

کاربردهای لیست پیوندی دوطرفه ===============================================================================================================================

مدیریت حافظه بهینه: مناسب برای ساختارهایی که در آن‌ها نیاز به حذف و اضافه زیاد است

ساخت صف‌ها و پشته‌های دوطرفه: برای داده‌هایی که باید در هر دو جهت پیمایش شوند

مدیریت تب‌ها در مرورگرها: پیمایش بین صفحات قبلی و بعدی

در نرم‌افزارهایی مثل ویرایشگرهای متن undo/redo اجرای 

=====================================================================================================================================================
*/

// تعریف کلاس Node برای لیست پیوندی دوطرفه
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null; // اضافه کردن اشاره‌گر prev برای اشاره به گره قبلی
  }
}

// تعریف کلاس LinkedList برای لیست پیوندی دوطرفه
class LinkedList {
  constructor(value) {
    this.head = new Node(value); // سر لیست
    this.tail = this.head; // دم لیست
    this.length = 1; // طول لیست
  }

  // اضافه کردن به آخر لینک لیست
  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode; // لینک کردن گره قبلی به گره جدید
    newNode.prev = this.tail; // لینک کردن گره جدید به گره قبلی
    this.tail = newNode; // به‌روزرسانی دم لیست
    this.length++;
    return this;
  }

  // اضافه کردن به اول لینک لیست
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head; // لینک کردن گره جدید به گره اول
    this.head.prev = newNode; // لینک کردن گره اول به گره جدید
    this.head = newNode; // به‌روزرسانی سر لیست
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

  // اضافه کردن گره جدید به موقعیت خاص در لیست پیوندی
  insert(index, value) {
    if (index >= this.length) {
      return this.append(value);
    }
    const newNode = new Node(value);
    const leader = this.traverseToIndex(index - 1);
    const follower = leader.next;

    leader.next = newNode; // لینک کردن گره قبلی به گره جدید
    newNode.prev = leader; // لینک کردن گره جدید به گره قبلی
    newNode.next = follower; // لینک کردن گره جدید به گره بعدی
    if (follower) {
      // اگر گره بعدی موجود باشد
      follower.prev = newNode; // لینک کردن گره بعدی به گره جدید
    }
    this.length++;
    return this.printList();
  }

  // حرکت به گره در ایندکس مشخص
  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  // حذف گره در ایندکس مشخص
  remove(index) {
    const leader = this.traverseToIndex(index - 1);
    const unwantedNode = leader.next;
    const follower = unwantedNode.next;

    leader.next = follower; // لینک کردن گره قبلی به گره بعدی
    if (follower) {
      follower.prev = leader; // لینک کردن گره بعدی به گره قبلی
    }
    this.length--;
    return this.printList();
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(2, 99);
myLinkedList.insert(20, 999); // با توجه به طول لیست، گره به انتها افزوده می‌شود
myLinkedList.remove(5); // حذف گره با ایندکس 5

console.log(myLinkedList.printList()); // چاپ لیست

/* =====================================================================================================================================================
 */ // ===================================================================================================================================================
