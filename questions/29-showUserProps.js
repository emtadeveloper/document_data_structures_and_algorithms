
// بیاین و یک آبجکت رو درست کنید که ویژگی های زیر رو داشته باشه
//obj = { name :  ,  age :  ,    adress :   { city :   ,   country }}
//  روی کی های اون پیمایش انجام بده for in و یک تابع درست کنید که بیاد و با استفاده از


const userData = {
    name: "Emad",
    age: 25,
    adress: { city: "sena", country: "IR" }
}
function showUser(user) {
    for (let key in user) console.log(key, user[key])
}
showUser(userData)
