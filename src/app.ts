// 例題）下記ユーザーデータをタプル型で表現
// 名前: Liam
// 年齢: 20
// 出身地: Tokyo

let user: [string, number, string] = ['Liam', 20, 'Tokyo'];

console.log(user[0]);
console.log(user[1]);
console.log(user[2]);
// console.log(user[3]); // error
user = ['Olivia', 21, 'Osaka'];
// user = [123, 21, 'Osaka']; // error
// user = ['Olivia', 21]; // error
