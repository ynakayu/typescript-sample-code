// 演習問題：
// Aさんの 体重は60kg, 身長は1.7mです。

// ①復習：AさんのBMIを求めて出力
// BMI = 体重(kg) / (身長(m) *身長(m)) 

// ②BMIの数値により「痩せ」「普通」「肥満」　を出力
// 18.5未満が「痩せ」
// 18.5以上25未満が「普通」、
// 25以上が「肥満」

const mass = 40;
const height = 1.7;

const bmi = mass / (height * height);
console.log(bmi);

if(bmi >= 25) {
  console.log('肥満');
} else if(bmi >= 18.5) {
  console.log('普通');
} else {
  console.log('痩せ');
}