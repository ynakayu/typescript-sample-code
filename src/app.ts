// 例）タイマー処理
// 3秒経過したら、コンソールに「Timeout!」と表示する。

const displayMessage = () => {
  console.log('Timeout!');
};

setTimeout(displayMessage, 3000);