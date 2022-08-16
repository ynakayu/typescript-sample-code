const colors = ['Red', 'Green', 'Blue'];
console.log(colors);

colors.push('Black');
console.log(colors);

colors.unshift('White');
console.log(colors);

colors[1] = 'Aka';
console.log(colors);

const insertArr = ['a', 'b', 'c'];
insertArr.splice(1, 0, 'D');
insertArr.splice(2, 0, 'X', 'Y', 'Z');
console.log(insertArr);

insertArr.splice(2, 2);
console.log(insertArr);

const arr1 = ['a', 'b', 'c'];
const arr2 = ['d', 'e', 'f'];
const mergedArr = arr1.concat(arr2);
console.log(mergedArr);
console.log(arr1);
console.log(arr2);

const arr3 = ['a', 'b', 'c'];
arr3.shift();
console.log(arr3);

arr3.pop();
console.log(arr3);

const arr4 = [1, 2, 3];
const arr5 = [4, 5, 6, ...arr4];
console.log(arr5);

