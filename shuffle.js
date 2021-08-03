function shuffle(list) {
  const len = list.length;
  let result = [...list];
  for (let i = len - 1; i > 0; i--) {
    const swapIndex = Math.floor(Math.random() * (i + 1));
    [result[i], result[swapIndex]] = [result[swapIndex], result[i]];
  }
  return result;
}

const random = (n) => Math.floor(Math.random() * (n + 1));

// 可以重复的 6位 验证码
function randomCode() {
  return [0, 0, 0, 0, 0, 0].map(() => random(9));
}

// 不可以重复的 6 位 验证码
function uniqueRandomCode() {
  return shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]).slice(0, 6);
}
