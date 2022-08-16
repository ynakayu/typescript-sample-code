// 例題: ユーザーオブジェクトの操作
// 変数userを用意
// 下記のオブジェクトを作成
// name: 'Yuta Nakamura'
// gender: 'man'
// age: 21
// 各式（値）を、プロパティ（キー）を指定して、
// 取り出してコンソールに表示
// const user = {
//   name: 'Yuta Nakamura',
//   gender: 'man',
//   age: 21
// };

// console.log(user.name);
// console.log(user.gender);
// console.log(user.age);

// console.log(user['name']);
// console.log(user['gender']);
// console.log(user['age']);

// user.age = 22;
// console.log(user.age);

// user['age'] = 23;
// console.log(user.age);

// console.log(Object.keys(user).length);
// console.log(Object.keys(user));

const user2: {
  name: string,
  gender: string,
  age: number
} = {
  name: 'Yuta Nakamura',
  gender: 'man',
  age: 20
};

// user2.age = '20'; // NG
// user2.prefecture = 'Tokyo' // NG

console.log(user2.name);
console.log(user2.gender);
console.log(user2.age);

interface UserObj {
  name: string,
  gender: string,
  age?: number
}

const user3: UserObj = {
  name: 'Yuta Nakamura',
  gender: 'man',
  // age: 20
};

console.log(user3.name);
console.log(user3.gender);
console.log(user3.age);



