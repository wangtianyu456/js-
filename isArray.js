function isArray(value) {
  return Object.toString.call(value) === "[object Array]";
}

const _isArray =
  Array.isArray || ((list) => ({}.toString.call(list) === "[object Array]"));
