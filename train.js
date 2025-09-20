console.log("Callback Funcions");

const onamBuyruqlari = [
  "Abed vaqti bo'ldi yur kettik uxlaymiz", // 2 <> 9
  "Kech kirdi uyga kir tezroq, ustingni qara ...", // 9 <> 12
  "Mollarga o't ber, suvini ber, bor mollarni boqib mol ...", // 12 <> 20
  "Qachon kelasan bolam ...", // 20 <>
];

const action = (a, callback) => {
  if (typeof a !== "number") callback("Please insert a number", null);
  else if (a >= 2 && a <= 9) callback(null, onamBuyruqlari[0]);
  else if (a > 9 && a <= 12) callback(null, onamBuyruqlari[1]);
  else if (a > 12 && a <= 20) callback(null, onamBuyruqlari[2]);
  else if (a > 20) callback(null, onamBuyruqlari[3]);
};

action(45, (err, data) => {
  if (err) console.log("Error", err);
  else {
    console.log(data);
  }
});
