// 例題）2の倍数、かつ、3の倍数のときに、メッセージを表示する
// const num = 12;
// if(num % 2 === 0) {
//   if(num % 3 === 0){
//     console.log(`${num}は2の倍数、かつ、３の倍数です`);
//   }
// }

const num = 12;
if((num % 2 === 0) && (num % 3 === 0)) {
  console.log(`${num}は2の倍数、かつ、３の倍数です`);
}