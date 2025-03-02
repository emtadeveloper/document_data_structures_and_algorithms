/*
=====================================================================================================================================================================
=====================================================================================================================================================================

Bubble Sort  : یکی از ساده‌ترین الگوریتم‌های مرتب‌سازی است. این الگوریتم با مقایسه جفت عناصر مجاور و جابه‌جا کردن آنها (در صورت نیاز) کار می‌کند

این فرآیند آنقدر تکرار می‌شود تا کل آرایه مرتب شود به صورت دوتا دوتا مقایسه میکنه و بزرگ ترین رو انتخاب میکنم

است O( n ^ 2 ) و در حالت معمولی و بدترین حالت O(n) پیچدیگی زمانی این الگوریتم در بهترین حالت

=====================================================================================================================================================================

Bubble Sort  نحوه عملکرد ==================================================================================================================================================

1 - مقایسه جفت عناصر مجاور : اگر عنصر سمت چپ بزرگ‌تر از عنصر سمت راست باشد، آنها را جابه‌جا کنید در غیر این صورت، به جفت بعدی بروید

2- حرکت بزرگ‌ترین عنصر به انتهای آرایه : در هر مرحله، بزرگ‌ترین عنصر در مکان درست خود قرار می‌گیرد (مانند حبابی که به سطح آب می‌آید)

3- تکرار مراحل برای باقی آرایه  :   مراحل فوق را برای بخش باقی‌مانده آرایه (به جز عناصر مرتب‌شده) تکرار کنید

4- پایان کار  : زمانی که در یک پاس هیچ جابه‌جایی انجام نشود، آرایه مرتب است

=====================================================================================================================================================================

در جاوااسکریپت Bubble Sort پیاده‌سازی =======================================================================================================================================

*/
function bubbleSort(arr) {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      // مقایسه دو عنصر مجاور
      if (arr[j] > arr[j + 1]) {
        // جابه‌جا کردن عناصر
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

const array = [5, 3, 8, 4, 2];
console.log(bubbleSort(array));

// =====================================================================================================================================================================
// =====================================================================================================================================================================
