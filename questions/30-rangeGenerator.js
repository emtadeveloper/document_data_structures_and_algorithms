
//  بیاد و یک تابع بنویسید که دو تا مقدار بگیره و بیاد و بین اون مقادیر که گرفته پیمایش کنه
// یعنی اگر اومد و مقدار های 0 و 3 رو گرفت بیاد و از 0 تا عدد 3 رو در قالب یک آرایه برای ما
// بر گردونه

function formRange(min, max) {
    const output = [];
    for (let i = min; i < max; i++) output.push(i);
    return output;
}
const range = formRange(3, 10);
console.log(range);