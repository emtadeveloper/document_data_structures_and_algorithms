
//   تابعی بنویسید که بیاد و سرعت یک ماشین رو تست کنه اگر کمتر از 70 کیلومتر بر ساعت بود بیاد و بگه اکی و اگر بیشتر بود به اضای هر
// 5 کیلومتر بیشتری یک امتیاز منفی بده و موقعی  که تعداد این امتیاز ها بیاد و بیشتر از 12 تا بشه بیاد و بگه ساسپند یا مثلا ماشین ترکید

function speedCheck(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;

    if (speed < speedLimit + kmPerPoint) {
        console.log("ok !");
    }
    const points = Math.floor((speed - speedLimit) / kmPerPoint);
    if (points < 12) console.log(points);
    else console.log("license  is   suspended");
}
console.log(speedCheck(95));