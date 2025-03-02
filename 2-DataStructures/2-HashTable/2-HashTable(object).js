/*
=============================================================================================================================================================
=============================================================================================================================================================

چیست؟ Hash Table 

سرعت بالای آن در ثبت Hash Table  یکی از ساختار داده های اساسی است که استفاده های زیادی در توسعه نرم افزار دارد یکی از دلایل اصلی محبوبیت  Hash Table 
  
است و این نشان میدهید که هش تیبل یکی از بهترین گزینه ها برای زمان هایی O(1) و خواندن داده هاست پیچیدگی زمانی هش تیبل برای ثبت و خواندن داده به صورت  
 
است که با حجم زیادی از داده ها سر و کار داشته  باشیم هش تیبل از ترکیب آرایه و تابع هش برای مدیریت داده ها استفاده میکند که در ادامه درباره نحوه کار بیشتر صحبت

خواهیم کرد

ما در این نوع از ساختمان داد ها ترتیب نداریم 

=============================================================================================================================================================

========================================================== Hash Table  ویژگی های =================================================================================

1.      سرعت بالا در درج و حذف داده ها

یکی از مشکلاتی ما هنگام استفاده از آرایه ها داشتیم این بود که هنگام درج و حذف دیتا مجبور میشدیم که داده های دیگر را جابجا کنیم و این عملیات بسیار زمان بر بود

اما در ساختار داده هش تیبل این فرایند بهینه شده و دیگر نیازی به جابجایی داده ها نیست

2.      جستجوی سریع بین داده ها

جستجوی بین داده ها در هش تیبل بسیار سریع اتفاق می افتد در واقع ساختار داده هش تیبل داده ها را با استفاده از تابع هش به نقاط مشخصی از آرایه میفرستد در نتیجه در 

هنگام جستجو کافیست مجددا با استفاده از تابع هش همان نقطه را پیدا کند بدون اینکه نیاز باشد داده های دیگر را بررسی کند. در ادامه بیشتر درباره نحوه کار هش تیبل 

صحبت میکنیم و این مطلب واضح تر خواهد شد

3.      استفاده در دیکشنری ها و دیتابیس ها

هش تیبل به دلیل استفاده بهینه از فضا و مدیریت داده ها با سرعت بالا در دیتابیس ها کاربرد زیادی دارد. ایندکس گزاری در دیتابیس ها از طریق هش تیبل انجام میشود و 

این امکان را به ما میدهد تا عملیات ثبت حذف و جستجو را بسیار سریع تر انجام دهیم

4.      استفاده برای رمزگزاری کردن داده ها و بالا بردن امنیت

یکی از کاربرد های مهم تابع هش رمز گزاری کردن داده هاست برای مثال زمانی که بخواهیم رمز عبور کاربران را دیتابیس ذخیره کنیم ابتدا آن را با استفاده از تابع هش 

رمزنگاری میکنیم و سپس در دیتابیس ذخیره میکنیم. در این صورت ادمین دیتابیس یا هر شخص دیگری نمیتواند با بررسی دیتابیس رمز عبور کاربران را ببیند

=============================================================================================================================================================

دارند Hash Table در جاوا اسکریپت ساختارهای زیر عملکرد مشاب  ================================================================================================================

1 ) Object: برای نگاشت کلیدها به مقادیر مناسب برای کلیدهای رشته‌ای

const obj = { key: 'value' };

2 ) Map: Object نگاشت کلیدها به مقادیر، با پشتیبانی از هر نوع کلید  عملکرد بهتر نسبت به 

const map = new Map();
map.set('key', 'value');
console.log(map.get('key')); // خروجی: value

3 ) Set: برای ذخیره مجموعه‌ای از مقادیر منحصربه‌فرد

const set = new Set();
set.add(1);

=============================================================================================================================================================   

جدول هش چطور کار میکند؟  =========================================================================================================================================

همانطور که گفتیم هش تیبل با استفاده از ترکیب تابع هش و آرایه کار میکند در واقع هش تیبل یک آرایه است که بهینه شده

است کنترل اینکه داده ها در کدام  قسمت آرایه ذخیره شوند با تابع هش است

=============================================================================================================================================================

تابع هش چیست؟  ================================================================================================================================================

تابع هش یک الگوریتم محاسباتی است که یک داده را به عنوان ورودی میگیرد و یک عدد(کد هش) را به عنوان خروجی برمیگرداند تابع هش باید این دو ویژگی را داشته باشد

به ازای ورودی یکسان خروجی یکسان برگرداند اگر ما یک داده را با استفاده از تابع هش تبدیل به یک عدد کنیم باید هر بار که آن داده را در زمان های دیگر به تابع دادیم باز هم

همان عدد را به ما بدهد در  غیر این صورت تابع هش هیچ کاربردی ندارد ورودی های متفاوت را به اعداد متفاوتی تبدیل کند؛ برای مثال اگر تابع ما به ازای تمام ورودی هاعدد 1  

را برگرداند چه فایده ای میتواند داشته باشد؟

function hashFunction(key, size) {
  let hash = 0;
  for (let i = 0; i < key.length; i++) {
    hash += key.charCodeAt(i);
  }
  return hash % size;
}

============================================================================================================================================================= 

آرایه هش چیست؟  ===============================================================================================================================================

آرایه هش آرایه ای است که دیتای هش تیبل در آن ذخیره میشود اندازه این آرایه ثابت است و اینکه هر داده در کدام خانه قرار بگیرد توسط تابع هش تعیین میشود یعنی ابتدا

داده را به تابع هش میدهیم و یک عدد از آن میگیریم آن عدد نشان میدهد که آن داده در کدام خانه از آرایه ذخیره خواهد شد با بررسی یک مثال این مسئله واضح تر میشود
  
============================================================================================================================================================= 

Hash Table پیچیدگی زمانی و حافظه   ==================================================================================================================================

عملیات	بهترین حالت	بدترین حالت

Insert	       O(1)	             O(n)

Lookup	    O(1)	          O(n)
 
Delete	      O(1)	            O(n)

Search	     O(1)	           O(n)

=============================================================================================================================================================

Hash Table در Collision مدیریت  ====================================================================================================================================

زمانی اتفاق می‌افتد که تابع هش دو کلید مختلف را به یک اندیس یکسان در آرایه Hash Table  در Collision

نگاشت کند. این موضوع اجتناب‌ناپذیر است، زیرا فضای کلیدها معمولاً بزرگ‌تر از فضای آرایه است. برای مدیریت
 
روش‌هایی وجود دارد که به شما اجازه می‌دهند همچنان داده‌ها را به درستی ذخیره و بازیابی کنید. Collision

روش‌های مدیریت Collision

1 ) Chaining ( زنجیره‌سازی  ) : در هر اندیس آرایه یک لیست (آرایه یا لینک‌لیست) نگهداری می‌شود تمام مقادیر هش شده به یک اندیس در این لیست ذخیره می‌شوند

جستجو یا حذف مقادیر با بررسی لیست انجام می‌شود

2 ) Open Addressing ( نشانی‌دهی باز ) : اگر اندیسی که تابع هش برگردانده است اشغال باشد، محل دیگری برای ذخیره داده جستجو می‌شود

Open Addressing : انواع

- Linear Probing: حرکت خطی در آرایه برای یافتن فضای خالی

- Quadratic Probing: حرکت غیرخطی با فاصله‌های مربعی

- Double Hashing: استفاده از یک تابع هش دوم برای پیدا کردن مکان جدید

============================================================================================================================================================= 

در جاوا اسکریپت  Hash Table ایجاد یک 

=============================================================================================================================================================
*/
class HashTable {
  constructor(size = 10) {
    this.table = new Array(size); // آرایه برای ذخیره مقادیر
  }

