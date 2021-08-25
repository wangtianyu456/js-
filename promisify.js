function _promisify(fn) {
  return function (...args) {
    return Promise((resolve, reject) => {
      const callback = function (error, ...response) {
        if (error) return reject(error);
        resolve(response);
      };
      fn.apply(null, [...args, callback]);
    });
  };
}
