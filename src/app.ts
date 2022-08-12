// 例題）入賞メッセージの出力。
// 順位numの値よって、出力するメッセージを変えるプログラム
// 1 → Gold
// 2 → Silver
// 3 → Bronze
// 4 → 4th
// 5 → 5th
// それ以外の値 → Other
// let num = 6;
// switch(num) {
//   case 1:
//     console.log('Gold');
//     break;
//   case 2:
//     console.log('Silver');
//     break;
//   case 3:
//     console.log('Bronze');
//     break;
//   case 4:
//     console.log('4th');
//     break;
//   case 5:
//     console.log('5th');
//     break;
//   default:
//     console.log('Other');
//     break;
// }

let num = 6;
if(num === 1) {
  console.log('Gold');
} else if(num === 2) {
  console.log('Silver');
} else if(num === 3) {
  console.log('Bronze');
} else if(num === 4) {
  console.log('4th');
} else if(num === 5) {
  console.log('5th');
} else {
  console.log('Other');
}