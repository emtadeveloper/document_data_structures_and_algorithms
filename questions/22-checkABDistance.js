/*  2  //‌

حداقل ۳ تا کاراکتر فاصله هست یا نه b و a یک تابع جاوا اسکریپتی بنویسید که یک رشته رو به عنوان ورودی بگیره و چک کنه که آیا بین حرف

/* راه حل من  */

// const checkStr = (str) => {
//   const indexAU = str.indexOf("A")
//   const indexAL = str.indexOf("A")
//   const indexBU = str.indexOf("B")
//   const indexBL = str.indexOf("b")
//   if( indexBL - indexAL >= 3)  return "true"
//   if( indexBU - indexAU >= 3)  return "true"
//   if( indexBL - indexAU >= 3)  return "true"
//   if( indexBU - indexAL >= 3)  return "true"
//   return "false"
// }

// console.log(checkStr("Alab")) // true
// console.log(checkStr("Ala")) // false

//  راه حل برتر

//  میایم و از ریجکس و استفاده از متد تست استفاده میکنیم
