// بده Buzz بر میگردونه و اگر اعداد بر 5 بخش پذیر بودن بیاد و  Fizz تابعی بنویسید که اعدادی رو که بر 3 بخش پذیر باشند رو بیاد و به ما رشته

function fizzBuzz(number) {
    if (typeof number !== "number") return "not a number";
    if (number % 3 === 0 && number % 5 === 0) return "FizzBuzz";
    if (number % 3 === 0) return "Fizz";
    if (number % 5 === 0) return "Buzz";
    return number
}