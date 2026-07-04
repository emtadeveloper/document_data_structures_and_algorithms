/*
=======================================================================================================================================================
=======================================================================================================================================================

یعنی ذخیره نتیجه یک محاسبه یا درخواست برای استفاده‌های بعدی، تا دوباره پردازش نشود Cache

برسیم O(1)  هست اش تا به  Map Object در جاوااسکریپت با استفاده از HashMap

*/

const cache = new Map();

function getUser(id) {
    if (cache.has(id)) {
        console.log("from cache");
        return cache.get(id);
    }
    console.log("from source");
    const user = { id, name: `User ${id}` };
    cache.set(id, user);
    return user;
}

function memoize(fn) {
    const cache = new Map();
    return function (...args) {
        const key = JSON.stringify(args);
        if (cache.has(key)) return cache.get(key);
        const result = fn(...args);
        cache.set(key, result);
        return result;
    };
}

const slowAdd = (a, b) => { /* محاسبه سنگین */ return a + b; };
const fastAdd = memoize(slowAdd);

// =======================================================================================================================================================
// =======================================================================================================================================================
