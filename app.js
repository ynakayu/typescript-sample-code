// ■演習問題
// Aさんは、
// ・体重が60kg
// ・身長が1.7m
// です。
// BMIを計算して、consoleへ出力。
// 補足：
// BMI = 体重(kg) / (身長(m)  * 身長(m) )
// BMI・・・肥満度を表す体格指数。
// 出力は、このようなフォーマットで出力。
// 例）
// BMI: 20.761245674740486
var mass = 60;
var height = 1.7;
var bmi = mass / (height * height);
console.log("BMI: ".concat(bmi));
