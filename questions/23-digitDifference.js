/*
حداقل ۳ تا کاراکتر فاصله هست یا نه b و a یک تابع جاوا اسکریپتی بنویسید که یک عدد رو به عنوان ورودی بگیره و چک کنه که آیا بین حرف

/* راه حل من  */

// const checkDiffrenceNumber = (num) => {
//   const array = +[...num.toString()]
//   let max = +array[0];
//   let min = +array[0];
//   array.map((number) => {
//     +number > max && (max = +number);
//     +number < min && (min = +number)
//   })
//   return max - min
// }

// console.log(checkDiffrenceNumber(23)) //   1
// console.log(checkDiffrenceNumber(109634634632)) //    1
// console.log(checkDiffrenceNumber(17))//    6


//  راه حل برتر


// const checkDiffrenceNumber = (num) => {
//   var strArr = [...num.toString()].map(function (e) { return Number(e) });
//   return Math.max(...strArr) - Math.min(...strArr)
// }

// console.log(checkDiffrenceNumber(23)) //   1
// console.log(checkDiffrenceNumber(109634634632)) //    1
// console.log(checkDiffrenceNumber(17))//    6

