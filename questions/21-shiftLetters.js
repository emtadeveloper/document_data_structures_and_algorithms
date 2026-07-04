/*

یک تابع بنویسید که بیاد و یک رشته رو به عنوان ورودی بگیره و هر حرف یک رشته رو با حروف بعدی اش تو الفبا جایگزین کنه و بر گردونه
*/

/* راه حل من  */

// const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
// "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

// const  changeStr = (str)=>{
//   let finalStr = str.trim()
//   const strToArray = [...finalStr];
//   strToArray.map((char)=>{
//    let index =   alphabet.findIndex((str)=> str === char)
//    if(index == 25)  index = -1
//    if(index == 51)  index = -1
//    finalStr = finalStr.replace(char, alphabet[index+1])
//   })
//   return finalStr
// }

// console.log(changeStr("emad" ))  // fnbe

//  راه حل برتر

// function LetterChanges(text) {
//   let s = text.split('');
//   for (var i = 0; i < s.length; i++) {
//     switch (s[i]) {
//       case ' ':
//         break;
//       case 'z':
//         s[i] = 'a';
//         break;
//       case 'Z':
//         s[i] = 'A';
//         break;
//       default:
//         s[i] = String.fromCharCode(1 + s[i].charCodeAt(0));
//     }
//   }
//   return s.join('');
// }
// console.log(LetterChanges("PYTHON")); //QZUIPO
// console.log(LetterChanges("W3R")); //X4S
// console.log(LetterChanges("phpA")); //qiq
