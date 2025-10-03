// console.log("Callback Funcions & Asynchronous functions");

// const onamBuyruqlari = [
//   "Abed vaqti bo'ldi yur kettik uxlaymiz", // 2 <> 9
//   "Kech kirdi uyga kir tezroq, ustingni qara ***", // 9 <> 12
//   "Mollarga o't ber, suvini ber, bor mollarni boqib mo* ***", // 12 <> 20
//   "Qachon kelasan bolam ...", // 20 <>
// ];

// const action = async (a) => {
//   if (typeof a !== "number") throw new Error("Please insert a number", null);
//   else if (a >= 2 && a <= 9) return onamBuyruqlari[0];
//   else if (a > 9 && a <= 12) return onamBuyruqlari[1];
//   else if (a > 12 && a <= 20) return onamBuyruqlari[2];
//   else {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(onamBuyruqlari[3]);
//       }, 2000);
//     });
//   }
// };

// const run = async () => {
//   let result = await action(45);
//   console.log(result);
// };

// run();

// Callbacks
// const action = (a, callback) => {
//   if (typeof a !== "number") callback("Please insert a number", null);
//   else if (a >= 2 && a <= 9) callback(null, onamBuyruqlari[0]);
//   else if (a > 9 && a <= 12) callback(null, onamBuyruqlari[1]);
//   else if (a > 12 && a <= 20) callback(null, onamBuyruqlari[2]);
//   else if (a > 20) callback(null, onamBuyruqlari[3]);
// };

// action(45, (err, data) => {
//   if (err) console.log("Error", err);
//   else {
//     console.log(data);
//   }
// });

// function countDigits(str) {
//   let count = 0;
//   for (let char of str) {
//     if (!isNaN(char) && char !== " ") {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(countDigits("salom"));

// function checkContent(str1, str2) {
//   return str1.split("").sort().join("") === str2.split("").sort().join("");
// }

// console.log(checkContent("salom", "lmosa"));

// class Shop {
//   constructor(non, lagmon, cola) {
//     this.products = {
//       non,
//       lagmon,
//       cola,
//     };
//   }

//   getTime() {
//     const now = new Date();
//     const hours = now.getHours().toString().padStart(2, "0");
//     const minutes = now.getMinutes().toString().padStart(2, "0");
//     return `${hours}:${minutes}`;
//   }

//   qoldiq() {
//     const time = this.getTime();
//     console.log(
//       `Hozir ${time}da ${this.products.non}ta non, ${this.products.lagmon}ta lagmon va ${this.products.cola}ta cola mavjud!`
//     );
//   }

//   sotish(product, amount) {
//     if (this.products[product] < amount) {
//       console.log(`Yetarli ${product} yo‘q!`);
//       return;
//     }
//     this.products[product] -= amount;
//     console.log(`${this.getTime()}da ${amount}ta ${product} sotildi!`);
//   }

//   // Qabul qilish
//   qabul(product, amount) {
//     this.products[product] += amount;
//     console.log(`${this.getTime()}da ${amount}ta ${product} qabul qilindi!`);
//   }
// }

// // TEST
// const shop = new Shop(4, 5, 2);

// shop.qoldiq();
// shop.sotish("non", 3);
// shop.qabul("cola", 4);
// setTimeout(() => {
//   shop.qoldiq();
// }, 100000);
// vaqt o'tishi kerak

/* MITASK-E 
Bu yerda prototype orqali barcha stringlar endi reverseString() metodini qabul qila oladi
1.this -- berilayotgan stringning o'zi
2.split -- har bir harfni arrayga aylatirib beradi
3.reverse() -- bu array metodi, arrayga aylangan stringni teskari qilib o'giradi
4.join("") -- va ularni arraydan chiqarib bir biriga qo'shib beradi
*/
console.log("---------- 1-usul ----------");
String.prototype.reverseString = function () {
  return this.split("").reverse().join("");
};

console.log("hello".reverseString());

console.log("---------- 2-usul ----------");
function getReversed(param) {
  const arr = [];
  for (let x = 0; x < param.length; x++) {
    arr.push(param[x]);
  }
  return arr.reverse().join("");
}

console.log(getReversed("hello"));