  // تابع هش: تبدیل کلید به یک اندیس
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.table.length;
  }

  // افزودن مقدار به هش تیبل
  set(key, value) {
    const index = this._hash(key);

    if (!this.table[index]) {
      this.table[index] = []; // ایجاد لیست جدید در صورت نبودن
    }

    // بررسی کلید برای جلوگیری از داده‌های تکراری
    for (let pair of this.table[index]) {
      if (pair[0] === key) {
        pair[1] = value; // به‌روزرسانی مقدار
        return;
      }
    }

    this.table[index].push([key, value]); // اضافه کردن داده جدید
  }

  // دریافت مقدار با کلید
  get(key) {
    const index = this._hash(key);

    if (this.table[index]) {
      for (let pair of this.table[index]) {
        if (pair[0] === key) {
          return pair[1];
        }
      }
    }

    return undefined; // کلید یافت نشد
  }

  // حذف مقدار
  delete(key) {
    const index = this._hash(key);

    if (this.table[index]) {
      this.table[index] = this.table[index].filter((pair) => pair[0] !== key);
    }
  }
}

// استفاده از HashTable
const myHashTable = new HashTable();

// افزودن داده‌ها
myHashTable.set("name", "Ali");
myHashTable.set("age", 25);
myHashTable.set("job", "Developer");

// دریافت داده‌ها
console.log(myHashTable.get("name")); // خروجی: Ali
console.log(myHashTable.get("job")); // خروجی: Developer

// حذف داده
myHashTable.delete("age");
console.log(myHashTable.get("age")); // خروجی: undefined

// =============================================================================================================================================================
// =============================================================================================================================================================
