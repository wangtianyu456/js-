// 防抖
// 一定时间内 重复触发 只执行最后一次
// 适用于 input 输入 联想提示
const debounce = (fn, wait) => {
  let timer;
  return function (...args) {
    let _this = this;
    if (timer) {
      clearTimeout(timer);
    } else {
      timer = setTimeout(() => {
        fn.apply(_this, ...args);
      }, wait);
    }
  };
};

// 节流
// 频繁触发的方法 改成 每隔一段时间触发一次
// 适用于 scroll resize 等事件
const throttle = (fn, wait) => {
  let timer;
  return function (...args) {
    let _this = this;
    if (timer) {
      return;
    } else {
      timer = setTimeout(() => {
        fn.apply(_this, ...args);
      }, wait);
    }
  };
};
