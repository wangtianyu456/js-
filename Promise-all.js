Promise.all = function (promises) {
  if (!Array.isArray(promises)) return;
  return new Promise((resolve, reject) => {
    const len = promises.length;
    const res = new Array(len);
    let times = 0;
    for (let i = 0; i < len; i++) {
      Promise.resolve(promises[i]).then(
        (value) => {
          res[i] = value;
          times++;
          if (times === len) {
            resolve(res);
          }
        },
        (err) => {
          reject(err);
        },
      );
    }
  });
};
