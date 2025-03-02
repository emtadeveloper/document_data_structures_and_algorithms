/*
=============================================================================================================================================================
=============================================================================================================================================================

Graph :را مشخص میکند  Nodes با Edges تشکیل شده است که ارتباط بین  Edges  و یال ها  Nodes Vertices یک ساختار داده است که از مجموعه ای راس ها 

=============================================================================================================================================================

انواع گراف‌ها ====================================================================================================================================================

1 ) وزن‌دار ( Weighted ) :

یال‌ها دارای مقدار (وزن) هستند که نشان‌دهنده هزینه، فاصله یا مقدار دیگری است مثال: گرافی که مسافت بین شهرها را نمایش می‌دهد

2 ) غیر وزن‌دار ( Unweighted ) :

یال‌ها فقط ارتباط بین راس‌ها را نشان می‌دهند و مقدار خاصی ندارند مثال: گرافی که نشان‌دهنده ارتباط دوستان در شبکه‌های اجتماعی است


3 ) جهت‌دار ( Directed ) :

یال‌ها جهت‌دار هستند و مسیر ارتباط از یک راس به راس دیگر مشخص است مثال: گرافی برای نشان دادن ارتباطات یک‌طرفه در شبکه‌های اجتماعی


4  ) غیر جهت‌دار ( Undirected ) :

یال‌ها بدون جهت هستند، یعنی ارتباط بین راس‌ها دوطرفه است مثال: گرافی که نشان‌دهنده مسیرهای دوطرفه بین شهرهاست

=============================================================================================================================================================

روش‌های نمایش گراف  =============================================================================================================================================

1. Edge List  : یال‌ها را به صورت لیستی از زوج‌ها نمایش می‌دهد Edge 

const graph = [    [0, 1],    [0, 2],    [1, 2],     [1, 3] ];

O(E) گرفتن همسایگان یک راس O(E) بررسی وجود یال O(1) پیچیدگی زمانی :  افزودن یک یال 

2. Adjacent List : هر راس یک آرایه دارد که راس‌های متصل به آن را نشان می‌دهد

const graph = [  [2] , [2,3]  , [0,1,3]  ,  [1 , 2 ]  ]

O(1) گرفتن همسایگان یک راس O(k) بررسی وجود یال O(1) پیچیدگی زمانی :  افزودن یک یال 

3.Adjacent Matrix  : از یک ماتریس دوبعدی برای نشان دادن ارتباطات استفاده می‌کند مقدار 1  یا وزن در ماتریس نشان‌دهنده ارتباط است

O(v) گرفتن همسایگان یک راس O(1) بررسی وجود یال O(1) پیچیدگی زمانی :  افزودن یک یال 

const adjacentMatrix =  {

  0 :  [0, 1, 1, 0],

  1 : [1, 0, 1, 1],

  2:  [1, 1, 0, 0],

  3:  [0, 1, 0, 0]

}

=============================================================================================================================================================

گراف‌ها از چه نوع ساختمان داده‌هایی استفاده می‌کنند؟   ========================================================================================================================

1 - لیست‌ها : برای لیست مجاور از آرایه یا اشیاء استفاده می‌شود

2 - ماتریس‌ها: ماتریس‌ها معمولاً برای گراف‌های متراکم استفاده می‌شوند

=============================================================================================================================================================

کاربردهای گراف‌ها   ================================================================================================================================================

شبکه‌های اجتماعی: نمایش ارتباط بین افراد

سیستم‌های مسیریابی: پیدا کردن مسیر کوتاه در نقشه‌ها (مثل گوگل مپ)

شبکه‌های کامپیوتری: تحلیل ارتباطات بین دستگاه‌ها

مدیریت پروژه: استفاده از گراف‌های جهت‌دار برای مدل‌سازی وظایف وابسته

=============================================================================================================================================================
=============================================================================================================================================================

BFS پیدا کردن مسیر کوتاه با 
*/

function bfs(graph, start, end) {
  const queue = [start];
  const visited = new Set();
  const path = {};

  while (queue.length) {
    const current = queue.shift();
    if (current === end) break;

    for (const neighbor of graph[current]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        path[neighbor] = current;
        queue.push(neighbor);
      }
    }
  }

  const result = [];
  let node = end;
  while (node) {
    result.unshift(node);
    node = path[node];
  }

  return result;
}

// استفاده
const graph = {
  A: ["B", "C"],
  B: ["A", "D", "E"],
  C: ["A", "F"],
  D: ["B"],
  E: ["B", "F"],
  F: ["C", "E"],
};

console.log(bfs(graph, "A", "F")); // ["A", "C", "F"]

// =============================================================================================================================================================
// =============================================================================================================================================================
