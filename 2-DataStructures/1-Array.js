/*
=======================================================================================================================================================================
آرایه چیست؟  =============================================================================================================================================================

آرایه مجموعه‌ای از عناصر است که در حافظه به صورت متوالی ذخیره می‌شوند. هر عنصر در آرایه یک اندیس دارد که به شما اجازه می‌دهد به آن دسترسی پیدا کنید

آرایه‌های استاتیک (Static Arrays)  =============================================================================================================================================

ویژگی‌ها

1  ) اندازه‌ی ثابت دارند 

2  ) هنگام تعریف آرایه، باید اندازه آن مشخص شود

3  ) نمی‌توانید بعداً عناصر جدیدی اضافه کنید یا اندازه آن را تغییر دهید

4  )  استفاده بهینه‌تر از حافظه

5 ) BigO(1) دسترسی مستقیم به عناصر با اندیس مشخص با پیچیدگی زمانی   

معایب:

1  ) انعطاف‌پذیری کمتر عدم امکان تغییر اندازه

2 ) اگر اندازه نامناسب انتخاب شود، ممکن است حافظه هدر رود

مثال در جاوااسکریپت: جاوااسکریپت به‌صورت پیش‌فرض آرایه‌های داینامیک دارد، اما می‌توان آرایه‌های استاتیک را شبیه‌سازی کرد:

const staticArray = new Array(5); // آرایه با اندازه ثابت 5

staticArray[0] = 10;
staticArray[1] = 20;

console.log(staticArray);

آرایه‌های داینامیک (Dynamic Arrays) ============================================================================================================================================

ویژگی‌ها :

1  ) اندازه‌ی متغیر دارند

2 ) می‌توانید عناصر جدید اضافه یا حذف کنید

3 ) انعطاف‌پذیری بیشتر

4 ) مناسب برای کاربردهایی که اندازه آرایه در ابتدا مشخص نیست

معایب :

1 ) گاهی نیاز به تخصیص مجدد حافظه دارد که ممکن است هزینه‌بر باشد.

مثال در جاوااسکریپت:

let dynamicArray = []; // آرایه داینامیک

dynamicArray.push(10); // افزودن عنصر

dynamicArray.push(20);

console.log(dynamicArray); // [10, 20]

dynamicArray.pop(); // حذف آخرین عنصر

console.log(dynamicArray); // [10]

آرایه‌های داینامیک وقتی پر می‌شوند اندازه‌شان دو برابر می‌شود. این فرآیند باعث تخصیص مجدد حافظه می‌شود. پیچیدگی کلی این تخصیص‌ها

در نظر گرفته می‌شود BigO(1) تحلیل میانگین افزودن عنصر جدید همچنان amortized analysis است اما به دلیل O(n)

====================================================== عملیات رایج روی آرایه‌ها و پیچیدگی زمانی =================================================================================

1 ) دسترسی

O(1) دسترسی به عنصر با استفاده از اندیس  پیچیدگی زمانی

2 ) جستجو

O(n) یافتن یک عنصر خاص

3)  افزودن به انتها

O(1) اضافه کردن عنصر به انتهای آرایه

4 )  افزودن به ابتدا

O(n) اضافه کردن عنصر به ابتدای آرایه

5 )  حذف از انتها	

O(1) حذف عنصر از انتهای آرایه

6 ) حذف از ابتدا	

O(n) حذف عنصر از ابتدای آرایه

======================================================================= اشیاء (Objects) ===========================================================================

هستند (Key-Value)  اشیاء داده‌های کلیدی-مقداری 

1 ) O(1) افزودن/به‌روزرسانی یک مقدار

2 ) O(1)  دسترسی به یک مقدار

3 ) O(1) حذف یک کلید

4 ) O(n) جستجو برای یک کلید خاص:

=============================================================================================================================================================
=============================================================================================================================================================
*/

class CustomArray {
  constructor() {
    this.data = {}; // داده‌های آرایه به صورت شیء ذخیره می‌شوند
    this.length = 0; // طول فعلی آرایه
  }

  // افزودن عنصر به انتهای آرایه
  push(element) {
    this.data[this.length] = element;
    this.length++;
    return this.length; // بازگشت طول جدید آرایه
  }

  // حذف عنصر از انتهای آرایه
  pop() {
    if (this.length === 0) return undefined;

    const lastElement = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastElement; // بازگشت عنصر حذف شده
  }

  // دسترسی به عنصر با استفاده از اندیس
  get(index) {
    if (index < 0 || index >= this.length) return undefined;
    return this.data[index];
  }

  // افزودن عنصر به اندیس مشخص
  insert(index, element) {
    if (index < 0 || index > this.length) return false;

    // جابه‌جا کردن عناصر برای ایجاد فضای خالی
    for (let i = this.length; i > index; i--) {
      this.data[i] = this.data[i - 1];
    }

    this.data[index] = element;
    this.length++;
    return true;
  }

  // حذف عنصر با اندیس مشخص
  delete(index) {
    if (index < 0 || index >= this.length) return undefined;

    const deletedElement = this.data[index];
    this._shiftItems(index);
    return deletedElement; // بازگشت عنصر حذف شده
  }

  // جابه‌جا کردن عناصر پس از حذف یک عنصر
  _shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }

  // جستجوی عنصر در آرایه (بر اساس مقدار)
  find(element) {
    for (let i = 0; i < this.length; i++) {
      if (this.data[i] === element) {
        return i; // بازگشت اندیس عنصر
      }
    }
    return -1; // در صورت نبودن عنصر
  }

  // نمایش آرایه به صورت رشته
  toString() {
    let result = "";
    for (let i = 0; i < this.length; i++) {
      result += this.data[i];
      if (i < this.length - 1) result += ", ";
    }
    return `[${result}]`;
  }

  // حذف تمام عناصر آرایه
  clear() {
    this.data = {};
    this.length = 0;
  }
}

// استفاده از کلاس
const myArray = new CustomArray();

// افزودن عناصر
myArray.push("علی");
myArray.push("زهرا");
myArray.push("محمد");
console.log(myArray.toString()); // خروجی: [علی, زهرا, محمد]

// دسترسی به عنصر با اندیس
console.log(myArray.get(1)); // خروجی: زهرا

// جستجوی عنصر
console.log(myArray.find("محمد")); // خروجی: 2

// افزودن عنصر به اندیس مشخص
myArray.insert(1, "رضا");
console.log(myArray.toString()); // خروجی: [علی, رضا, زهرا, محمد]

// حذف از انتها
console.log(myArray.pop()); // خروجی: محمد

// حذف با اندیس مشخص
console.log(myArray.delete(0)); // خروجی: علی

// نمایش آرایه باقی‌مانده
console.log(myArray.toString()); // خروجی: [رضا, زهرا]

// پاک کردن آرایه
myArray.clear();
console.log(myArray.toString()); // خروجی: []

// =============================================================================================================================================================
// =============================================================================================================================================================
