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

function countDigits(str) {
  let count = 0;
  for (let char of str) {
    if (!isNaN(char) && char !== " ") {
      count++;
    }
  }
  return count;
}

console.log(countDigits("salom"));
