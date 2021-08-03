// 从数组中随机取一个元素
function sample(list) {
  return list[Math.floor(Math.random() * list.length)];
}

const shuffle = (list) => list.sort((x, y) => Math.random() - 0.5);

// 从数组中随机取N个元素
function sampleSize(list, n) {
  return shuffle(list).slice(0, n);
}
