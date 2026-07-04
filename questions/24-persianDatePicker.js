/*
یک تابع جاوا اسکریپتی بنویسید که یک تاریخ رو به عنوان ورودی بگیره و با تاریخ امروز مقایسه کنه
و به صورت زیر چاپ کنه
اگر تاریخ برای امروز بود باید اینطوری خروجی داشته باشه
امروز ۹ آبان ۱۴۰۱
دیروز ۸ آبان ۱۴۰۱
سه شنبه ۱۴ فروردین ۱۴۰۱

/* راه حل من  */

// const DAY_MILLISECONDS = 60 * 60 * 24 * 1000;

// const DataPickers = (data) => {
//   const todayData = new Date().getTime()
//   const rtf = new Intl.RelativeTimeFormat('fa', { numeric: 'auto', });
//   const faDateDay = new Intl.DateTimeFormat("fa", { day: "numeric" })
//   const faDateYear = new Intl.DateTimeFormat("fa", { year: "numeric" })
//   const faDateMounth = new Intl.DateTimeFormat("fa", { month: "long" })
//   const faDateWeeknd = new Intl.DateTimeFormat("fa", { weekday: "long" })
//   const daysDifference = Math.round(todayData - data) / DAY_MILLISECONDS
//   let finalVal = ` ${faDateDay.format(data)} ${faDateMounth.format(data)} ${faDateYear.format(data)} `
//   if (daysDifference < 1) {
//     return finalVal = rtf.format(0, "day") + finalVal
//   }
//   if (daysDifference < 2) {
//     return finalVal = rtf.format(-1, "day") + finalVal
//   }
//   return faDateWeeknd.format(data) + finalVal
// }
// console.log(DataPickers(new Date("2022-08-15").getTime()));

// console.log(DataPickers(new Date("2022-08-30").getTime()));

// // ️ yesterday
// console.log(DataPickers(new Date("2022-10-30").getTime()));

// // ️ today
// console.log(DataPickers(new Date().getTime()))
