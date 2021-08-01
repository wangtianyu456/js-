const sleep = (wait) =>
  new Promise((resolve) => {
    setTimeout(resolve, wait);
  });

// 实现一个 delay 函数格式如下，在 N 毫秒之后执行函数，并以函数结果作为返回值

function delay(func, wait, ...args) {
  return new Promise((resolve) => {
    setTimeout(() => {
      Promise.resolve(func(...args)).then(resolve);
    }, wait);
  });
}
