
// function composition : ترکیب کردن چند تا تابع پشت سر هم و به صورت تو در تو

let input = "   javascript     "
let outinput = "<div> + input.trim() +  </div>"

const trim = str => str.trim()
const ImInDiv = str => `<div> ${str} </div>`
const toLowerCase = str => str.toLowerCase()

const result = ImpIbDiv(toLowerCase(trim(input)))